/** Only detail references to a different page open a new tab. */
export function archiveReferenceTarget(href: string, currentHref: string): "_blank" | undefined {
  if (!href || href.startsWith("#")) return undefined;
  try {
    const current = new URL(currentHref);
    const destination = new URL(href, current);
    if (!/^https?:$/.test(destination.protocol)) return undefined;
    const path = (url: URL) => url.pathname.replace(/\/index\.html$/, "/");
    const route = (url: URL) => url.searchParams.get("page")
      ? "page:" + url.searchParams.get("page")
      : url.searchParams.get("god") && url.searchParams.get("god") !== "index"
        ? "god:" + url.searchParams.get("god") : "index";
    const sameApp = destination.origin === current.origin && path(destination) === path(current);
    // Index navigation, including the return link, stays in the current tab.
    if (sameApp && (route(current) === "index" || route(destination) === "index")) return undefined;
    return sameApp && route(destination) === route(current) ? undefined : "_blank";
  } catch {
    return undefined;
  }
}

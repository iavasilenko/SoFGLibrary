// Quoted preview text is link metadata, never a paragraph or condition boundary.
// Keep literal newlines outside markers; make each complete marker one line.
export function normalizeReferenceMarkers(text: string) {
  return text.replace(/<CrossReference\b(?:"[^"]*"|[^">])*\/>/g,
    marker => marker.replace(/\s*[\r\n]+\s*/g, " "));
}

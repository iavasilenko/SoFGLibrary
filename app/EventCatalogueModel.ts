import { eventGroups as sourceGroups } from "./EventsData";
import { presentEventGroups } from "./EventPresentation";
import { sortArchiveMods } from "./ArchiveModOrder";
export const eventGroups = sortArchiveMods(presentEventGroups(sourceGroups), group => [group.id, group.name]);
export { eventAliases } from "./EventsData";

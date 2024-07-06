import { list } from "./list";

export const sorted = list.sort((a, b) => a.acronym.localeCompare(b.acronym))



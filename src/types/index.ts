import { StateAbbreviations } from '../data/state-abbreviations';

/**
 * Union type of all valid US state abbreviations (e.g., 'AL' | 'AK' | 'AZ' | ... | 'WY')
 * Includes 'DC' for District of Columbia
 */
type USAStateAbbreviation = typeof StateAbbreviations[number];

export type { USAStateAbbreviation };

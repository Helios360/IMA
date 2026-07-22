import data from './site.json';

/**
 * Données du site centralisées dans `site.json`.
 * Modifier le JSON suffit à mettre à jour le contenu du site vitrine —
 * pas besoin de toucher aux composants.
 */
export const site = data;

export type Site = typeof data;
export type Formation = Site['formations'][number];
export type Stat = Site['stats'][number];
export type Stage = Site['stages'][number];

/**
 * Liens de navigation principaux, partagés entre l'en-tête (Nav) et le pied
 * de page (Footer). Les chemins se terminent par « / » pour rester compatibles
 * avec le prérendu statique (trailingSlash = 'always').
 */
export interface NavLink {
	href: string;
	label: string;
}

export const navLinks: NavLink[] = [
	{ href: '/institut/', label: "L'institut" },
	{ href: '/formations/', label: 'Formations' },
	{ href: '/notre-modele/', label: 'Notre modèle' },
	{ href: '/qualite/', label: 'Qualité & financement' },
	{ href: '/recrutement/', label: 'Recrutement' }
];

/** Route de l'appel à l'action « Postuler ». */
export const applyHref = '/candidature/';

import type { Action } from 'svelte/action';

interface InviewOptions {
	/** Fraction visible avant déclenchement (0–1). */
	threshold?: number;
	/** Callback appelé une seule fois quand l'élément entre dans le viewport. */
	onenter?: () => void;
}

/**
 * Action Svelte : appelle `onenter` la première fois que l'élément
 * apparaît à l'écran, puis se désabonne. Sert aux animations de révélation.
 *
 * Usage : <div use:inview={{ onenter: () => (visible = true) }}>
 */
export const inview: Action<HTMLElement, InviewOptions | undefined> = (node, options) => {
	const threshold = options?.threshold ?? 0.2;
	let onenter = options?.onenter;

	// Pas de support IntersectionObserver (ou rendu serveur) → on révèle direct.
	if (typeof IntersectionObserver === 'undefined') {
		onenter?.();
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					onenter?.();
					observer.unobserve(node);
				}
			}
		},
		{ threshold }
	);
	observer.observe(node);

	return {
		update(next) {
			onenter = next?.onenter;
		},
		destroy() {
			observer.disconnect();
		}
	};
};

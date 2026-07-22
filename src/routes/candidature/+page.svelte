<script lang="ts">
	import { site } from '$lib/data/site';
	import Seo from '$lib/components/Seo.svelte';
	import Apply from '$lib/components/Apply.svelte';

	const { address } = site.org;
	// Lien d'itinéraire vers le campus principal (ouvre l'app de cartes du visiteur).
	const mapsQuery = encodeURIComponent(
		`${address.street}, ${address.postalCode} ${address.city}`
	);
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
</script>

<Seo
	title="Candidater / Nous contacter — IMA | Compiègne, Senlis, Chantilly"
	description="Laissez-nous vos coordonnées : l'équipe de l'IMA vous recontacte rapidement pour échanger sur votre projet de formation, la formation visée et les places disponibles."
/>

<div class="page">
	<Apply />

	<section class="band access">
		<div class="wrap">
			<span class="eyebrow">Nous trouver</span>
			<h2 class="h2">Campus principal — {address.city}</h2>
			<p class="lead">{address.street} · {address.postalCode} {address.city}</p>
			<a class="btn btn--navy" href={mapsUrl} target="_blank" rel="noopener noreferrer">
				Itinéraire vers le campus ↗
			</a>
		</div>
	</section>
</div>

<style>
	.access {
		background: var(--paper);
	}
</style>

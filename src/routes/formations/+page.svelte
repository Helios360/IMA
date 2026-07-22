<script lang="ts">
	import { site } from '$lib/data/site';
	import Seo from '$lib/components/Seo.svelte';
	import Formations from '$lib/components/Formations.svelte';
	import References from '$lib/components/References.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	// Une entrée par formation vers sa fiche officielle RNCP, plus les cadres généraux.
	const refs = [
		...site.formations.map((f) => ({
			label: `Fiche RNCP ${f.rncp} — ${f.tabLabel}`,
			href: f.rncpUrl,
			note: f.title
		})),
		{
			label: 'Le Référentiel National Qualité',
			href: site.links.qualiopiReferentiel,
			note: 'Le cadre Qualiopi selon lequel chaque formation est décrite (objectifs, résultats…).'
		},
		{
			label: 'Rechercher une certification',
			href: site.links.rncpSearch,
			note: 'Explorer le répertoire RNCP sur France Compétences.'
		}
	];
</script>

<Seo
	title="Formations — CAP AEPE, DEAES, ADVF, ASMS | IMA, certifié Qualiopi"
	description="Nos 4 formations diplômantes et certifiantes : CAP AEPE, DEAES, Titre Pro ADVF et Titre Pro ASMS. Objectifs, prérequis, débouchés, RNCP et financements (CPF, France Travail). Compiègne, Senlis, Chantilly."
/>

<div class="page">
	<Formations />
	<References
		eyebrow="Fiches officielles"
		title="Vérifiez chaque certification à la source"
		intro="Chaque formation est enregistrée au Répertoire National des Certifications Professionnelles (RNCP). Consultez le détail officiel de chacune."
		links={refs}
		tone="cream"
	/>
	<CtaBand
		title="Une formation vous intéresse&nbsp;?"
		text="Dites-nous laquelle : on vous rappelle pour valider votre projet, le financement et les places disponibles."
		primaryLabel="Candidater"
		primaryHref="/candidature/"
		secondaryLabel="Qualité & financement"
		secondaryHref="/qualite/"
	/>
</div>

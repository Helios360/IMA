<script lang="ts">
	import { site } from '$lib/data/site';
	import Seo from '$lib/components/Seo.svelte';
	import Mission from '$lib/components/Mission.svelte';
	import Thread from '$lib/components/Thread.svelte';
	import References from '$lib/components/References.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const { links } = site;

	const refs = [
		{
			label: 'France Compétences — RNCP',
			href: links.franceCompetences,
			note: 'Le répertoire national des certifications professionnelles reconnues par l’État.'
		},
		{
			label: 'La certification Qualiopi',
			href: links.qualiopi,
			note: 'Ce que garantit la marque Qualiopi et pourquoi elle conditionne les financements.'
		},
		{
			label: 'ONISEP — Métiers du social & du soin',
			href: links.onisep,
			note: 'Découvrir les métiers de la petite enfance, de l’aide à domicile et du grand âge.'
		}
	];
</script>

<Seo
	title="L'institut — IMA, formations aux métiers de l'accompagnement | Compiègne, Senlis, Chantilly"
	description="L'IMA forme aux métiers du soin et de l'accompagnement, de la petite enfance au grand âge. Diplômes reconnus par l'État, suivi personnalisé et emploi à la clé, sur 3 campus de l'Oise."
/>

<div class="page">
	<Mission />
	<Thread />
	<References
		eyebrow="Reconnaissance & références"
		title="Des repères officiels pour vous rassurer"
		intro="Nos diplômes et certifications s'appuient sur des cadres nationaux. Voici les sources officielles pour vérifier et approfondir."
		links={refs}
		tone="cream"
	/>
	<CtaBand
		title="Envie d'en savoir plus sur l'IMA&nbsp;?"
		text="Rencontrons-nous : on vous présente nos formations, nos campus et notre accompagnement."
		primaryLabel="Nous contacter"
		primaryHref="/candidature/"
		secondaryLabel="Voir les formations"
		secondaryHref="/formations/"
	/>
</div>

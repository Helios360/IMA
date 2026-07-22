<script lang="ts">
	import { site } from '$lib/data/site';
	import Seo from '$lib/components/Seo.svelte';
	import Quality from '$lib/components/Quality.svelte';
	import References from '$lib/components/References.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const { links } = site;

	const refs = [
		{
			label: 'Mon Compte Formation (CPF)',
			href: links.cpf,
			note: 'Mobilisez vos droits à la formation pour financer tout ou partie de votre parcours.'
		},
		{
			label: 'France Travail',
			href: links.franceTravail,
			note: 'Aides à la formation pour les demandeurs d’emploi (AIF, rémunération…).'
		},
		{
			label: 'Région Hauts-de-France',
			href: links.regionHdf,
			note: 'Dispositifs régionaux de financement de la formation professionnelle.'
		},
		{
			label: 'La certification Qualiopi',
			href: links.qualiopi,
			note: 'La marque de qualité qui conditionne l’accès aux fonds publics et mutualisés.'
		},
		{
			label: 'AGEFIPH',
			href: links.agefiph,
			note: 'Aides et accompagnement à la formation des personnes en situation de handicap.'
		},
		{
			label: 'Mon parcours handicap',
			href: links.monParcoursHandicap,
			note: 'Le service public d’information et d’orientation sur le handicap.'
		}
	];
</script>

<Seo
	title="Qualité & financement — Certifié Qualiopi, formations finançables CPF | IMA"
	description="L'IMA est certifié Qualiopi au titre des actions de formation. Nos parcours sont finançables via le CPF, France Travail, les OPCO, la Région Hauts-de-France ou l'employeur. Accessibilité handicap assurée."
/>

<div class="page">
	<Quality />
	<References
		eyebrow="Financer & vérifier"
		title="Les bons interlocuteurs pour votre financement"
		intro="Selon votre situation, plusieurs dispositifs peuvent prendre en charge votre formation. Voici les services officiels à connaître."
		links={refs}
	/>
	<CtaBand
		title="On monte votre dossier avec vous"
		text="Financement, éligibilité, aménagements : dites-nous votre situation, on vous guide."
		primaryLabel="Être recontacté·e"
		primaryHref="/candidature/"
		secondaryLabel="Voir les formations"
		secondaryHref="/formations/"
	/>
</div>

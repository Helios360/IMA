<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Model from '$lib/components/Model.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Seo
	title="Notre modèle — Formé, accompagné, employé | IMA"
	description="Le modèle IMA en trois temps : une formation diplômante et concrète, un suivi individuel du positionnement à l'examen, et un emploi à la clé avec nos structures partenaires."
/>

<div class="page">
	<Model />

	<section class="band details">
		<div class="wrap details__grid">
			<article>
				<span class="eyebrow">Un accompagnement de bout en bout</span>
				<h2 class="h2">Vous n'êtes jamais seul·e</h2>
				<p class="lead">
					De l'entretien de positionnement au premier contrat, un référent suit votre parcours.
					L'objectif n'est pas seulement le diplôme : c'est votre insertion durable dans l'emploi.
				</p>
			</article>
			<ul class="details__list">
				<li>
					<strong>Positionnement</strong>
					Un point de départ sur mesure : bilan de vos acquis et construction de votre parcours.
				</li>
				<li>
					<strong>Tutorat & stages</strong>
					Des périodes en structure encadrées par un tuteur, au plus près du terrain.
				</li>
				<li>
					<strong>Préparation à l'examen</strong>
					Mises en situation, épreuves blanches et méthodologie pour aborder les évaluations sereinement.
				</li>
				<li>
					<strong>Entrée dans l'emploi</strong>
					Une mise en relation avec nos structures partenaires du secteur médico-social et de la petite
					enfance.
				</li>
			</ul>
		</div>
	</section>

	<CtaBand
		title="Ce modèle vous parle&nbsp;?"
		text="Faites le premier pas : on construit ensemble votre parcours vers l'emploi."
		primaryLabel="Postuler maintenant"
		secondaryLabel="Découvrir les formations"
		secondaryHref="/formations/"
	/>
</div>

<style>
	.details {
		background: linear-gradient(180deg, var(--cream), #f1ebde);
	}
	.details__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}
	.details__list {
		list-style: none;
		display: grid;
		gap: 1.1rem;
	}
	.details__list li {
		background: #fff;
		border: 1px solid var(--line);
		border-left: 3px solid var(--gold);
		border-radius: 14px;
		padding: 1.1rem 1.3rem;
		font-size: 0.94rem;
		color: var(--ink-soft);
		box-shadow: 0 18px 40px -34px rgba(13, 34, 54, 0.5);
	}
	.details__list strong {
		display: block;
		font-family: var(--display);
		color: var(--navy);
		margin-bottom: 0.25rem;
	}
	@media (max-width: 820px) {
		.details__grid {
			grid-template-columns: 1fr;
			gap: 1.8rem;
		}
	}
</style>

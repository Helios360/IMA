<script lang="ts">
	import { base } from '$app/paths';
	import { site } from '$lib/data/site';
	import Seo from '$lib/components/Seo.svelte';
	import Recruit from '$lib/components/Recruit.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';

	const aepe = site.formations.find((f) => f.id === 'aepe');
</script>

<Seo
	title="Recrutement Rentrée 2026 — 20 postes CAP AEPE | IMA, Compiègne · Senlis · Chantilly"
	description="20 postes à pourvoir dès septembre 2026 en CAP Accompagnant Éducatif Petite Enfance (RNCP 38565). Une seule condition : permis B + véhicule. On vous forme, on vous accompagne, on vous emploie."
/>

<div class="page">
	<Recruit />

	<section class="band howto">
		<div class="wrap">
			<span class="eyebrow">Comment ça marche</span>
			<h2 class="h2">De la candidature au premier poste</h2>
			<div class="howto__steps">
				<div class="howto__step">
					<b>1</b>
					<h3>Vous candidatez</h3>
					<p>Un formulaire, un appel : on échange sur votre projet et votre mobilité.</p>
				</div>
				<div class="howto__step">
					<b>2</b>
					<h3>On vous forme</h3>
					<p>Vous préparez le diplôme d'État en alternance, théorie et terrain.</p>
				</div>
				<div class="howto__step">
					<b>3</b>
					<h3>On vous emploie</h3>
					<p>À la clé, un poste avec nos structures partenaires de l'Oise.</p>
				</div>
			</div>

			{#if aepe}
				<p class="howto__ref">
					Diplôme visé :
					<a href={aepe.rncpUrl} target="_blank" rel="noopener noreferrer">
						{aepe.title} — fiche RNCP {aepe.rncp} ↗
					</a>
				</p>
			{/if}

			<a class="btn btn--gold" href="{base}/candidature/">Je postule</a>
		</div>
	</section>

	<CtaBand
		title="Une seule condition : permis B + véhicule"
		text="Le reste, c'est notre métier. Postulez pour la rentrée 2026 sur l'un de nos trois campus."
		primaryLabel="Postuler maintenant"
		secondaryLabel="Voir la formation CAP AEPE"
		secondaryHref="/formations/#aepe"
	/>
</div>

<style>
	.howto {
		background: linear-gradient(180deg, var(--cream), #f1ebde);
	}
	.howto__steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.4rem;
		margin: 2.4rem 0 2rem;
	}
	.howto__step {
		background: #fff;
		border: 1px solid var(--line);
		border-radius: 18px;
		padding: 1.7rem;
		box-shadow: 0 18px 40px -34px rgba(13, 34, 54, 0.5);
	}
	.howto__step b {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: rgba(47, 122, 130, 0.12);
		color: var(--teal);
		font-family: var(--display);
		font-weight: 800;
		margin-bottom: 0.8rem;
	}
	.howto__step h3 {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.15rem;
		color: var(--navy);
		margin-bottom: 0.4rem;
	}
	.howto__step p {
		font-size: 0.92rem;
		color: var(--ink-soft);
	}
	.howto__ref {
		font-size: 0.92rem;
		color: var(--ink-soft);
		margin-bottom: 1.6rem;
	}
	.howto__ref a {
		color: var(--teal);
		font-weight: 600;
	}
	@media (max-width: 760px) {
		.howto__steps {
			grid-template-columns: 1fr;
		}
	}
</style>

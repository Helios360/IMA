<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<section class="band model" id="modele">
	<div class="wrap">
		<span class="eyebrow">Notre modèle</span>
		<h2 class="h2">Formé, accompagné, employé</h2>
		<p class="lead" style="color:#bcc9d1">
			Trois étapes, une seule trajectoire. Vous n'êtes jamais seul·e, du premier cours au premier
			poste.
		</p>
		<div class="steps">
			{#each site.model as step}
				<div class="step">
					<div class="step__n">{step.n}</div>
					<h3>{step.title}</h3>
					<p>{step.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.model {
		background: var(--navy-deep);
		color: #e9eef1;
	}
	.model :global(.h2) {
		color: #fff;
	}
	.model :global(.eyebrow) {
		color: var(--gold-soft);
	}
	.model :global(.eyebrow::before) {
		color: var(--gold-soft);
	}
	.steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.6rem;
		margin-top: 2.6rem;
	}
	.step {
		position: relative;
		padding: 2rem 1.7rem;
		border-radius: 18px;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
		overflow: hidden;
	}
	.step__n {
		font-family: var(--serif);
		font-style: italic;
		font-size: 3rem;
		color: rgba(220, 194, 138, 0.5);
		line-height: 1;
	}
	.step h3 {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.3rem;
		color: #fff;
		margin: 0.4rem 0 0.55rem;
	}
	.step p {
		font-size: 0.93rem;
		color: #bcc9d1;
	}
	.step::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		height: 3px;
		width: 100%;
		background: linear-gradient(90deg, var(--teal), var(--gold));
	}
	@media (max-width: 760px) {
		.steps {
			grid-template-columns: 1fr;
		}
	}
</style>

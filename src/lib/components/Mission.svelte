<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<section class="band mission" id="institut">
	<div class="wrap mission__inner">
		<div>
			<span class="eyebrow">L'institut</span>
			<h2 class="h2">Accompagner chaque étape de la vie</h2>
			<p class="lead">
				L'IMA est un organisme de formation dédié aux métiers du soin et de l'accompagnement. Nous
				formons celles et ceux qui veulent un travail qui a du sens, avec une promesse simple : un
				diplôme reconnu par l'État, un suivi personnalisé, et un emploi à la clé.
			</p>
			<div class="mission__stats">
				{#each site.stats as stat}
					<div class="stat">
						<div class="stat__num">{stat.num}</div>
						<div class="stat__lbl">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
		<blockquote class="mission__quote">
			« Prendre soin, c'est un savoir-faire autant qu'un savoir-être. Notre rôle est de révéler les
			deux. »
		</blockquote>
	</div>
</section>

<style>
	.mission__inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3.5rem;
		align-items: center;
	}
	.mission__quote {
		font-family: var(--serif);
		font-style: italic;
		font-size: clamp(1.4rem, 2.5vw, 2rem);
		line-height: 1.32;
		color: var(--navy);
		padding-left: 1.4rem;
		border-left: 3px solid var(--gold);
	}
	.mission__stats {
		display: flex;
		gap: 2.2rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}
	.stat__num {
		font-family: var(--display);
		font-weight: 800;
		font-size: 2.3rem;
		color: var(--teal);
		line-height: 1;
	}
	.stat__lbl {
		font-size: 0.81rem;
		color: var(--ink-soft);
		margin-top: 0.3rem;
		max-width: 15ch;
	}
	@media (max-width: 820px) {
		.mission__inner {
			grid-template-columns: 1fr;
			gap: 1.8rem;
		}
	}
</style>

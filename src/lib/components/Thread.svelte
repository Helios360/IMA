<script lang="ts">
	import { site } from '$lib/data/site';
	import { inview } from '$lib/actions/inview';

	let drawn = $state(false);
	let shown = $state(site.stages.map(() => false));
</script>

<section class="band thread" id="domaines">
	<div class="wrap thread__head">
		<span class="eyebrow">Nos domaines</span>
		<h2 class="h2">Un même fil, toute une vie</h2>
		<p class="lead">
			L'accompagnement suit la personne à chaque âge. Nos formations couvrent ce fil continu, des
			premiers pas aux dernières années.
		</p>
	</div>
	<div class="wrap">
		<div
			class="timeline"
			class:drawn
			use:inview={{ threshold: 0.15, onenter: () => (drawn = true) }}
		>
			<svg class="timeline__svg" preserveAspectRatio="none" viewBox="0 0 60 900" aria-hidden="true">
				<path
					class="timeline__path"
					d="M30 0 C 30 150, 30 150, 30 300 C 30 450, 30 450, 30 600 C 30 750, 30 750, 30 900"
				/>
			</svg>

			{#each site.stages as stage, i}
				<article
					class="stage stage--{stage.mod}"
					class:show={shown[i]}
					use:inview={{ threshold: 0.3, onenter: () => (shown[i] = true) }}
				>
					<div class="stage__card">
						<div class="stage__age">{stage.age}</div>
						<h3>{stage.title}</h3>
						<p>{stage.text}</p>
					</div>
					<div class="stage__node">✦</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.thread {
		background: linear-gradient(180deg, var(--cream), #f1ebde);
	}
	.thread__head {
		text-align: center;
		max-width: 62ch;
		margin: 0 auto 3rem;
	}
	.thread__head :global(.lead) {
		margin-inline: auto;
	}
	.timeline {
		position: relative;
		max-width: 880px;
		margin: 0 auto;
	}
	.timeline__svg {
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		height: 100%;
		width: 60px;
		z-index: 1;
		overflow: visible;
	}
	.timeline__path {
		fill: none;
		stroke: var(--gold);
		stroke-width: 2.4;
		stroke-dasharray: 1600;
		stroke-dashoffset: 1600;
		transition: stroke-dashoffset 1.6s ease;
	}
	.timeline.drawn .timeline__path {
		stroke-dashoffset: 0;
	}
	.stage {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 60px 1fr;
		align-items: center;
		margin-bottom: 2.2rem;
		z-index: 2;
	}
	.stage__card {
		background: var(--paper);
		border: 1px solid var(--line);
		border-radius: 18px;
		padding: 1.6rem 1.7rem;
		box-shadow: 0 18px 40px -28px rgba(13, 34, 54, 0.5);
		opacity: 0;
		transform: translateY(26px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease,
			box-shadow 0.3s;
	}
	.stage.show .stage__card {
		opacity: 1;
		transform: none;
	}
	.stage__card:hover {
		box-shadow: 0 26px 54px -26px rgba(13, 34, 54, 0.55);
		transform: translateY(-3px);
	}
	.stage:nth-child(odd) .stage__card {
		grid-column: 1;
	}
	.stage:nth-child(even) .stage__card {
		grid-column: 3;
	}
	.stage__node {
		grid-column: 2;
		width: 46px;
		height: 46px;
		border-radius: 50%;
		justify-self: center;
		display: grid;
		place-items: center;
		background: var(--paper);
		border: 2px solid var(--gold);
		color: var(--gold);
		font-size: 1rem;
		z-index: 3;
	}
	.stage__age {
		font-size: 0.71rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		margin-bottom: 0.45rem;
	}
	.stage--enfance .stage__age {
		color: var(--teal);
	}
	.stage--enfance .stage__node {
		border-color: var(--teal);
		color: var(--teal);
	}
	.stage--personne .stage__age {
		color: var(--sage);
	}
	.stage--personne .stage__node {
		border-color: var(--sage);
		color: var(--sage);
	}
	.stage--age .stage__age {
		color: var(--gold);
	}
	.stage__card h3 {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--navy);
		margin-bottom: 0.45rem;
	}
	.stage__card p {
		font-size: 0.94rem;
		color: var(--ink-soft);
	}

	/* Sans animation : cartes visibles d'emblée */
	@media (prefers-reduced-motion: reduce) {
		.timeline__path {
			stroke-dashoffset: 0;
		}
		.stage__card {
			opacity: 1;
			transform: none;
		}
	}

	@media (max-width: 760px) {
		.timeline__svg {
			left: 24px;
			transform: none;
		}
		.stage {
			grid-template-columns: 48px 1fr;
			gap: 1rem;
		}
		.stage__node {
			grid-column: 1;
		}
		.stage:nth-child(odd) .stage__card,
		.stage:nth-child(even) .stage__card {
			grid-column: 2;
		}
	}
</style>

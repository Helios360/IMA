<script lang="ts">
	import { base } from '$app/paths';
	import { applyHref } from '$lib/nav';

	interface Props {
		title?: string;
		text?: string;
		/** Libellé + href du bouton principal (doré). */
		primaryLabel?: string;
		primaryHref?: string;
		/** Libellé + href du bouton secondaire (contour clair). Optionnel. */
		secondaryLabel?: string;
		secondaryHref?: string;
	}

	let {
		title = 'Prêt·e à vous lancer&nbsp;?',
		text = "Parlez-nous de votre projet : on vous rappelle pour trouver la formation et le campus qui vous conviennent.",
		primaryLabel = 'Postuler maintenant',
		primaryHref = applyHref,
		secondaryLabel = 'Voir les formations',
		secondaryHref = '/formations/'
	}: Props = $props();
</script>

<section class="band cta">
	<div class="wrap cta__card">
		<div class="cta__glow"></div>
		<div class="cta__body">
			<h2>{@html title}</h2>
			<p>{@html text}</p>
		</div>
		<div class="cta__actions">
			<a class="btn btn--gold" href="{base}{primaryHref}">{primaryLabel}</a>
			{#if secondaryLabel && secondaryHref}
				<a class="btn cta__ghost" href="{base}{secondaryHref}">{secondaryLabel}</a>
			{/if}
		</div>
	</div>
</section>

<style>
	.cta {
		background: var(--paper);
	}
	.cta__card {
		position: relative;
		overflow: hidden;
		background: linear-gradient(150deg, #0f3b54, #1c5560);
		color: #eef3f5;
		border-radius: 26px;
		padding: clamp(2rem, 5vw, 3.4rem);
		display: flex;
		flex-wrap: wrap;
		gap: 1.6rem 3rem;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 40px 80px -50px rgba(13, 34, 54, 0.9);
	}
	.cta__glow {
		position: absolute;
		right: -60px;
		top: -60px;
		width: 240px;
		height: 240px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(198, 164, 92, 0.3), transparent 70%);
		pointer-events: none;
	}
	.cta__body {
		position: relative;
		z-index: 1;
		max-width: 46ch;
	}
	.cta__body h2 {
		font-family: var(--display);
		font-weight: 700;
		font-size: clamp(1.5rem, 3vw, 2.1rem);
		color: #fff;
		line-height: 1.15;
	}
	.cta__body p {
		margin-top: 0.7rem;
		color: #cdd9df;
		font-size: 0.98rem;
	}
	.cta__actions {
		position: relative;
		z-index: 1;
		display: flex;
		gap: 0.9rem;
		flex-wrap: wrap;
	}
	.cta__ghost {
		background: transparent;
		color: #fff;
		border: 1.5px solid rgba(255, 255, 255, 0.5);
	}
	.cta__ghost:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: translateY(-2px);
	}
</style>

<script lang="ts">
	import { base } from '$app/paths';
</script>

<header class="hero" id="top">
	<svg
		class="hero__star"
		style="top:14%;left:9%;width:24px"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M12 0l2.2 8.4L22 12l-7.8 3.6L12 24l-2.2-8.4L2 12l7.8-3.6z" />
	</svg>
	<svg
		class="hero__star"
		style="bottom:20%;right:13%;width:16px"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M12 0l2.2 8.4L22 12l-7.8 3.6L12 24l-2.2-8.4L2 12l7.8-3.6z" />
	</svg>

	<div class="wrap hero__grid">
		<div class="hero__copy">
			<span class="hero__eyebrow">Organisme de formation certifié</span>
			<h1>Et si vous faisiez de votre cœur <em>un métier&nbsp;?</em></h1>
			<p class="hero__sub">
				Des formations diplômantes aux métiers du soin et de l'accompagnement — de la petite enfance
				au grand âge. On vous forme, on vous accompagne, on vous emploie.
			</p>
			<div class="hero__actions">
				<a class="btn btn--gold" href="{base}/formations/">Voir les formations</a>
				<a class="btn btn--ghost" href="{base}/candidature/">Demander de l'info</a>
			</div>
			<div class="hero__badges">
				<span>✔ Certifié <b>Qualiopi</b></span>
				<span>✔ Éligible <b>CPF</b></span>
				<span>✔ <b>Compiègne · Senlis · Chantilly</b></span>
			</div>
		</div>
		<div class="hero__logo">
			<span class="hero__halo"></span>
			<img
				class="hero__logo-img"
				src="{base}/logo-full.png"
				alt="IMA — Institut des Métiers de l'Accompagnement, accompagner chaque étape de la vie"
			/>
		</div>
	</div>
</header>

<style>
	.hero {
		position: relative;
		min-height: 100svh;
		display: flex;
		align-items: center;
		color: var(--ink);
		overflow: hidden;
		padding: 7rem 0 4rem;
		background:
			radial-gradient(120% 90% at 82% 6%, rgba(47, 117, 127, 0.14), transparent 55%),
			radial-gradient(110% 85% at 8% 98%, rgba(194, 160, 90, 0.16), transparent 60%),
			linear-gradient(165deg, #fbf9f3 0%, #f4eee2 60%, #eef4f2 100%);
	}
	.hero__star {
		position: absolute;
		color: rgba(194, 160, 90, 0.45);
		pointer-events: none;
	}
	.hero__grid {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 3rem;
		align-items: center;
	}
	.hero__eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--teal);
		margin-bottom: 1.4rem;
	}
	.hero__eyebrow::before {
		content: '';
		width: 30px;
		height: 1px;
		background: var(--gold);
	}
	.hero h1 {
		font-family: var(--display);
		font-weight: 700;
		line-height: 1.04;
		font-size: clamp(2.3rem, 5.2vw, 3.9rem);
		letter-spacing: -0.02em;
		color: var(--navy);
	}
	.hero h1 em {
		font-family: var(--serif);
		font-style: italic;
		font-weight: 500;
		color: var(--gold);
	}
	.hero__sub {
		margin: 1.5rem 0 2rem;
		max-width: 34ch;
		font-size: 1.06rem;
		color: var(--ink-soft);
	}
	.hero__actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}
	.hero__badges {
		display: flex;
		gap: 1.2rem;
		margin-top: 2.2rem;
		flex-wrap: wrap;
		align-items: center;
	}
	.hero__badges span {
		font-size: 0.78rem;
		color: var(--ink-soft);
		display: flex;
		align-items: center;
		gap: 0.45rem;
	}
	.hero__badges b {
		color: var(--teal);
	}
	.hero__logo {
		justify-self: center;
		position: relative;
	}
	.hero__logo-img {
		width: min(360px, 74vw);
		filter: drop-shadow(0 24px 44px rgba(15, 59, 84, 0.18));
		animation: float 7s ease-in-out infinite;
	}
	.hero__halo {
		position: absolute;
		inset: -8%;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(246, 241, 231, 0) 64%);
		z-index: -1;
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-12px);
		}
	}

	@media (max-width: 920px) {
		.hero__grid {
			grid-template-columns: 1fr;
			text-align: center;
		}
		.hero__sub,
		.hero__badges {
			margin-inline: auto;
			justify-content: center;
		}
		.hero__actions {
			justify-content: center;
		}
		.hero__logo {
			order: -1;
		}
		.hero__logo-img {
			width: min(230px, 58vw);
		}
	}
</style>

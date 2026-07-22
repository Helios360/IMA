<script lang="ts">
	import { base } from '$app/paths';
	import { site } from '$lib/data/site';

	const r = site.recruitment;
</script>

<section class="band recruit" id="recrutement">
	<div class="wrap">
		<span class="eyebrow">{r.eyebrow}</span>
		<h2 class="h2" style="margin-bottom:2.2rem">Postes à pourvoir dès septembre</h2>
		<div class="recruit__card">
			<div class="recruit__big">{r.count}<small>{r.countLabel}</small></div>
			<div class="recruit__body">
				<h3>{r.diplomaShort}</h3>
				<div class="recruit__diploma">{r.diplomaLong}</div>
				<div class="recruit__cities">
					{#each site.org.campuses as city}
						<span class="chip">📍 {city}</span>
					{/each}
				</div>
				<p class="recruit__cond">
					Une seule condition pour postuler : <strong>permis B + véhicule.</strong> On s'occupe du
					reste — formation, accompagnement et emploi.
				</p>
				<a class="btn btn--gold" href="{base}/candidature/" style="margin-top:1.3rem"
					>Postuler maintenant</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.recruit {
		background: var(--paper);
	}
	.recruit__card {
		background: linear-gradient(150deg, #0f3b54, #1c5560);
		color: #eef3f5;
		border-radius: 26px;
		padding: clamp(2rem, 5vw, 3.4rem);
		display: grid;
		grid-template-columns: auto 1fr;
		gap: clamp(1.5rem, 4vw, 3.2rem);
		align-items: center;
		box-shadow: 0 40px 80px -50px rgba(13, 34, 54, 0.9);
		position: relative;
		overflow: hidden;
	}
	.recruit__card::before {
		content: '';
		position: absolute;
		right: -60px;
		top: -60px;
		width: 240px;
		height: 240px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(198, 164, 92, 0.3), transparent 70%);
	}
	.recruit__big {
		font-family: var(--display);
		font-weight: 800;
		font-size: clamp(4rem, 13vw, 6.5rem);
		color: var(--gold-soft);
		line-height: 0.9;
	}
	.recruit__big small {
		display: block;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #cdd9df;
		margin-top: 0.4rem;
	}
	.recruit__body h3 {
		font-family: var(--display);
		font-weight: 700;
		font-size: clamp(1.3rem, 3vw, 1.9rem);
		color: #fff;
		margin-bottom: 0.4rem;
	}
	.recruit__diploma {
		color: var(--gold-soft);
		font-weight: 600;
		margin-bottom: 1.1rem;
	}
	.recruit__cities {
		display: flex;
		gap: 0.6rem;
		flex-wrap: wrap;
		margin-bottom: 1.2rem;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		font-weight: 600;
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.16);
		padding: 0.45rem 0.9rem;
		border-radius: 999px;
	}
	.recruit__cond {
		font-size: 0.94rem;
		color: #cdd9df;
	}
	.recruit__cond strong {
		color: #fff;
	}
	@media (max-width: 680px) {
		.recruit__card {
			grid-template-columns: 1fr;
			text-align: center;
		}
		.recruit__cities {
			justify-content: center;
		}
	}
</style>

<script lang="ts">
	import { base } from '$app/paths';
	import { site } from '$lib/data/site';
</script>

<section class="band teaser" id="formations">
	<div class="wrap">
		<div class="teaser__head">
			<span class="eyebrow">Nos formations</span>
			<h2 class="h2">Des diplômes et titres reconnus</h2>
			<p class="lead">
				Quatre parcours diplômants ou certifiants, de la petite enfance au grand âge — tous éligibles
				aux financements (CPF, France Travail…). Consultez la fiche complète de chacun.
			</p>
		</div>

		<div class="teaser__grid">
			{#each site.formations as f}
				<a class="fcard fcard--{f.id}" href="{base}/formations/#{f.id}">
					<span class="fcard__domain">{f.tabDomain}</span>
					<h3>{f.tabLabel}</h3>
					<p>{f.title}</p>
					<div class="fcard__meta">
						{#each f.meta.slice(0, 2) as m}
							<span>{m}</span>
						{/each}
					</div>
					<span class="fcard__link">Voir la fiche →</span>
				</a>
			{/each}
		</div>

		<div class="teaser__cta">
			<a class="btn btn--navy" href="{base}/formations/">Toutes les formations</a>
		</div>
	</div>
</section>

<style>
	.teaser {
		background: var(--paper);
	}
	.teaser__head {
		max-width: 64ch;
		margin-bottom: 2.4rem;
	}
	.teaser__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		gap: 1.2rem;
	}
	.fcard {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: #fff;
		border: 1px solid var(--line);
		border-radius: 18px;
		padding: 1.6rem 1.5rem;
		box-shadow: 0 18px 40px -34px rgba(13, 34, 54, 0.5);
		border-top: 3px solid var(--teal);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}
	.fcard--advf,
	.fcard--asms {
		border-top-color: var(--gold);
	}
	.fcard--deaes {
		border-top-color: var(--sage);
	}
	.fcard:hover {
		transform: translateY(-4px);
		box-shadow: 0 28px 54px -30px rgba(13, 34, 54, 0.55);
	}
	.fcard__domain {
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.fcard h3 {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--navy);
	}
	.fcard p {
		font-size: 0.88rem;
		color: var(--ink-soft);
		flex: 1;
	}
	.fcard__meta {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}
	.fcard__meta span {
		font-size: 0.72rem;
		background: rgba(15, 59, 84, 0.06);
		border: 1px solid var(--line);
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		color: var(--ink-soft);
	}
	.fcard__link {
		font-family: var(--display);
		font-weight: 600;
		font-size: 0.85rem;
		color: var(--teal);
		margin-top: 0.3rem;
	}
	.teaser__cta {
		margin-top: 2.2rem;
	}
</style>

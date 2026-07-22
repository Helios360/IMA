<script lang="ts">
	import { base } from '$app/paths';
	import { site } from '$lib/data/site';

	import { onMount } from 'svelte';

	const formations = site.formations;
	let activeId = $state(formations[0].id);

	const active = $derived(formations.find((f) => f.id === activeId) ?? formations[0]);

	// Ouvre l'onglet correspondant au lien profond (ex. /formations/#deaes).
	function syncFromHash() {
		const id = window.location.hash.slice(1);
		if (formations.some((f) => f.id === id)) activeId = id;
	}

	onMount(() => {
		syncFromHash();
		window.addEventListener('hashchange', syncFromHash);
		return () => window.removeEventListener('hashchange', syncFromHash);
	});

	const indicators = [
		{ value: 'XX %', label: 'Taux de réussite' },
		{ value: 'XX %', label: 'Satisfaction' },
		{ value: 'XX %', label: 'Insertion / 6 mois' }
	];
</script>

<section class="band formations" id="formations">
	<div class="wrap">
		<div class="fmt__head">
			<span class="eyebrow">Nos formations</span>
			<h2 class="h2">Des diplômes et titres reconnus</h2>
			<p class="lead">
				Chaque formation est présentée avec ses objectifs, prérequis, modalités, débouchés et
				résultats — conformément au Référentiel National Qualité (Qualiopi). Sélectionnez une
				formation pour consulter sa fiche complète.
			</p>
		</div>

		<div class="tabs" role="tablist">
			{#each formations as f}
				<button
					id={f.id}
					class="tab"
					class:active={f.id === activeId}
					role="tab"
					aria-selected={f.id === activeId}
					onclick={() => (activeId = f.id)}
				>
					<small>{f.tabDomain}</small>{f.tabLabel}
				</button>
			{/each}
		</div>

		{#key active.id}
			<div class="panel active" role="tabpanel">
				<div class="fiche">
					<div class="fiche__top">
						<div>
							<div class="domain">{active.domain}</div>
							<h3>{active.title}</h3>
							<div class="fiche__meta">
								{#each active.meta as m}
									<span>{m}</span>
								{/each}
							</div>
						</div>
					</div>

					<div class="fiche__grid">
						{#each active.fields as field}
							<div class="field-row" class:full={field.full}>
								<h4>{@html field.label}</h4>
								<p>{@html field.html}</p>
							</div>
						{/each}

						<div class="indicators">
							{#each indicators as ind}
								<div class="indicator">
									<b class="ph">{ind.value}</b><span>{ind.label}</span>
								</div>
							{/each}
						</div>
					</div>

					<div class="fiche__foot">
						<div class="fiche__foot-info">
							<p>{@html active.footnote}</p>
							<a
								class="fiche__rncp"
								href={active.rncpUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								Consulter la fiche officielle RNCP {active.rncp} sur France Compétences
								<svg
									viewBox="0 0 24 24"
									width="13"
									height="13"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									aria-hidden="true"><path d="M7 17L17 7M17 7H8M17 7v9" /></svg
								>
							</a>
						</div>
						<a class="btn btn--navy" href="{base}/candidature/">Candidater à cette formation</a>
					</div>
				</div>
			</div>
		{/key}
	</div>
</section>

<style>
	.formations {
		background: var(--paper);
	}
	.fmt__head {
		max-width: 64ch;
		margin-bottom: 2.4rem;
	}
	.tabs {
		display: flex;
		gap: 0.6rem;
		flex-wrap: wrap;
		margin-bottom: 2rem;
	}
	.tab {
		font-family: var(--display);
		font-weight: 600;
		font-size: 0.86rem;
		border: 1.5px solid var(--line);
		background: #fff;
		color: var(--ink-soft);
		padding: 0.7rem 1.1rem;
		border-radius: 12px;
		cursor: pointer;
		transition: 0.2s;
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		text-align: left;
	}
	.tab small {
		font-size: 0.66rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.tab:hover {
		border-color: var(--teal);
	}
	.tab.active {
		background: var(--navy);
		color: #fff;
		border-color: var(--navy);
	}
	.tab.active small {
		color: var(--gold-soft);
	}
	.panel {
		animation: fade 0.4s ease;
	}
	@keyframes fade {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
	.fiche {
		background: #fff;
		border: 1px solid var(--line);
		border-radius: 22px;
		overflow: hidden;
		box-shadow: 0 28px 60px -44px rgba(13, 34, 54, 0.6);
	}
	.fiche__top {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;
		align-items: flex-start;
		padding: 2rem clamp(1.5rem, 4vw, 2.6rem);
		background: linear-gradient(135deg, #0f3b54, #1c5560);
		color: #eef3f5;
	}
	.fiche__top h3 {
		font-family: var(--display);
		font-weight: 700;
		font-size: clamp(1.4rem, 3vw, 2rem);
		color: #fff;
	}
	.fiche__top .domain {
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--gold-soft);
		margin-bottom: 0.5rem;
	}
	.fiche__meta {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-top: 0.8rem;
	}
	.fiche__meta span {
		font-size: 0.76rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.16);
		padding: 0.35rem 0.7rem;
		border-radius: 999px;
	}
	.fiche__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0;
		padding: 0;
	}
	.field-row {
		padding: 1.3rem clamp(1.5rem, 4vw, 2.6rem);
		border-bottom: 1px solid var(--line);
		border-right: 1px solid var(--line);
	}
	.field-row:nth-child(even) {
		border-right: 0;
	}
	.field-row h4 {
		font-family: var(--display);
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--teal);
		margin-bottom: 0.4rem;
	}
	.field-row p {
		font-size: 0.93rem;
		color: var(--ink);
		line-height: 1.55;
	}
	.field-row.full {
		grid-column: 1 / -1;
		border-right: 0;
	}
	.indicators {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1px;
		background: var(--line);
		grid-column: 1 / -1;
	}
	.indicator {
		background: #fbf8f1;
		padding: 1.4rem 1rem;
		text-align: center;
	}
	.indicator b {
		display: block;
		font-family: var(--display);
		font-weight: 800;
		font-size: 1.7rem;
		color: var(--navy);
	}
	.indicator span {
		font-size: 0.74rem;
		color: var(--ink-soft);
		letter-spacing: 0.04em;
	}
	.fiche__foot {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem clamp(1.5rem, 4vw, 2.6rem);
		background: #fbf8f1;
	}
	.fiche__foot-info {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 52ch;
	}
	.fiche__foot p {
		font-size: 0.82rem;
		color: var(--ink-soft);
	}
	.fiche__rncp {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-family: var(--display);
		font-weight: 600;
		font-size: 0.82rem;
		color: var(--teal);
		transition: color 0.2s;
	}
	.fiche__rncp:hover {
		color: var(--navy);
	}

	@media (max-width: 680px) {
		.fiche__grid {
			grid-template-columns: 1fr;
		}
		.field-row {
			border-right: 0;
		}
		.indicators {
			grid-template-columns: 1fr;
		}
	}
</style>

<script lang="ts">
	export interface RefLink {
		label: string;
		href: string;
		note?: string;
	}

	interface Props {
		eyebrow?: string;
		title?: string;
		intro?: string;
		links: RefLink[];
		/** Fond de section : 'paper' (défaut) ou 'cream'. */
		tone?: 'paper' | 'cream';
	}

	let {
		eyebrow = 'Pour aller plus loin',
		title = 'Références & liens utiles',
		intro = '',
		links,
		tone = 'paper'
	}: Props = $props();
</script>

<section class="band refs" class:refs--cream={tone === 'cream'}>
	<div class="wrap">
		<span class="eyebrow">{eyebrow}</span>
		<h2 class="h2">{title}</h2>
		{#if intro}<p class="lead">{intro}</p>{/if}

		<ul class="refs__list">
			{#each links as link}
				<li>
					<a class="refs__item" href={link.href} target="_blank" rel="noopener noreferrer">
						<span class="refs__label">
							{link.label}
							<svg
								class="refs__ext"
								viewBox="0 0 24 24"
								width="14"
								height="14"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M7 17L17 7M17 7H8M17 7v9" />
							</svg>
						</span>
						{#if link.note}<span class="refs__note">{link.note}</span>{/if}
						<span class="refs__host">{new URL(link.href).hostname.replace('www.', '')}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.refs {
		background: var(--paper);
	}
	.refs--cream {
		background: linear-gradient(180deg, var(--cream), #f1ebde);
	}
	.refs__list {
		list-style: none;
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1rem;
	}
	.refs__item {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		height: 100%;
		background: #fff;
		border: 1px solid var(--line);
		border-radius: 16px;
		padding: 1.2rem 1.3rem;
		box-shadow: 0 18px 40px -34px rgba(13, 34, 54, 0.5);
		transition:
			transform 0.2s,
			box-shadow 0.2s,
			border-color 0.2s;
	}
	.refs__item:hover {
		transform: translateY(-3px);
		border-color: var(--teal);
		box-shadow: 0 24px 50px -30px rgba(13, 34, 54, 0.55);
	}
	.refs__label {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--display);
		font-weight: 600;
		font-size: 1rem;
		color: var(--navy);
	}
	.refs__ext {
		color: var(--teal);
		flex: 0 0 auto;
	}
	.refs__note {
		font-size: 0.86rem;
		color: var(--ink-soft);
		line-height: 1.5;
	}
	.refs__host {
		margin-top: auto;
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		color: var(--teal);
		font-weight: 600;
	}
</style>

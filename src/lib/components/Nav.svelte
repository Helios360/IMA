<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { site } from '$lib/data/site';
	import { navLinks, applyHref } from '$lib/nav';

	let scrollY = $state(0);
	let menuOpen = $state(false);

	const scrolled = $derived(scrollY > 20);

	/** Le chemin courant, débarrassé de l'éventuel préfixe `base`. */
	const currentPath = $derived(page.url.pathname.slice(base.length) || '/');

	function isActive(href: string) {
		return currentPath === href;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:window bind:scrollY />

<nav class="nav" class:scrolled>
	<a class="nav__brand" href="{base}/" onclick={closeMenu}>
		<img class="nav__logo" src="{base}/logo-mark.png" alt="Logo IMA" />
		<span><b>{site.org.shortName}</b><small>{site.org.tagline}</small></span>
	</a>

	<div class="nav__links" class:open={menuOpen}>
		{#each navLinks as link}
			<a
				href="{base}{link.href}"
				class:active={isActive(link.href)}
				aria-current={isActive(link.href) ? 'page' : undefined}
				onclick={closeMenu}
			>
				{link.label}
			</a>
		{/each}
		<a class="nav__cta" href="{base}{applyHref}" onclick={closeMenu}>Postuler</a>
	</div>

	<button
		class="nav__burger"
		class:open={menuOpen}
		aria-label="Menu"
		aria-expanded={menuOpen}
		onclick={() => (menuOpen = !menuOpen)}
	>
		<span></span><span></span><span></span>
	</button>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 60;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.6rem clamp(1rem, 4vw, 2.4rem);
		background: rgba(252, 250, 244, 0.84);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid transparent;
		transition:
			border-color 0.4s,
			box-shadow 0.4s;
	}
	.nav.scrolled {
		border-bottom-color: var(--line);
		box-shadow: 0 6px 24px -18px rgba(13, 34, 54, 0.5);
	}
	.nav__brand {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--navy);
	}
	.nav__logo {
		height: 40px;
		width: auto;
		display: block;
	}
	.nav__brand b {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.1rem;
		letter-spacing: 0.06em;
		line-height: 1;
	}
	.nav__brand small {
		display: block;
		font-size: 0.56rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-soft);
		font-weight: 600;
	}
	.nav__links {
		display: flex;
		gap: 1.7rem;
		align-items: center;
	}
	.nav__links a {
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.03em;
		color: var(--ink-soft);
		transition: color 0.2s;
	}
	.nav__links a:hover,
	.nav__links a.active {
		color: var(--teal);
	}
	.nav__cta {
		font-family: var(--display);
		font-weight: 600;
		background: var(--gold);
		color: var(--navy-deep) !important;
		padding: 0.55rem 1.1rem;
		border-radius: 999px;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}
	.nav__cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 22px -10px rgba(198, 164, 92, 0.8);
	}
	.nav__burger {
		display: none;
		background: none;
		border: 0;
		cursor: pointer;
		flex-direction: column;
		gap: 5px;
		padding: 6px;
	}
	.nav__burger span {
		width: 22px;
		height: 2px;
		background: var(--navy);
		border-radius: 2px;
		transition: 0.3s;
	}

	@media (max-width: 920px) {
		.nav__links {
			position: fixed;
			inset: 0 0 0 auto;
			width: min(80vw, 330px);
			flex-direction: column;
			justify-content: center;
			gap: 1.5rem;
			background: var(--navy-deep);
			padding: 2rem;
			transform: translateX(100%);
			transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
		}
		.nav__links.open {
			transform: translateX(0);
		}
		.nav__links a {
			color: #dfe7ec;
			font-size: 1rem;
		}
		.nav__links a:hover,
		.nav__links a.active {
			color: var(--gold-soft);
		}
		.nav__burger {
			display: flex;
		}
		.nav__burger.open span:nth-child(1) {
			transform: translateY(7px) rotate(45deg);
		}
		.nav__burger.open span:nth-child(2) {
			opacity: 0;
		}
		.nav__burger.open span:nth-child(3) {
			transform: translateY(-7px) rotate(-45deg);
		}
	}
</style>

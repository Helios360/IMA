<script lang="ts">
	import { base } from '$app/paths';
	import { site } from '$lib/data/site';

	const legal = site.org.legal;
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="wrap">
		<div class="footer__top">
			<div class="footer__brand">
				<a href="{base}/" aria-label="Accueil IMA">
					<img
						class="footer__logo"
						src="{base}/logo-full.png"
						alt="IMA — Institut des Métiers de l'Accompagnement"
					/>
				</a>
			</div>
			<div class="footer__cols">
				<div>
					<h4>Formations</h4>
					{#each site.formations as f}
						<a href="{base}/formations/#{f.id}">{f.tabLabel}</a>
					{/each}
				</div>
				<div>
					<h4>Institut</h4>
					<a href="{base}/institut/">L'institut</a>
					<a href="{base}/notre-modele/">Notre modèle</a>
					<a href="{base}/qualite/">Qualité &amp; financement</a>
					<a href="{base}/recrutement/">Recrutement 2026</a>
				</div>
				<div>
					<h4>Contact</h4>
					<a href="mailto:{site.org.email}">{site.org.email}</a>
					<a href="tel:{site.org.phone}">{site.org.phoneDisplay}</a>
					<span>{site.org.address.street}<br />{site.org.address.postalCode} {site.org.address.city}</span>
					<span>{site.org.campuses.join(' · ')}</span>
				</div>
			</div>
		</div>
		<p class="footer__legal">
			Institut des Métiers de l'Accompagnement — SIRET <span class="ph">{legal.siret}</span> ·
			Déclaration d'activité enregistrée sous le n° <span class="ph">{legal.nda}</span> auprès du
			préfet de région Hauts-de-France (ne vaut pas agrément de l'État) · Certifié Qualiopi au titre
			des actions de formation, certificat n° <span class="ph">{legal.qualiopiCertNumber}</span>.
			Mentions légales · Politique de confidentialité (RGPD) · CGV —
			<span class="ph">[liens à ajouter]</span>.
		</p>
		<p class="footer__bottom">
			© {year} IMA · Petite enfance · Services à la personne · Grand âge
		</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--navy-deep);
		color: #aebcc6;
		padding: 3.5rem 0 2rem;
	}
	.footer__top {
		display: flex;
		justify-content: space-between;
		gap: 2.5rem;
		flex-wrap: wrap;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 2rem;
	}
	.footer__brand {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		max-width: 300px;
	}
	.footer__logo {
		height: 118px;
		width: auto;
		background: #fff;
		border-radius: 16px;
		padding: 14px 18px;
		box-shadow: 0 14px 30px -18px rgba(0, 0, 0, 0.5);
	}
	.footer__cols {
		display: flex;
		gap: 2.6rem;
		flex-wrap: wrap;
	}
	.footer__cols h4 {
		color: #fff;
		font-size: 0.76rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		margin-bottom: 0.8rem;
		font-family: var(--display);
	}
	.footer__cols a,
	.footer__cols span {
		display: block;
		font-size: 0.88rem;
		margin-bottom: 0.5rem;
		transition: color 0.2s;
	}
	.footer__cols a:hover {
		color: var(--gold-soft);
	}
	.footer__legal {
		font-size: 0.76rem;
		color: #7c8c97;
		padding-top: 1.6rem;
		line-height: 1.7;
	}
	.footer__legal :global(.ph) {
		background: rgba(220, 194, 138, 0.16);
	}
	.footer__bottom {
		text-align: center;
		font-size: 0.76rem;
		color: #7c8c97;
		margin-top: 1rem;
	}
</style>

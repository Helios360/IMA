<script lang="ts">
	import { base } from '$app/paths';
	import { site } from '$lib/data/site';

	const legal = site.org.legal;
</script>

<section class="band quality" id="qualite">
	<div class="wrap">
		<div class="quality__top">
			<div class="badge">
				<div class="badge__seal"><b>Qualiopi</b></div>
				<h3>Certifié Qualiopi</h3>
				<p>
					Certificat n° <span class="ph">{legal.qualiopiCertNumber}</span> · délivré par
					<span class="ph">{legal.qualiopiCertifier}</span>
				</p>
			</div>
			<div class="quality__statement">
				<span class="eyebrow">Qualité &amp; financement</span>
				<h2 class="h2">Une formation de confiance, finançable</h2>
				<p class="lead">
					La certification qualité a été délivrée au titre de la catégorie d'action suivante :
					<strong>actions de formation</strong>. Elle atteste de la qualité de nos prestations et
					conditionne l'accès aux financements publics et mutualisés.
				</p>
				<p style="color:var(--ink-soft);font-size:.95rem">
					Organisme enregistré sous le numéro de déclaration d'activité
					<span class="ph">{legal.nda}</span> auprès du préfet de région Hauts-de-France. Cet
					enregistrement ne vaut pas agrément de l'État.
				</p>
			</div>
		</div>

		<div class="qcards">
			<div class="qcard">
				<div class="ic">♿</div>
				<h3>Accessibilité &amp; handicap</h3>
				<p>
					Nos parcours sont adaptables. Notre référent handicap étudie chaque situation pour proposer
					des aménagements adaptés. Contact : <a href="{base}/candidature/"
						><span class="ph">[email / téléphone]</span></a
					>.
				</p>
			</div>
			<div class="qcard">
				<div class="ic">✎</div>
				<h3>Satisfaction &amp; réclamations</h3>
				<p>
					Les appréciations des apprenants et entreprises sont recueillies à chaque session. Toute
					réclamation reçoit une réponse sous <span class="ph">[X]</span> jours :
					<a href="{base}/candidature/"><span class="ph">[contact qualité]</span></a>.
				</p>
			</div>
			<div class="qcard">
				<div class="ic">€</div>
				<h3>Financer sa formation</h3>
				<p>
					Selon votre situation, votre formation peut être prise en charge en tout ou partie. Nous
					vous aidons à monter votre dossier.
				</p>
			</div>
		</div>

		<div class="finance">
			{#each site.financing as f}
				<span>{f}</span>
			{/each}
		</div>
	</div>
</section>

<style>
	.quality {
		background: linear-gradient(180deg, #f1ebde, var(--cream));
	}
	.quality__top {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 3rem;
		align-items: center;
		margin-bottom: 3rem;
	}
	.badge {
		background: #fff;
		border: 1px solid var(--line);
		border-radius: 20px;
		padding: 1.8rem;
		text-align: center;
		box-shadow: 0 24px 50px -36px rgba(13, 34, 54, 0.5);
	}
	.badge__seal {
		width: 104px;
		height: 104px;
		border-radius: 50%;
		margin: 0 auto 1rem;
		display: grid;
		place-items: center;
		background: conic-gradient(from 220deg, var(--teal), var(--gold), var(--teal));
		color: #fff;
		position: relative;
	}
	.badge__seal::after {
		content: '';
		position: absolute;
		inset: 7px;
		border-radius: 50%;
		background: #fff;
	}
	.badge__seal b {
		position: relative;
		z-index: 2;
		font-family: var(--display);
		font-weight: 800;
		color: var(--navy);
		font-size: 0.9rem;
		letter-spacing: 0.04em;
		line-height: 1.05;
	}
	.badge h3 {
		font-family: var(--display);
		font-weight: 700;
		color: var(--navy);
		font-size: 1.05rem;
	}
	.badge p {
		font-size: 0.8rem;
		color: var(--ink-soft);
		margin-top: 0.4rem;
	}
	.quality__statement :global(.lead) {
		margin-top: 0;
	}
	.quality__statement p + p {
		margin-top: 1rem;
	}
	.qcards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.4rem;
	}
	.qcard {
		background: #fff;
		border: 1px solid var(--line);
		border-radius: 18px;
		padding: 1.7rem;
		box-shadow: 0 18px 40px -34px rgba(13, 34, 54, 0.5);
	}
	.qcard .ic {
		width: 42px;
		height: 42px;
		border-radius: 12px;
		background: rgba(47, 122, 130, 0.12);
		color: var(--teal);
		display: grid;
		place-items: center;
		font-size: 1.15rem;
		margin-bottom: 0.9rem;
	}
	.qcard h3 {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.1rem;
		color: var(--navy);
		margin-bottom: 0.45rem;
	}
	.qcard p {
		font-size: 0.9rem;
		color: var(--ink-soft);
	}
	.qcard a {
		color: var(--teal);
		font-weight: 600;
	}
	.finance {
		display: flex;
		gap: 0.6rem;
		flex-wrap: wrap;
		margin-top: 2.4rem;
	}
	.finance span {
		font-size: 0.84rem;
		font-weight: 600;
		background: #fff;
		border: 1px solid var(--line);
		padding: 0.55rem 1rem;
		border-radius: 999px;
		color: var(--navy);
	}
	@media (max-width: 820px) {
		.quality__top {
			grid-template-columns: 1fr;
		}
		.qcards {
			grid-template-columns: 1fr;
		}
	}
</style>

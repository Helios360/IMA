<script lang="ts">
	import { site } from '$lib/data/site';

	let submitted = $state(false);

	// Champs du formulaire (aucun backend : la soumission reste côté client).
	let form = $state({
		nom: '',
		tel: '',
		formation: '',
		ville: '',
		permis: '',
		msg: ''
	});

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		// Ici, brancher un envoi réel (e-mail, API, service de formulaire) si besoin.
		submitted = true;
	}
</script>

<section class="band apply" id="candidature">
	<div class="wrap apply__inner">
		<div>
			<span class="eyebrow">Candidature</span>
			<h2 class="h2">Faites le premier pas</h2>
			<p class="lead">
				Laissez-nous vos coordonnées : nous revenons vers vous rapidement pour échanger sur votre
				projet, la formation visée et les places disponibles.
			</p>
			<ul class="apply__ways">
				<li>
					<span class="ic">👤</span><span
						><strong>Votre contact</strong>{site.org.contactName} — {site.org.contactRole}</span
					>
				</li>
				<li>
					<span class="ic">✉️</span><span
						><strong>Par e-mail</strong><a href="mailto:{site.org.email}">{site.org.email}</a></span
					>
				</li>
				<li>
					<span class="ic">📞</span><span
						><strong>Par téléphone</strong><a href="tel:{site.org.phone}">{site.org.phoneDisplay}</a
						></span
					>
				</li>
				<li>
					<span class="ic">📍</span><span
						><strong>Adresse</strong>{site.org.address.street} — {site.org.address.postalCode}
						{site.org.address.city}</span
					>
				</li>
				<li>
					<span class="ic">💬</span><span
						><strong>Sur les réseaux</strong>Message privé ou commentaire « Intéressé·e »</span
					>
				</li>
			</ul>
		</div>

		<div class="form">
			{#if !submitted}
				<form onsubmit={handleSubmit}>
					<h3>Je veux en savoir plus</h3>
					<div class="field">
						<label for="nom">Nom et prénom</label>
						<input id="nom" type="text" required placeholder="Votre nom" bind:value={form.nom} />
					</div>
					<div class="field">
						<label for="tel">Téléphone</label>
						<input
							id="tel"
							type="tel"
							required
							placeholder="06 00 00 00 00"
							bind:value={form.tel}
						/>
					</div>
					<div class="field">
						<label for="formation">Formation visée</label>
						<select id="formation" required bind:value={form.formation}>
							<option value="" disabled>Choisir une formation</option>
							<option>CAP AEPE — Petite enfance</option>
							<option>DEAES — Accompagnant éducatif et social</option>
							<option>Titre Pro ADVF — Assistant de vie</option>
							<option>Titre Pro ASMS — Agent de service médico-social</option>
							<option>Je ne sais pas encore</option>
						</select>
					</div>
					<div class="field">
						<label for="ville">Campus souhaité</label>
						<select id="ville" required bind:value={form.ville}>
							<option value="" disabled>Choisir un campus</option>
							{#each site.org.campuses as city}
								<option>{city}</option>
							{/each}
							<option>Indifférent</option>
						</select>
					</div>
					<div class="field">
						<label for="permis">J'ai le permis B et un véhicule</label>
						<select id="permis" required bind:value={form.permis}>
							<option value="" disabled>Choisir</option>
							<option>Oui</option>
							<option>En cours</option>
							<option>Pas encore</option>
						</select>
					</div>
					<div class="field">
						<label for="msg">Votre message (facultatif)</label>
						<textarea id="msg" placeholder="Parlez-nous de votre projet…" bind:value={form.msg}
						></textarea>
					</div>
					<button class="btn btn--gold" type="submit">Envoyer ma demande</button>
					<p class="form__note">
						En envoyant ce formulaire, vous acceptez d'être recontacté·e par l'IMA.
					</p>
				</form>
			{:else}
				<div class="form__success">
					<div class="check">✓</div>
					<h3>Merci, c'est noté&nbsp;!</h3>
					<p>Votre demande est bien reçue. Notre équipe vous recontacte très vite pour la suite.</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.apply {
		background: linear-gradient(180deg, var(--cream), #f1ebde);
	}
	.apply__inner {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 3rem;
		align-items: start;
	}
	.apply__ways {
		list-style: none;
		margin-top: 1.5rem;
		display: grid;
		gap: 1rem;
	}
	.apply__ways li {
		display: flex;
		gap: 0.9rem;
		align-items: flex-start;
		font-size: 0.96rem;
		color: var(--ink-soft);
	}
	.apply__ways .ic {
		flex: 0 0 38px;
		height: 38px;
		border-radius: 11px;
		background: rgba(47, 122, 130, 0.12);
		color: var(--teal);
		display: grid;
		place-items: center;
		font-size: 1.05rem;
	}
	.apply__ways strong {
		color: var(--navy);
		display: block;
		font-family: var(--display);
	}
	.apply__ways a {
		color: var(--teal);
		font-weight: 600;
	}
	.form {
		background: var(--paper);
		border: 1px solid var(--line);
		border-radius: 20px;
		padding: clamp(1.6rem, 4vw, 2.3rem);
		box-shadow: 0 24px 50px -34px rgba(13, 34, 54, 0.5);
	}
	.form h3 {
		font-family: var(--display);
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--navy);
		margin-bottom: 1.1rem;
	}
	.field {
		margin-bottom: 1rem;
	}
	.field label {
		display: block;
		font-size: 0.79rem;
		font-weight: 600;
		color: var(--ink);
		margin-bottom: 0.32rem;
	}
	.field input,
	.field select,
	.field textarea {
		width: 100%;
		font-family: var(--body);
		font-size: 0.94rem;
		color: var(--ink);
		padding: 0.72rem 0.9rem;
		border: 1.5px solid var(--line);
		border-radius: 11px;
		background: #fff;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}
	.field input:focus,
	.field select:focus,
	.field textarea:focus {
		outline: none;
		border-color: var(--teal);
		box-shadow: 0 0 0 3px rgba(47, 122, 130, 0.15);
	}
	.field textarea {
		resize: vertical;
		min-height: 84px;
	}
	.form :global(.btn--gold) {
		width: 100%;
		margin-top: 0.3rem;
	}
	.form__note {
		font-size: 0.77rem;
		color: var(--ink-soft);
		margin-top: 0.85rem;
		text-align: center;
	}
	.form__success {
		text-align: center;
		padding: 1.5rem 0;
	}
	.form__success .check {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: rgba(126, 156, 128, 0.18);
		color: var(--sage);
		display: grid;
		place-items: center;
		margin: 0 auto 1rem;
		font-size: 1.5rem;
	}
	.form__success h3 {
		color: var(--navy);
	}
	.form__success p {
		color: var(--ink-soft);
		font-size: 0.94rem;
		max-width: 34ch;
		margin: 0.4rem auto 0;
	}
	@media (max-width: 820px) {
		.apply__inner {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>

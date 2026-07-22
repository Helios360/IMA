<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Mission from '$lib/components/Mission.svelte';
	import Thread from '$lib/components/Thread.svelte';
	import FormationsTeaser from '$lib/components/FormationsTeaser.svelte';
	import Model from '$lib/components/Model.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
</script>

<Seo
	title="IMA — Formations petite enfance, aide à domicile & grand âge | Compiègne, Senlis, Chantilly"
	description="Institut des Métiers de l'Accompagnement : organisme de formation certifié Qualiopi dans l'Oise. CAP AEPE, DEAES, Titres professionnels ADVF et ASMS — diplômes reconnus, formations finançables (CPF). Campus de Compiègne, Senlis et Chantilly."
/>

<Hero />
<Mission />
<Thread />
<FormationsTeaser />
<Model />
<CtaBand
	title="20 postes en CAP AEPE — Rentrée 2026"
	text="Une seule condition : permis B + véhicule. On vous forme, on vous accompagne, on vous emploie."
	primaryLabel="Postuler maintenant"
	secondaryLabel="Voir le recrutement"
	secondaryHref="/recrutement/"
/>

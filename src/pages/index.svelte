<script>
	import Hero from '../components/hero.svelte';
	import Section from '../components/section.svelte';
	import CardProject from '../components/card-project.svelte';
</script>

<Hero />
<Section title='Artículos'>
	BODY
</Section>
<Section title='Proyectos' showAll>
	<CardProject />
</Section>

<style lang='scss'>
</style>

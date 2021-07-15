<script>
	import Hero from '../components/hero.svelte';
	import Section from '../components/section.svelte';
	import CardProject from '../components/card-project.svelte';
	import WorkTogether from '../components/work-together.svelte';
</script>

<Hero />
<Section title='Artículos'>
	BODY
</Section>
<Section title='Proyectos' showAll>
	<div class='page-home__projects'>
		<CardProject />
		<CardProject />
		<CardProject />
		<CardProject />
	</div>
</Section>
<WorkTogether />

<style lang='scss'>
	.page-home {
		&__projects {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 24px;
		}
	}
</style>

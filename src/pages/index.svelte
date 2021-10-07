<script>
	import Hero from '../components/hero.svelte';
	import Section from '../components/section.svelte';
	import CardProject from '../components/card-project.svelte';
	import WorkTogether from '../components/work-together.svelte';
	import projects from '../api/projects';

</script>

<Hero />
<Section title='Artículos'>
	<div class='page-home__articles'>
		Pronto ...
	</div>
</Section>
<Section title='Proyectos' showAll>
	<div class='page-home__projects'>
		{ #each projects.slice(0, 2) as project }
			<CardProject { ...project } />
		{ /each }
	</div>
</Section>
<WorkTogether />

<style lang='scss'>
	.page-home {
		&__articles {
			color: var(--color-blue-50);
			font-weight: var(--font-weight-light);
			font-size: 18px;
			line-height: 32px;
		}

		&__projects {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 24px;
		}
	}
</style>

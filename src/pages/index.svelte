<script>
	import Hero from '../components/hero.svelte';
	import Section from '../components/section.svelte';
	import CardProject from '../components/card-project.svelte';
	import WorkTogether from '../components/work-together.svelte';
</script>

<Hero />
<Section title='Artículos'>
	<div class='page-home__articles'>
		Pronto ...
	</div>
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

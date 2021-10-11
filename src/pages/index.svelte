<script>
	import { _ } from 'svelte-i18n'
	import Hero from '../components/hero.svelte';
	import Section from '../components/section.svelte';
	import CardProject from '../components/card-project.svelte';
	import WorkTogether from '../components/work-together.svelte';
	import projects from '../api/projects';
</script>

<Hero />
<Section title="{ $_('sectionArticles.title') }">
	<div class='page-home__articles'>
		{ $_('sectionArticles.placeholder') }
	</div>
</Section>
<Section title="{ $_('sectionProjects.title') }" seeMore="{ $_('sectionProjects.seeMore') }">
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
			grid-gap: 24px;
			grid-template-columns: 1fr;

			@media screen and (min-width: 768px) {
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}
</style>

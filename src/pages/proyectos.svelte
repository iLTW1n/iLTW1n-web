<script>
	import { _ } from 'svelte-i18n';

	import CardProject from '../components/card-project.svelte';
	import projects from '../api/projects';
</script>

<div class='page-projects'>
	<div class='page-projects__content'>
		<h1>{ $_('projects.title') } <span>(Lab)</span></h1>
		<div class='page-projects__list'>
			{ #each projects as project }
				<CardProject { ...project } />
			{ /each }
		</div>
	</div>
</div>

<style lang='scss'>
	.page-projects {
		margin-top: 7rem;
		padding: 0 24px;

		h1 {
			color: var(--color-white-10);
			font-weight: var(--font-weight-bold);
			font-size: 48px;
			margin-bottom: 40px;

			span {
				font-size: 16px;
			}
		}

		&__content {
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
		}

		&__list {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: 24px;
		}

		@media screen and (min-width: 768px) {
			&__list {
				grid-template-columns: repeat(2, 1fr);
			}
		}
	}
</style>

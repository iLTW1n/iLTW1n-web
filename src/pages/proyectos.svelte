<script>
	import CardProject from '../components/card-project.svelte';
</script>

<div class='page-projects'>
	<div class='page-projects__content'>
		<h1>Proyectos</h1>
		<div class='page-projects__list'>
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
			<CardProject />
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
		}

		&__content {
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
		}

		&__list {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 24px;
		}
	}
</style>

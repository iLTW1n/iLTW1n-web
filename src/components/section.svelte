<script>
	export let title;
	export let showAll;
</script>

<div class='component-section'>
	<div class='component-section__content'>
		<div class='component-section__header'>
			<h3>{ title }</h3>
			{ #if showAll }
				<div>Todo los proyectos</div>
			{ /if }
		</div>
		<slot />
	</div>
</div>

<style lang='scss'>
	.component-section {
		padding: 0 24px;
		margin: 5rem 0;

		&__content {
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
		}

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 24px;

			h3 {
				color: var(--color-white-10);
				font-weight: var(--font-weight-bold);
				font-size: 24px;
				line-height: 32px;
			}

			div {
				color: var(--color-white-10);
				font-weight: var(--font-weight-light);
				font-size: 16px;
				line-height: 24px;
				cursor: pointer;
			}
		}
	}
</style>

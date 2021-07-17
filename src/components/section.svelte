<script>
	export let title;
	export let description = '';
	export let showAll = false;
</script>

<div class='component-section'>
	<div class='component-section__content'>
		<div class='component-section__header'>
			<div class='component-section__header-title'>
				<h3>{ title }</h3>
				{ #if description }
					<span>{ description }</span>
				{ /if }
			</div>
			{ #if showAll }
				<div class='component-section__all-content'>
					Todo los proyectos
					<img src='/assets/arrow-right.svg' alt='arrow-right' />
				</div>
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

			&-title {
				display: flex;
				align-items: center;

				h3 {
					color: var(--color-white-10);
					font-weight: var(--font-weight-bold);
					font-size: 24px;
					line-height: 32px;
				}

				span {
					color: var(--primary-color);
					font-weight: var(--font-weight-normal);
					margin-left: 8px;
					font-size: 18px;
					line-height: 32px;
				}
			}
		}

		&__all-content {
			color: var(--color-white-10);
			font-weight: var(--font-weight-light);
			font-size: 16px;
			line-height: 24px;
			cursor: pointer;
			display: flex;
			align-items: center;

			img {
				margin-left: 8px;
				width: 18px;
				min-width: 18px;
				height: 18px;
			}
		}
	}
</style>

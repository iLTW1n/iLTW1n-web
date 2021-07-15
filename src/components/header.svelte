<div class='component-header'>
	<div class='component-header__content'>
		<div class='component-header__left'>
			.Dreamer
		</div>
		<div class='component-header__right'>
			<span>Inicio</span>
			<span>Sobre mi</span>
			<span>Proyectos</span>
		</div>
	</div>
</div>

<style lang='scss'>
	.component-header {
		margin-top: 56px;
		padding: 0 24px;

		&__content {
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
		}

		&__left {
			font-size: 18px;
			font-weight: var(--font-weight-bold);
			color: var(--color-white-10);
		}

		&__right {
			display: flex;
			align-items: center;

			span {
				margin-left: 24px;
				cursor: pointer;
				font-weight: var(--font-weight-normal);
				color: var(--color-white-10);

				&:first-child {
					margin-left: 0;
				}
			}
		}
	}
</style>

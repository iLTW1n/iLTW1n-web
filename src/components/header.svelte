<script>
	import { url, prefetch, goto } from '@roxi/routify';

	function goToHome() {
		$goto('/')
	}
</script>

<div class='component-header'>
	<div class='component-header__content'>
		<div class='component-header__left' on:click={goToHome}>
			José Oscátegui
		</div>
		<div class='component-header__right'>
			<a href={$url('./')} use:prefetch>Inicio</a>
			<a href={$url('./sobre-mi')} use:prefetch>Sobre mi</a>
			<a href={$url('./proyectos')} use:prefetch>Proyectos</a>
		</div>
	</div>
</div>

<style lang='scss'>
	.component-header {
		margin-top: 56px;
		padding: 0 24px;

		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
		}

		&__left {
			user-select: none;
			font-size: 18px;
			font-weight: var(--font-weight-bold);
			color: var(--color-white-10);
			margin-bottom: 16px;
			cursor: pointer;
		}

		&__right {
			display: flex;
			align-items: center;

			a {
				text-decoration: none;
				margin-left: 24px;
				cursor: pointer;
				font-weight: var(--font-weight-normal);
				color: var(--color-white-10);

				&:active {
					color: var(--color-white-10);
				}

				&:first-child {
					margin-left: 0;
				}
			}
		}

		@media screen and (min-width: 768px) {
			&__content {
				flex-direction: row;
				justify-content: space-between;
			}

			&__left {
				margin-bottom: 0;
			}
		}
	}
</style>

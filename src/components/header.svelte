<script>
	import { url, prefetch, goto, isActive } from '@roxi/routify';
	import { _ } from 'svelte-i18n'
	import Languages from './languages.svelte';

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
			<a href={$url('./')} use:prefetch class:active={$isActive('/index')}>{ $_('header.home') }</a>
			<a href={$url('./sobre-mi')} use:prefetch class:active={$isActive('/sobre-mi')}>{ $_('header.aboutMe') }</a>
			<a href={$url('./proyectos')} use:prefetch class:active={$isActive('/proyectos')}>{ $_('header.projects') }</a>
			<span>
				<Languages />
			</span>
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

				&.active {
					color: var(--primary-color);
				}

				&:active {
					color: var(--color-white-10);
				}

				&:first-child {
					margin-left: 0;
				}
			}

			span {
				margin-left: 24px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24px;
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

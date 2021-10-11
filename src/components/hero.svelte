<script>
	import { url } from '@roxi/routify';
	import { _ } from 'svelte-i18n'
</script>

<div class='component-hero'>
	<div class='component-hero__content'>
		<div class='component-hero__main'>
			{ $_('hero.title') }
		</div>

		<p class='component-hero__description'>
			{@html $_('hero.description') }
		</p>

		<p class='component-hero__go-to-about'>
			{ $_('hero.knowMore') } <a href={$url('./sobre-mi')}>{ $_('hero.aboutMe') }</a>.
		</p>
	</div>
</div>

<style lang='scss'>
	.component-hero {
		margin-top: 7rem;
		padding: 0 24px;

		&__content {
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
			display: flex;
			flex-direction: column;
		}

		&__main {
			color: var(--primary-color);
			font-weight: var(--font-weight-bold);
			font-size: 48px;
			text-shadow: 0 0 76px rgba(5, 220, 211, 0.3);
			margin-bottom: 40px;
		}

		&__description {
			color: var(--color-white-10);
			font-weight: var(--font-weight-light);
			font-size: 18px;
			line-height: 32px;
			margin-bottom: 16px;
		}

		&__go-to-about {
			color: var(--color-white-10);
			font-weight: var(--font-weight-light);
			font-size: 18px;
			line-height: 32px;

			a {
				text-decoration: none;
				cursor: pointer;
				color: var(--primary-color);
				position: relative;

				&:after {
					content: '';
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 2px;
					background-color: var(--primary-color);
				}
			}
		}
	}
</style>

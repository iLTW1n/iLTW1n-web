<script>
	import { _ } from 'svelte-i18n';
	import LazyImage from './lazy-image.svelte';
</script>

<div class='component-header'>
	<div class='component-header__content'>
		<div class='component-header__left'>
			<p>{ $_('footer.develop') }</p>
			<p>
				{ $_('footer.build') } <span>Svelte <LazyImage image='/assets/dev-svelte.svg' name='svelte' width='16px' height='16px' /></span>.
				{ $_('footer.hosted') } <span>Netlify <LazyImage image='/assets/dev-netlify.svg' name='netlify' width='16px' height='16px' /></span>.
			</p>
		</div>
		<div class='component-header__right'>
			<a href='https://github.com/iLTW1n' target='_blank'>
				<LazyImage image='/assets/dev-github.svg' name='github' width='24px' height='24px' />
			</a>
			<a href='https://profile.codersrank.io/user/iltw1n' target='_blank'>
				<LazyImage image='/assets/dev-codersrank.svg' name='codersrank' width='24px' height='24px' />
			</a>
			<a href='https://www.linkedin.com/in/jose-oscategui/' target='_blank'>
				<LazyImage image='/assets/dev-linkedin.svg' name='linkedin' width='24px' height='24px' />
			</a>
			<a href='https://www.instagram.com/jfoscategui' target='_blank'>
				<LazyImage image='/assets/dev-instagram.svg' name='instagram' width='24px' height='24px' />
			</a>
		</div>
	</div>
</div>

<style lang='scss'>
	.component-header {
		margin: 80px 0 56px;
		padding: 0 24px;

		&__content {
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
		}

		&__left {
			p {
				font-weight: var(--font-weight-light);
				color: #B8C1C7;
				font-size: 16px;

				span {
					color: var(--color-white-10);
				}
			}
		}

		&__right {
			display: flex;
			align-items: center;

			a {
				display: flex;
				width: 24px;
				height: 24px;
				margin-left: 16px;
			}
		}
	}
</style>

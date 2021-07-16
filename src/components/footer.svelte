<script>
	import LazyImage from './lazy-image.svelte';
</script>

<div class='component-header'>
	<div class='component-header__content'>
		<div class='component-header__left'>
			<p>Desarrollado por José Oscátegui.</p>
			<p>
				Built with <span>Svelte <LazyImage image='/assets/dev-svelte.svg' name='svelte' width='16px' height='16px' /></span>.
				Hosted on <span>Netlify <LazyImage image='/assets/dev-netlify.svg' name='netlify' width='16px' height='16px' /></span>.
			</p>
		</div>
		<div class='component-header__right'>
			<a href=''>
				<LazyImage image='/assets/dev-github.svg' name='github' width='24px' height='24px' />
			</a>
			<a href=''>
				<LazyImage image='/assets/dev-codersrank.svg' name='codersrank' width='24px' height='24px' />
			</a>
			<a href=''>
				<LazyImage image='/assets/dev-linkedin.svg' name='linkedin' width='24px' height='24px' />
			</a>
			<a href=''>
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

					/*img,
					:global(.image) {
						width: 16px;
						min-width: 16px;
						height: 16px;
						margin-bottom: -3px;
					}*/
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

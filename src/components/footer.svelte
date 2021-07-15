<div class='component-header'>
	<div class='component-header__content'>
		<div class='component-header__left'>
			<p>Desarrollado por José Oscátegui.</p>
			<p>Built with <span>Svelte <img src='/assets/dev-svelte.svg' alt='svelte' /></span>. Hosted on <span>Netlify <img src='/assets/dev-netlify.svg' alt='netlify' /></span>.</p>
		</div>
		<div class='component-header__right'>
			<a href=''>
				<img src='/assets/dev-github.svg' alt='github' />
			</a>
			<a href=''>
				<img src='/assets/dev-codersrank.svg' alt='codersrank' />
			</a>
			<a href=''>
				<img src='/assets/dev-linkedin.svg' alt='linkedin' />
			</a>
			<a href=''>
				<img src='/assets/dev-instagram.svg' alt='instagram' />
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

					img {
						width: 16px;
						min-width: 16px;
						height: 16px;
						margin-bottom: -3px;
					}
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

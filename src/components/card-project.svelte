<div class='component-project-card'>
	<div class='component-project-card__title'>
		Inspirate
	</div>
	<div class='component-project-card__description'>
		A website where you can find phrases, you can give love and share.
	</div>
	<div class='component-project-card__tags'>
		<span>React</span>
		<span>Redux</span>
		<span>Node.js</span>
		<span>Tailwind CSS</span>
		<span>Typescript</span>
		<span>Svelte</span>
	</div>
	<div class='component-project-card__links'>
		<div>
			<img src='/assets/code.svg' alt='code' />
			<span>Ver en GitHub</span>
		</div>
		<div>
			<img src='/assets/url.svg' alt='url' />
			<span>Ver Proyecto</span>
		</div>
	</div>
</div>

<style lang='scss'>
	.component-project-card {
		padding: 32px;
		border-radius: 8px;
		position: relative;
		overflow: hidden;
		background-color: var(--color-blue-20);

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 8px;
			height: 100%;
			background-color: #81F59B;
		}

		&__title {
			color: var(--color-white-10);
			font-weight: var(--font-weight-normal);
			font-size: 24px;
			line-height: 32px;
			margin-bottom: 16px;
		}

		&__description {
			color: var(--color-white-20);
			font-weight: var(--font-weight-light);
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 16px;
		}

		&__tags {
			color: var(--color-blue-50);
			font-weight: var(--font-weight-light);
			margin-bottom: 24px;

			span {
				margin-right: 8px;

				&:last-child {
					margin-right: 0;
				}
			}
		}

		&__links {
			display: flex;

			div {
				margin-right: 16px;
				display: flex;
				align-items: center;

				img {
					width: 16px;
					min-width: 16px;
					height: 16px;
					margin-right: 4px;
				}

				span {
					color: var(--color-white-10);
					font-weight: var(--font-weight-normal);
					cursor: pointer;
					position: relative;
					font-size: 14px;
					line-height: 20px;

					&:hover {
						&:after {
							content: '';
							position: absolute;
							left: 0;
							bottom: 0;
							width: 100%;
							height: 2px;
							background-color: var(--color-white-10);
						}
					}
				}
			}
		}
	}
</style>

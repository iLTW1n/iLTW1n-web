<div class='component-project-card'>
	<div class='component-project-card__title'>
		Inspirate
	</div>
	<div class='component-project-card__description'>
		A website where you can find phrases, you can give love and share.
	</div>
</div>

<style lang='scss'>
	.component-project-card {
		padding: 32px;
		border-radius: 8px;
		position: relative;
		overflow: hidden;
		background-color: #1C2C35;

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
		}
	}
</style>

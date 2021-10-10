<script>
	import { goto } from '@roxi/routify';

	export let name = '';
	export let description = '';
	export let topics = [];
	export let github = '';
	export let project = '';
	export let year = '';
	export let color = '';

	function gotToGithub() {
		window.open(github, '_blank')
	}

</script>

<div class='component-project-card' style='--bar-color: { color }'>
	<div class='component-project-card__title'>
		{ name } <span>{ year }</span>
	</div>
	<div class='component-project-card__description'>
		{ description }
	</div>
	<div class='component-project-card__tags'>
		{ #each topics as topic }
			<span>{ topic }</span>
		{ /each }
	</div>
	<div class='component-project-card__links'>
		<div on:click={gotToGithub}>
			<img src='/assets/code.svg' alt='code' />
			<span>Ver en GitHub</span>
		</div>
		{ #if project }
			<div>
				<img src='/assets/url.svg' alt='url' />
				<span>Ver Proyecto</span>
			</div>
		{ /if }
	</div>
</div>

<style lang='scss'>
	.component-project-card {
		padding: 32px;
		border-radius: 8px;
		position: relative;
		overflow: hidden;
		background-color: var(--color-blue-20);
		display: flex;
		flex-direction: column;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 8px;
			height: 100%;
			background-color: var(--bar-color);
		}

		&__title {
			color: var(--color-white-10);
			font-weight: var(--font-weight-normal);
			font-size: 24px;
			line-height: 32px;
			margin-bottom: 16px;

			span {
				color: var(--color-blue-50);
				font-size: 14px;
			}
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
			margin-top: auto;

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

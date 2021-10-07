<script>
	function goToEmail() {
		window.location.href = 'mailto:jose.osk01@gmail.com';
	}
</script>

<div class='component-work-together'>
	<h2 class='component-work-together__title'>
		¿En que estas trabajando?
	</h2>
	<p class='component-work-together__description'>
		Si quieres trabajar conmigo, solo envíame un correo <br />
		electrónico y estaré listo para hacerlo realidad.
	</p>
	<div class='component-work-together__chat' on:click={goToEmail}>
		<img src='/assets/chat.svg' alt='chat' />
		Chat
	</div>
</div>

<style lang='scss'>
	.component-work-together {
		background-color: var(--color-blue-20);
		padding: 7rem 24px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		&__title {
			color: var(--primary-color);
			font-weight: var(--font-weight-bold);
			font-size: 48px;
			margin-bottom: 24px;
		}

		&__description {
			color: var(--color-white-10);
			font-weight: var(--font-weight-light);
			text-align: center;
			font-size: 18px;
			line-height: 32px;
			margin-bottom: 48px;
		}

		&__chat {
			background-color: var(--primary-color);
			font-weight: var(--font-weight-bold);
			padding: 8px 24px;
			border-radius: 8px;
			font-size: 18px;
			line-height: 32px;
			display: flex;
			align-items: center;
			cursor: pointer;

			img {
				margin-right: 8px;
				width: 24px;
				min-width: 24px;
				height: 24px;
			}
		}
	}
</style>

<script>
	import { url, prefetch } from '@roxi/routify';
	import { writable } from 'svelte/store';
	const count = writable(0);

	function handlersText(ctnt) {
		const theLetters = 'abcdefghijklmnopqrstuvwxyz#%&^+=-'; //You can customize what letters it will cycle through
		// const ctnt = '.Maker'; // Your text goes here
		const speed = 40; // ms per frame
		const increment = 8; // frames per step. Must be > 2
		const clen = ctnt.length;

		let si = 0;
		let stri = 0;
		let block = '';
		let fixed = '';
		//Call self x times, whole function wrapped in setTimeout
		(function rustle(i) {
			setTimeout(function () {
				if (--i)rustle (i);

				nextFrame();

				si = si + 1;
			}, speed);
		})(clen * increment + 1);

		function nextFrame() {
			for (let i = 0; i < clen - stri; i++) {
				//Random number
				const num = Math.floor(theLetters.length * Math.random());
				//Get random letter
				const letter = theLetters.charAt(num);
				block = block + letter;
			}
			if (si === (increment-1)) stri++;
			if (si === increment){
				// Add a letter;
				// every speed * 10 ms
				fixed = fixed + ctnt.charAt(stri - 1);
				si = 0;
			}
			const element = document.getElementById('change-text-here');
			element.innerText = fixed + block;

			block = '';
		}
	}

	let clear;
	const words = ['.Maker', '.Dreamer', '.Thinker', 'José Oscátegui'];

	$: {
		clearInterval(clear)
		clear = setInterval(() => {
			handlersText(words[$count])
			count.set($count + 1)

			if (words.length === $count) count.set(0)
		}, 8000)
	}
</script>

<div class='component-header'>
	<div class='component-header__content'>
		<div class='component-header__left' id='change-text-here'>
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
			justify-content: space-between;
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
		}

		&__left {
			user-select: none;
			font-size: 18px;
			font-weight: var(--font-weight-bold);
			color: var(--color-white-10);
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
	}
</style>

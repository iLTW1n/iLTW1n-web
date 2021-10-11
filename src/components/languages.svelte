<script>
	import { locale } from 'svelte-i18n';
	let selected = $locale;

	function changeLanguage(event) {
		locale.set(event.target.value)
	}
</script>

<select bind:value={selected} class='component-country' on:change={changeLanguage}>
	<option value="en">🇺🇸</option>
	<option value="spa">🇪🇸</option>
</select>

<style lang='scss'>
	.component-country {
		background-color: var(--window-color);
		border: none;
		font-size: 24px;
		outline: none;
		cursor: pointer;

		-webkit-appearance: none;
		-moz-appearance: none;
	}
</style>

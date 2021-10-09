<script>
	import { Router } from '@roxi/routify';
	import { routes } from '../.routify/routes';
	import { onMount } from "svelte";

	export let scriptSrc;

	onMount(() => {
		if (process.env.production) {
			// console.log('only productions');
			// scriptSrc = 'https://www.googletagmanager.com/gtag/js?id=G-SQEJPBLJ3E';

		}
	})
</script>

<svelte:head>
	{#if scriptSrc}
		<script async src='{scriptSrc}'></script>
	{/if}
</svelte:head>

<Router { routes } />

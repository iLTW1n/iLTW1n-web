<script>
	import { Router } from '@roxi/routify';
	import { routes } from '../.routify/routes';
	import { onMount } from "svelte";

	let scriptSrc;

	onMount(() => {
		if (process.env.production) {
			scriptSrc = 'https://www.googletagmanager.com/gtag/js?id=G-SQEJPBLJ3E';
		}
	})
</script>

<svelte:head>
	{#if scriptSrc}
		<script async src='{scriptSrc}'></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-SQEJPBLJ3E');
		</script>
	{/if}
</svelte:head>

<Router { routes } />

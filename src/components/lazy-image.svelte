<script>
	export let image;
	export let name;
	export let width = '100%';
	export let height = '100%';

	const loaded = new Map();

	function lazy(node, data) {
		if (loaded.has(data.src)) {
			node.setAttribute('src', data.src);
		} else {
			const img = new Image();

			img.src = data.src;
			img.onload = () => {
				loaded.set(data.src, img);
				node.setAttribute('src', data.src);
			};
		}

		return {
			destroy() {} // noop
		};
	}
</script>

<img
	alt={name}
	class={$$props.class}
	style='object-fit: contain;'
	width={width}
	height={height}
	src='/assets/load-icon.png'
	use:lazy={{ src: image }}
/>

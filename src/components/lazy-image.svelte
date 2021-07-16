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
	width={width}
	height={height}
	src=''
	use:lazy={{ src: image }}
/>

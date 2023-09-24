<script lang="ts">
	import Logo from './logo.svelte';
	import About from './about.svelte';
	import Price from './price.svelte';
	import imgBg from '$lib/assets/bg2.png';
</script>

<div class="flex flex-col">
	<div class="h-screen">
		<Logo imgbg2={imgBg} />
	</div>

	<div class="h-fit">
		<About />
	</div>

	<div class="h-fit">
		<Price />
	</div>
</div>

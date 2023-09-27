<script lang="ts">
	import Logo from './logo.svelte';
	import About from './about.svelte';
	import Price from './price.svelte';
	import imgBg from '$lib/assets/bg2.png';
</script>

<div class="flex flex-col gap-5">
	<div class="h-fit lg:h-screen">
		<Logo imgbg2={imgBg} />
	</div>

	<div class="h-fit pt-10 md:pt-20">
		<About />
	</div>

	<div class="h-fit pt-10 md:pt-20">
		<Price />
	</div>
</div>

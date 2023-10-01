<script lang="ts">
	import Logo from './logo.svelte';
	import About from './about.svelte';
	import Price from './price.svelte';
	import Footer from './footer.svelte';
	import imgBg from '$lib/assets/bg2.png';

	import Saos from 'saos';
</script>

<div class="flex flex-col gap-5">
	<Saos animation={'from-left 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="h-fit lg:h-screen">
			<Logo imgbg2={imgBg} />
		</div>
	</Saos>

	<Saos animation={'from-left 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="h-fit pt-10 md:pt-10">
			<About />
		</div>
	</Saos>

	<Saos animation={'from-left 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="h-fit pt-10 md:pt-20">
			<Price />
		</div>
	</Saos>
	<Saos animation={'from-left 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="h-fit pt-10 md:pt-20">
			<Footer />
		</div>
	</Saos>
</div>

<style>
	@keyframes -global-from-left {
		0% {
			transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}
</style>

<script lang="ts">
	import Logo from './logo.svelte';
	import About from './about.svelte';
	import Price from './price.svelte';
	import Price2 from './price2.svelte';
	import Footer from './footer.svelte';
	import Footerend from './footerend.svelte';
	import imgBg from '$lib/assets/bg2.png';
	import { statusclick } from '../store.js';
	import logoWa from '$lib/assets/wa.png';
	import { fade } from 'svelte/transition';
	import Saos from 'saos';
	const pkg = {
		imgbg2: imgBg
	};

	function to_element_pricing() {
		document.getElementById('pricing')?.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
		statusclick.set({ tampilmenu: 'T' });
	}

	function to_element_about() {
		document.getElementById('about')?.scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
		document.getElementById('about')?.offsetHeight;
		statusclick.set({ tampilmenu: 'T' });
	}
</script>

<div class="static flex flex-col gap-5">
	<div class="basis-full">
		<Saos animation={'from-left 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<div class="h-fit lg:h-screen">
				<Logo {...pkg} />
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
				<Price2 />
			</div>
		</Saos>
		<Saos animation={'from-left 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
			<div class="h-fit pt-10 md:pt-20">
				<Footer />
			</div>
			<div class="h-fit pt-10 md:pt-15">
				<Footerend />
			</div>
		</Saos>
	</div>
	{#if $statusclick.tampilmenu == 'Y'}
		<div
			class="absolute basis-full w-full md:hidden"
			transition:fade={{ delay: 250, duration: 300 }}
		>
			<div class="flex w-full bg-indigo-500 bg-opacity-95 rounded-lg">
				<div class="basis-full pr-10 pt-2 leading-8 text-center text-white">
					<a
						on:click={to_element_pricing}
						class="text-md font_gelaso font-bold hover:cursor-pointer hover:text-error-500"
						><p>ABOUT</p></a
					>
					<a
						on:click={to_element_about}
						class="text-md font_gelaso font-bold hover:cursor-pointer hover:text-error-500"
						><h2>PRICING</h2></a
					>
					<a
						href="https://wa.me/6281917310390?text=hallo%2C%20apa%20bisa%20mengerjakan%20software%20sesuai%20dengan%20kebutuhan%20saya%3F"
						target="_blank"
						type="button"
						class="btn btn-md z-auto variant-filled-warning mr-1 mb-2 mt-1 hover:cursor-pointer hover:text-error-500"
					>
						<span class="hover:text-error-500 hover:cursor-pointer font-bold font_gelaso"
							>Contact</span
						>
						<img src={logoWa} class="h-5 md:h-8 md:ml-2" alt="" />
					</a>
				</div>
			</div>
		</div>
	{/if}
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

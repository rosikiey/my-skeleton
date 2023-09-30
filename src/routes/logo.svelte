<script lang="ts">
	import imgBg from '$lib/assets/bg2.png';
	import imgMoto from '$lib/assets/bgg3.png';
	import Icon from '@iconify/svelte';

	export let imgbg2: any;
</script>

<div class="container flex flex-col h-fit lg:flex-row max-w-full lg:h-full" id="home">
	<div class="basis-1/2">
		<div class="flex items-center content-center justify-center md:my-10 md:mx-15">
			<figure class=" max-w-md md:max-w-xl lg:max-w-2xl">
				<img
					src={imgbg2}
					class="object-contain ease-in-out rounded-lg shadow-none transition-shadow lg:px-10"
					alt="icon_nav"
				/>
			</figure>
		</div>
	</div>
	<div class="basis-1/2">
		<div class="flex flex-col h-fit items-center lg:space-y-0">
			<div class="md:basis-1/2">
				<div class="flex flex-col h-full pt-10 lg:pt-40">
					<div class="flex items-center content-center justify-center my-3 md:my-4 md:mx-15">
						<p class="text-[48px] font-serif">Mitra terbaik</p>
					</div>
					<div class="flex items-center content-center justify-center my-3 md:my-4 md:mx-15">
						<p class="text-[48px] font-serif">Pembuatan</p>
						<p class="text-[48px] font-serif pl-3 text-tertiary-400">Software</p>
					</div>
					<div class="flex items-center content-center justify-center my-3 md:my-4 md:mx-15">
						<p class="text-[48px] font-serif">Perusahaan Anda</p>
					</div>
					<div
						class="flex items-center content-center justify-center my-3 md:my-4 md:mx-15 text-tertiary-300"
					>
						<p class="text-[23px] font-mono">trusted & Reliable</p>
					</div>
				</div>
			</div>
			<div class="md:basis-1/2">
				<div class="pt-2">
					<button
						type="button"
						class="btn btn-sm md:btn-lg lg:btn-lg bg-gradient-to-br variant-gradient-primary-tertiary"
					>
						<Icon icon="icon-park-outline:cooperative-handshake" style="font-size: 30px" />
						<span><b>Price List</b></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

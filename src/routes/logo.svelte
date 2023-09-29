<script lang="ts">
	import imgBg from '$lib/assets/bg2.png';
	import imgMoto from '$lib/assets/bgg3.png';
	import Icon from '@iconify/svelte';

	export let imgbg2: any;
</script>

<div class="container flex flex-col lg:flex-row max-w-full">
	<div class="basis-1/2 bg-blue-100">
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
	<div class="basis-1/2 lg:bg-surface-100">
		<div class="flex flex-col h-fit items-center lg:space-y-0">
			<div class="md:basis-1/2">
				<div class="flex flex-row h-full lg:pt-20">
					<div class="flex items-center content-center justify-center md:my-10 md:mx-15">
						<figure class="max-w-md md:max-w-lg lg:max-w-xl">
							<img
								src={imgMoto}
								class="object-contain transition-shadow duration-300 ease-in-out rounded-lg shadow-none"
								alt="icon_grid"
							/>
						</figure>
					</div>
				</div>
			</div>
			<div class="md:basis-1/2">
				<div class="pt-5">
					<button type="button" class="btn btn-sm md:btn-lg lg:btn-lg variant-filled-surface">
						<Icon icon="icon-park-outline:cooperative-handshake" style="font-size: 25px" />
						<span><b>Price List !</b></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

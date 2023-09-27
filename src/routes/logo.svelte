<script lang="ts">
	import imgBg from '$lib/assets/bg2.png';
	import imgMoto from '$lib/assets/bgg3.png';
	import Icon from '@iconify/svelte';

	export let imgbg2: any;
</script>

<div class="container flex flex-col lg:flex-row max-w-full">
	<div class="basis-1/2 bg-blue-100">
		<div class="flex md:my-10 md:mx-15">
			<img
				src={imgbg2}
				class="object-contain ease-in-out rounded-lg shadow-none transition-shadow lg:px-10"
				alt="icon_nav"
			/>
		</div>
	</div>
	<div class="basis-1/2 lg:bg-surface-100">
		<div class="container flex flex-col h-fit items-center lg:space-y-0">
			<div class="md:basis-1/2">
				<div class="container flex flex-row h-full">
					<div class="basis-full my-10 mx-14 pl-10 lg:mx-20 lg:my-16">
						<img
							src={imgMoto}
							class="object-contain transition-shadow duration-300 ease-in-out rounded-lg shadow-none"
							alt="icon_grid"
						/>
					</div>
				</div>
			</div>
			<div class="md:basis-1/2">
				<div>
					<button type="button" class="btn btn-sm md:btn-lg lg:btn-xl variant-filled-surface">
						<Icon icon="icon-park-outline:cooperative-handshake" style="font-size: 25px" />
						<span><b>Price List !</b></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

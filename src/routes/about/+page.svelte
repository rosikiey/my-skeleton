<script lang="ts">
	import imgBg from '$lib/assets/bg2.png';
	import Icon from '@iconify/svelte';
</script>

<div class="container flex flex-row bg-yellow-500 max-w-full h-full">
	<div class="basis-1/2 bg-blue-100">
		<div class="flex md:my-10 md:mx-10">
			<img
				src={imgBg}
				class="object-contain ease-in-out rounded-lg shadow-none transition-shadow lg:px-10"
				alt="icon_nav"
			/>
		</div>
	</div>
	<div class="basis-1/2 bg-surface-50">
		<div class="container flex flex-col h-full items-center space-y-4 lg:space-y-10">
			<div class="md:basis-1/2">
				<div class="container flex flex-row h-full items-end">
					<div class="basis-full">
						<img
							src={imgBg}
							class="object-contain transition-shadow duration-300 ease-in-out rounded-lg shadow-none"
							alt="icon_grid"
						/>
					</div>
				</div>
			</div>
			<div class="md:basis-1/2">
				<div>
					<button type="button" class="btn btn-sm md:btn-md lg:btn-xl variant-filled-surface">
						<Icon icon="icon-park-outline:cooperative-handshake" style="font-size: 25px" />
						<span><b>Price List !</b></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import Icon from '@iconify/svelte';
	export let imgbg2: any;

	function to_element_pricing() {
		document.getElementById('pricing')?.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	}
</script>

<div
	class="static container flex flex-col h-fit lg:flex-row max-w-full lg:h-full bg-gradient-to-r from-blue-750 to-bsdark"
	id="home"
>
	<div class="basis-1/2">
		<div class="flex items-center content-center justify-center md:my-10 md:mx-15">
			<figure class=" max-w-md md:max-w-xl lg:max-w-3xl">
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
						<p class="text-[36px] md:text-[48px] font-serif pl-3 text-success-500">
							<b>Software</b>
						</p>
						<p class="text-[36px] md:text-[48px] font-serif pl-3 text-success-500">
							<b>ERP</b>
						</p>
					</div>
					<div class="flex items-center content-center justify-center my-3 md:my-4 md:mx-15">
						<p class="text-[36px] md:text-[48px] font-serif">Untuk Kemajuan</p>
					</div>
					<div class="flex items-center content-center justify-center my-3 md:my-4 md:mx-15">
						<p class="text-[36px] md:text-[48px] font-serif">Perusahaan Anda</p>
					</div>
					<div
						class="flex items-center content-center justify-center my-3 md:my-4 md:mx-15 text-tertiary-300"
					>
						<p class="text-[20px] md:text-[23px] font-mono">moving forward</p>
					</div>
				</div>
			</div>
			<div class="md:basis-1/2">
				<div class="pt-2">
					<button
						on:click={to_element_pricing}
						type="button"
						class="btn btn-sm md:btn-lg lg:btn-lg variant-filled-error"
					>
						<Icon icon="icon-park-outline:cooperative-handshake" style="font-size: 30px" />
						<span><b>Price List</b></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

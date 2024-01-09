<script lang="ts">
	import { arraycost } from '../store.js';
	import { listarraycost } from '../store.js';
	import Icon from '@iconify/svelte';
	import imgProcess from '$lib/assets/bg2jj.png';
</script>

<div class="container flex flex-col max-w-full gap-4 md:gap-4 lg:gap-4 bscroll" id="pricing">
	<div class="basis-full">
		<div class="flex basis-ful h-full justify-center items-center">
			<div class="text-center">
				<h1 class=" text-2xl md:text-3xl font-bold leading-7 text-zinc-200 font_gelaso">
					Erp Implementation Process
				</h1>
			</div>
		</div>
	</div>
	<div class="basis-full">
		<div class="flex flex-row basis-full h-full justify-center">
			<div class="container flex flex-row">
				<div class="basis-full h-full">
					<div class="flex items-center content-center justify-center">
						<figure class=" max-w-2xl md:max-w-3xl lg:max-w-5xl">
							<img
								src={imgProcess}
								class="object-contain ease-in-out rounded-lg shadow-none transition-shadow lg:px-10"
								alt="icon_nav"
							/>
						</figure>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.bscroll {
		scroll-margin: 20px;
	}
</style>

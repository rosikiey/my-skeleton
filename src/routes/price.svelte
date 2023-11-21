<script lang="ts">
	import { arraycost2 } from '../store.js';
	import Icon from '@iconify/svelte';
</script>

<div class="container flex flex-col max-w-full gap-4 md:gap-8 lg:gap-12 bscroll" id="pricing">
	<div class="basis-full">
		<div class="flex basis-ful h-full justify-center items-center">
			<div class="text-center">
				<h1 class=" text-2xl md:text-3xl font-bold leading-7 text-zinc-200 font_gelaso">
					Daftar harga pengerjaan Software
				</h1>
			</div>
		</div>
	</div>
	<div class="basis-full">
		<div class="flex flex-row basis-full h-full justify-center">
			<div class="container flex flex-row">
				<div class="basis-full h-full">
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row text-center"
					>
						{#each $arraycost2 as itemlist}
							<div class="card variant-filled-success">
								<header class="card-header">
									<div id="title" class="w-full border-b border-gray-800">
										<h2 class="font-bold font_gelaso text-2xl text-black">
											{itemlist?.headlist}
										</h2>
										<h3 class="font-normal font_serif text-error-600 text-xl mt-2">
											{itemlist?.price} <sup> juta</sup>
										</h3>
									</div>
								</header>
								<section>
									<div class="flex flex-col my-2 items-center justify-center">
										<div id="icon" class="basis-full">
											<button type="button" class="btn-icon btn-icon-xl variant-ringed-success">
												<Icon icon={itemlist?.iconlist} style="font-size: 35px;" />
											</button>
										</div>
										<div id="icon" class="basis-full font_bebas_neu text-xl text-gray-700">
											<p>{itemlist?.titlelist}</p>
										</div>
									</div>
								</section>
								<footer class="card-footer" />
							</div>
						{/each}
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

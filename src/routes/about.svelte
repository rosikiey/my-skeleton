<script lang="ts">
	import { arraytitle } from '../store.js';
	import Icon from '@iconify/svelte';
</script>

<div class="container flex flex-col max-w-full gap-4 md:gap-8 lg:gap-12" id="about">
	<div class="basis-full">
		<div class="flex basis-ful h-full justify-center items-center">
			<div class="text-center">
				<h1 class=" text-2xl md:text-3xl font-bold leading-7 text-zinc-200 font_gelaso">
					Apa keuntungan bekerja sama dengan kami ?
				</h1>
			</div>
		</div>
	</div>
	<div class="basis-full">
		<div class="flex flex-row basis-full h-full justify-center">
			<div class="container flex flex-row">
				<div class="basis-full h-full">
					<div
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 grid-flow-row text-center"
					>
						{#each $arraytitle as item}
							<div class="card variant-filled-success">
								<header class="card-header">
									<button type="button" class="btn-icon btn-icon-xl variant-filled-error"
										><Icon icon={item.iconset} style="font-size: 35px" /></button
									>
									<div class="bg-yellow-200 rounded-full" />
								</header>
								<section>
									<h2 class="text-xl font-bold leading-10 pt-4 font_gelaso text-black">
										<b>{item.title}</b>
									</h2>
								</section>
								<footer class="card-footer">
									<h2 class="text-lg leading-tight font_gelaso text-gray-700">
										{item.titleFooter}
									</h2>
								</footer>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import imgBg from '../assets/bg2.png';
	import imgMoto from '../assets/bgg3.png';
	import Card from '../component/card.svelte';
	import { arraytitle, arraycost, listarraycost } from '../store';
	import Icon from '@iconify/svelte';
</script>

<div class="container mx-auto min-w-fit md:max-h-screen">
	<div class="grid items-end grid-rows-2 gap-2 justify-items-center md:grid-cols-2">
		<div class=" min-w-fit md:min-h-screen md:mt-5">
			<img
				src={imgBg}
				class="h-auto max-w-sm transition-shadow duration-300 ease-in-out rounded-lg shadow-none md:max-w-lg lg:max-w-xl"
				alt="icon_nav"
			/>
		</div>
		<div class="flex items-center pb-20 min-w-fit md:pb-0 md:min-h-screen md:mb-0">
			<div class="grid content-end grid-rows-2 gap-5 justify-items-center">
				<div class=" md:-mb-15">
					<img
						src={imgMoto}
						class="h-auto max-w-sm transition-shadow duration-300 ease-in-out rounded-lg shadow-none md:max-w-md lg:max-w-lg"
						alt="icon_grid"
					/>
				</div>
				<div>
					<button type="button" class="btn bg-gradient-to-br variant-filled-surface"
						>Enroll now !!!</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="containe mx-auto min-w-fit md:max-h-screen">
	<div>
		<div class="pb-8 text-center">
			<h1 class=" text-2xl md:text-3xl font-bold leading-7 text-surface-600 font_gelaso">
				Apa keuntungan bekerja sama dengan kami ?
			</h1>
		</div>
		<div class="ml-10 mr-10">
			<div class="grid gap-2 text-center md:gap-4 md:grid-cols-2 md:grid-flow-row lg:grid-cols-3">
				{#each $arraytitle as item}
					<div>
						<Card classCard="card variant-ghost-surface lg:h-64 md:h-72">
							<span slot="theader">
								<button type="button" class="btn-icon btn-icon-xl variant-soft-surface"
									><Icon icon={item.iconset} style="font-size: 35px" /></button
								>
								<div class="bg-yellow-200 rounded-full" />
							</span>
							<span slot="tcontent">
								<h2 class="text-xl font-bold leading-10 font_gelaso text-surface-600">
									{item.title}
								</h2>
							</span>
							<span slot="tfooter">
								<h2 class="text-lg leading-tight font_gelaso text-surface-600">
									{item.titleFooter}
								</h2>
							</span>
						</Card>
					</div>
				{/each}
			</div>
		</div>
		<div class="text-center basis-full">
			<h1 class="text-3xl font-bold leading-7 text-surface-600 font_gelaso pt-10">
				Daftar harga pengerjaan Software
			</h1>
		</div>
		<div class="ml-10 mr-10 pt-10">
			<div class="grid gap-2 text-center md:gap-4 lg:grid-cols-2">
				{#each $arraycost as itemlist}
					<div>
						<Card classCard="card variant-soft-surface">
							<span slot="theader">
								<button type="button" class="btn-icon btn-icon-xl variant-ringed-surface"
									><Icon icon={itemlist.icon} style="font-size: 35px" /></button
								>
								<div class="bg-yellow-200 rounded-full" />
							</span>
							<span slot="tcontent">
								<div class="grid grid-rows-3">
									{#each $listarraycost as listcost}
										{#if itemlist.group == listcost.group}
											<div class=" flex flex-row items-center justify-center pt-4">
												<div class=" basis-1/6 pl-10 lg:basis-1/5">
													<Icon icon={listcost.iconlist} style="font-size: 35px" />
												</div>
												<div class=" basis-5/6 lg:basis-4/5 text-left">
													<div class="flex flex-col">
														{#if listcost.highlight == 't'}
															<div class="text-xl font-bold font_gelaso text-surface-600 pb-1">
																<b>{listcost.headlist}</b>
															</div>
															<div class="text-lg font_gelaso leading-6 text-surface-500">
																{listcost.titlelist}
															</div>
														{:else}
															<div class="text-xl font-bold font_gelaso text-orange-500 pb-1">
																<b>{listcost.headlist}</b>
															</div>
															<div class="text-lg font_gelaso leading-6 text-orange-500">
																{listcost.titlelist}
															</div>
														{/if}
													</div>
												</div>
											</div>
										{/if}
									{/each}
								</div>
							</span>
							<span slot="tfooter">
								<h2 class="text-3xl leading-tight font_bebas_neu text-surface-500 pt-2">
									<b>{itemlist.price}</b>
								</h2>
							</span>
						</Card>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

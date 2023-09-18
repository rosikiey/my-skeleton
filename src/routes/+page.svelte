<script lang="ts">
	import imgBg from '../assets/bg2.png';
	import imgMoto from '../assets/bgg3.png';
	import Card from '../component/card.svelte';
	import { arraytitle, arraycost, listarraycost } from '../store';
	import Icon from '@iconify/svelte';
</script>

<div class="container mx-auto min-w-fit md:max-h-screen" id="section-home">
	<div class="grid items-start grid-rows-2 lg:gap-2 justify-items-center md:grid-cols-2">
		<div class="container py-5 px-10 lg:py-10 lg:px-10">
			<div class="container">
				<img
					src={imgBg}
					class="object-contain ease-in-out rounded-lg shadow-none transition-shadow lg:px-10 lg:py-15"
					alt="icon_nav"
				/>
			</div>
		</div>
		<div class="container py-10 px-10 lg:py-20 lg:px-10">
			<div class="grid grid-rows-2 justify-items-center">
				<div class="container px-10 py-10 lg:px-20 lg:py-20">
					<img
						src={imgMoto}
						class="object-contain transition-shadow duration-300 ease-in-out rounded-lg shadow-none"
						alt="icon_grid"
					/>
				</div>
				<div>
					<button type="button" class="btn btn-xl variant-filled-surface">
						<Icon icon="icon-park-outline:cooperative-handshake" style="font-size: 35px" />
						<span><b>Price List !</b></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="containe mx-auto min-w-fit md:max-h-screen">
	<div id="section-about">
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
	</div>
	<div id="section-price">
		<div class="text-center basis-full">
			<h1 class="text-3xl font-bold leading-7 text-surface-600 font_gelaso pt-10">
				Daftar harga pengerjaan Software
			</h1>
		</div>
		<div class="ml-10 mr-10 pt-10">
			<div class="grid gap-2 text-center md:gap-4 md:grid-cols-2">
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
											<div
												class=" flex flex-row items-center justify-center pt-2 md:pt-4 h-24 lg:h-32 md:h-32"
											>
												<div class=" basis-1/6 pl-6 lg:pl-10 md:pl-2 md:basis-1/5">
													{#if listcost.highlight == 't'}
														<Icon icon={listcost.iconlist} style="font-size: 35px" />
													{:else}
														<Icon
															icon={listcost.iconlist}
															style="font-size: 45px;color: #f54e42;"
														/>
													{/if}
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
								<h2 class="text-3xl leading-tight font_bebas_neu text-orange-500 pt-2">
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

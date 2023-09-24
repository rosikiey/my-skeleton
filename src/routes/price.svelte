<script lang="ts">
	import { arraycost } from '../store.js';
	import { listarraycost } from '../store.js';
	import Icon from '@iconify/svelte';
</script>

<div class="container flex flex-col max-w-full gap-4 md:gap-8 lg:gap-12">
	<div class="basis-full">
		<div class="flex basis-ful h-full justify-center items-center">
			<div class="text-center">
				<h1 class=" text-2xl md:text-3xl font-bold leading-7 text-surface-500 font_gelaso">
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
						class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 grid-flow-row text-center"
					>
						{#each $arraycost as itemlist}
							<div class="card variant-ghost-surface">
								<header class="card-header">
									<slot name="theader" />
									<button type="button" class="btn-icon btn-icon-xl variant-soft-surface"
										><Icon icon={itemlist.icon} style="font-size: 35px" /></button
									>
									<div class="bg-yellow-200 rounded-full" />
								</header>
								<section>
									<div class="grid grid-rows-2">
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
								</section>
								<footer class="card-footer">
									<h2 class="text-3xl leading-tight font_bebas_neu text-orange-500 pt-2">
										<b>{itemlist.price}</b>
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

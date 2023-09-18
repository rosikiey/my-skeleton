<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import logoKu from '../assets/logoku5x.png';
	import logoWa from '../assets/wa.png';
	import Icon from '@iconify/svelte';

	let click_menu = 'Y';

	function change_show() {
		if (click_menu=='Y'){
			click_menu = 'T';
		}else{
			click_menu = 'Y';
		}
	}
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"
				><a href="/"><img src={logoKu} class="h-8 ml-2 hover:cursor-pointer" alt="logo cs" /></a
				></svelte:fragment
			>
			<p class="font-serif text-2xl font-bold hover:cursor-pointer">
				<a href="/">Creative Software</a>
			</p>
			<svelte:fragment slot="trail">
				<div class="hidden md:block">
					<div class="grid grid-cols-3 gap-2">
						<div
							class="hover:text-secondary-400 hover:cursor-pointer ml-10 mt-5 md:mt-3 md:text-lg font_gelaso"
						>
							<a href="/about"><p>About</p></a>
						</div>
						<div
							class="hover:text-secondary-400 hover:cursor-pointer mt-5 ml-5 md:ml-0 md:mt-3 md:text-lg font_gelaso"
						>
							<p>Pricing</p>
						</div>
						<div>
							<button type="button" class="btn btn-md z-auto md:variant-soft-surface md:mr-1">
								<span
									class="hover:text-blue-400 hover:cursor-pointer font-bold hidden md:block md:text-md font_gelaso"
									>Contact</span
								>
								<img src={logoWa} class="h-10 md:h-8 md:ml-2" alt="" />
							</button>
						</div>
					</div>
				</div>
				<div class="block md:hidden">
					<div class="grid grid-cols-1 gap-2">
						<div>
							<button type="button" on:click={change_show} class="btn-icon btn-icon-sm variant-ringed-surface"><Icon icon="ph:list-light" style="font-size: 25px" /></button>
						</div>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="headline">
				{#if click_menu=='Y'}
					<div class="block md:hidden bg-surface-200">
						<div class="container grid grid-rows-2 text-right space-y-1">
							<div
								class="hover:text-secondary-400 hover:cursor-pointer ml-10 text-xl font_gelaso"
							>
								<a href="/about"><p>About</p></a>
							</div>
							<div
								class="hover:text-secondary-400 hover:cursor-pointer ml-5 text-xl font_gelaso"
							>
								<p>Pricing</p>
							</div>
							<div
								class="hover:text-secondary-400 hover:cursor-pointer ml-5 text-xl font_gelaso"
							>
								<p>Contact Us</p>
							</div>
						</div>
					</div>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<p>oke</p>
	</svelte:fragment>
</AppShell>

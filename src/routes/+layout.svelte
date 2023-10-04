<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import logoKu from '$lib/assets/logoku5x.png';
	import logoWa from '$lib/assets/wa.png';
	import Icon from '@iconify/svelte';

	let click_menu = 'T';

	function change_show() {
		if (click_menu == 'Y') {
			click_menu = 'T';
		} else {
			click_menu = 'Y';
		}
	}

	function to_element_about() {
		document.getElementById('about')?.scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
		document.getElementById('about')?.offsetHeight;
	}

	function to_element_pricing() {
		document.getElementById('pricing')?.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	}

	function to_element_home() {
		document.getElementById('home')?.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar id="section_head">
			<svelte:fragment slot="lead"
				><a on:click={to_element_home}
					><img src={logoKu} class="h-10 ml-2 hover:cursor-pointer" alt="logo cs" /></a
				></svelte:fragment
			>
			<p class="font-serif text-2xl font-bold hover:cursor-pointer pt-1">
				<a on:click={to_element_home}>Creative Software</a>
			</p>
			<svelte:fragment slot="trail">
				<div class="hidden md:block">
					<div class="grid grid-cols-3 gap-2">
						<div
							class="hover:text-error-500 hover:cursor-pointer ml-10 mt-5 md:mt-3 md:text-lg lg:text-xl font_gelaso"
						>
							<p on:click={to_element_about}>About</p>
						</div>
						<div
							class="hover:text-error-500 hover:cursor-pointer mt-5 ml-6 md:ml-0 md:mt-3 md:text-lg lg:text-xl font_gelaso"
						>
							<p on:click={to_element_pricing}>Pricing</p>
						</div>
						<div>
							<a
								href="https://wa.me/6281917310390?text=hallo%2C%20apa%20bisa%20mengerjakan%20software%20sesuai%20dengan%20kebutuhan%20saya%3F"
								target="_blank"
								type="button"
								class="btn btn-md z-auto md:variant-soft-tertiary md:mr-1"
							>
								<span
									class="hover:text-error-500 hover:cursor-pointer font-bold hidden md:block md:text-md lg:text-lg font_gelaso"
									>Contact</span
								>
								<img src={logoWa} class="h-10 md:h-8 md:ml-2" alt="" />
							</a>
						</div>
					</div>
				</div>
				<div class="block md:hidden">
					<div class="grid grid-cols-1 gap-2">
						<div>
							<button
								type="button"
								on:click={change_show}
								class="btn-icon btn-icon-sm variant-ringed-tertiary"
								><Icon icon="ph:list-light" style="font-size: 25px" /></button
							>
						</div>
					</div>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<div class="text-center text-sm lg:text-base bg-lime-300 text-rose-500">
			<p>Sofware berbasis Web, Android, Iphone, Desktop</p>
		</div>
	</svelte:fragment>
</AppShell>

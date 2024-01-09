<script>
	import Icon from '@iconify/svelte';
</script>

<div class="container flex flex-col max-w-full pt-10 md:gap-8 bscroll">
	<div class=" basis-full">
		<div class="flex flex-col h-full justify-center items-center">
			<div class="basis-full text-center">
				<h1 class="text-2xl md:text-3xl font-bold leading-7 text-zinc-200 font_gelaso">
					Segera Konsultasikan dengan Kami.
				</h1>
			</div>
			<div class="basis-full text-center">
				<h1 class="text-2xl md:text-3xl font-bold leading-7 text-zinc-200 font_gelaso">
					GRATIS !!
				</h1>
			</div>
		</div>
	</div>
	<div class=" basis-full text-center">
		<div class="container flex flex-col lg:flex-row max-w-full pt-5 pb-10 md:gap-8 bscroll">
			<div class=" basis-1/3 mx-10 md:mx-32 lg:mx-10">
				<div class=" card p-4 bg-gradient-to-br variant-gradient-success-warning h-32">
					<div class="flex flex-col">
						<div class=" basis-1/3">
							<button type="button" class="btn-icon btn-icon-xl !bg-transparent">
								<Icon icon="ion:call-outline" style="font-size: 45px;" />
							</button>
						</div>
						<div class="basis-full">
							<p>+62 8191 7310 390</p>
						</div>
					</div>
				</div>
			</div>
			<div class=" basis-1/3 mx-10 my-4 md:mx-32 lg:mx-10 md:my-2 lg:my-0">
				<div class=" card p-4 bg-gradient-to-br variant-gradient-success-warning h-32">
					<div class="flex flex-col">
						<div class=" basis-1/3">
							<button type="button" class="btn-icon btn-icon-xl !bg-transparent">
								<Icon icon="octicon:mail-24" style="font-size: 45px;" />
							</button>
						</div>
						<div class="basis-full">
							<p>brackets.erp@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
			<div class=" basis-1/3 mx-10 md:mx-32 lg:mx-10">
				<div class=" card p-4 bg-gradient-to-br variant-gradient-success-warning h-32">
					<div class="flex flex-col">
						<div class=" basis-1/3">
							<button type="button" class="btn-icon btn-icon-xl !bg-transparent">
								<Icon icon="ic:outline-place" style="font-size: 50px;" />
							</button>
						</div>
						<div class="basis-full">
							<p>Surabaya | Indonesia</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

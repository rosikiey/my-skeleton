<script lang="ts">
	import imgApp from '$lib/assets/appstore.png';
	import imgPlay from '$lib/assets/playstore.png';
</script>

<div class="container flex flex-col max-w-full gap-4 md:gap-8 bscroll" id="footer">
	<div class="basis-full">
		<div class="flex flex-col h-full justify-center items-center">
			<div class="basis-full text-center">
				<h1 class="text-2xl md:text-3xl font-bold leading-7 text-zinc-200 font_gelaso">
					Apa yang membuat kita berbeda?
				</h1>
			</div>
			<div class="basis-full text-center pt-4">
				<h3 class="text-lg md:text-lg font-bold leading-7 text-gray-400 font_gelaso">
				  Team Brackets di bentuk untuk memudahkan proses bisnis anda dimanapun dan kapanpun.
				</h3>
			</div>
			<div class="basis-full text-center">
				<h3 class="text-lg md:text-lg font-bold leading-7 text-gray-400 font_gelaso">
					Software Support Android dan IOS !!!
				</h3>
			</div>
		</div>
	</div>
	<div class="basis-full">
		<div class="flex flex-row h-full">
			<div class="basis-full">
				<div class="flex justify-end md:mx-18">
					<figure class="max-w-xs">
						<img
							src={imgApp}
							class="object-contain ease-in-out rounded-lg shadow-none transition-shadow lg:px-10"
							alt="icon_nav"
						/>
					</figure>
				</div>
			</div>
			<div class="basis-full">
				<div class="flex justify-start md:mx-18">
					<figure class="max-w-xs">
						<img
							src={imgPlay}
							class="object-contain ease-in-out rounded-lg shadow-none transition-shadow lg:px-10"
							alt="icon_nav"
						/>
					</figure>
				</div>
			</div>
		</div>
	</div>
</div>

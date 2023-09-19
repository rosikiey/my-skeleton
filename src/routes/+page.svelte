<script lang="ts">
	import imgBg from '../assets/bg2.png';
	import imgMoto from '../assets/bgg3.png';
	import Card from '../component/card.svelte';
	import { arraytitle, arraycost, listarraycost } from '../store';
	import Icon from '@iconify/svelte';
</script>

<div class="container flex flex-col md:flex-row max-w-full max-h-full">
    <div class="basis-1/2 bg-blue-100">
		<div class="flex md:my-10 md:mx-10">
        	<img
				src={imgBg}
				class="object-contain ease-in-out rounded-lg shadow-none transition-shadow lg:px-10"
				alt="icon_nav"
			/>
		</div>
    </div>
    <div class="basis-1/2 bg-surface-50">
       <div class="container flex flex-col h-full items-center space-y-4 lg:space-y-10">
			<div class="md:basis-1/2 ">
				<div class="container flex flex-row h-full items-end ">
					<div class="basis-full">
						<img
						src={imgMoto}
						class="object-contain transition-shadow duration-300 ease-in-out rounded-lg shadow-none"
						alt="icon_grid"
					/>
					</div>
				</div>
			</div>
			<div class="md:basis-1/2">
				<div>
					<button type="button" class="btn btn-sm md:btn-md lg:btn-xl variant-filled-surface">
						<Icon icon="icon-park-outline:cooperative-handshake" style="font-size: 25px" />
						<span><b>Price List !</b></span>
					</button>
				</div>
			</div>
		</div>
    </div>
</div>
<div class="container flex flex-col bg-green-500 max-w-full h-full">
    <div class="basis-1/12 bg-yellow-200">
		<div class="container flex content-center bg-slate-50 h-full w-full">
			<p>test</p>
		</div>
    </div>
    <div class="basis-5/12 bg-green-300">
       <p>x</p>
    </div>
</div>
<div class="container flex bg-red-500 max-w-full h-full">
    <div class="container max-h-screen ">
        <p>tess</p>
    </div>
</div>

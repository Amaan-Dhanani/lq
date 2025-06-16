<script lang="ts">
	import { goto } from '$app/navigation';
	//Left Icon
	import Icon1 from './icons/Play.svelte';
	let text1 = 'Play';
	//2nd Icon
	import Icon2 from './icons/Create.svelte';
	let text2 = 'Create';
	//3rd Icon
	import Icon3 from './icons/Profile.svelte';
	let text3 = 'Profile';
	//4th Icon
	import Icon4 from './icons/Discord.svelte';
	let text4 = 'Discord';
	//5th Icon
	import Icon5 from './icons/Settings.svelte';
	let text5 = 'Settings';
	let link5 = "/account";
</script>

<div class="fixed left-0 right-0 bottom-0 z-10 w-full">
	<div class="flex h-[118px] w-full flex-row items-end justify-around">
		<div class="absolute -z-100 h-[95px] w-full rounded-t-[30px] bg-[#ccc] dark:bg-[#3E3E55]"></div>
		<div class={'flex h-[95px] flex-col items-center justify-center rounded-tl-[30px] bg-[#ccc] dark:bg-[#3E3E55]'}>
			<div class="fill-[lightcoral]"><Icon1 /></div>
			<p class="text-[15px] text-center dark:text-[#ccc]">{text1}</p>
		</div>
		<div class={'flex h-[95px] flex-col items-center justify-center bg-[#ccc] dark:bg-[#3E3E55]'}>
			<div class="fill-[lightcoral]"><Icon2 /></div>
			<p class="text-[15px] text-center dark:text-[#ccc]">{text2}</p>
		</div>
		<div
			class={'flex h-[118px] w-[100px] flex-col items-center justify-center rounded-t-[50%] bg-[#ccc] dark:bg-[#3E3E55]'}
		>
			<div class="h-[73px] fill-[lightcoral]"><Icon3 /></div>
			<p class="text-[15px] text-center dark:text-[#ccc]">{text3}</p>
		</div>
		<div class={'flex h-[95px] flex-col items-center justify-center bg-[#ccc] dark:bg-[#3E3E55]'}>
			<Icon4 />
			<!--THIS IS ME: DISCORD ICON, REMOVE COLOR CLASS FOR 'lightcoral'-->
			<p class="text-[15px] text-center dark:text-[#ccc]">{text4}</p>
		</div>
																							<!-- svelte-ignore a11y_click_events_have_key_events -->
																							<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div on:click={() => goto('/account')} class={'flex h-[95px] flex-col items-center justify-center rounded-tr-[30px] bg-[#ccc] dark:bg-[#3E3E55]'}>
			<div class="fill-[lightcoral]"><Icon5 /></div>
			<p class="text-[15px] text-center dark:text-[#ccc]">{text5}</p>
		</div>
	</div>
</div>

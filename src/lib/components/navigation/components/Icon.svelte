<script lang="ts">
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	export let text = '';
	export let paths = '';
	export let viewbox = '';
	export let center = 'false';
	export let stroke = '';
	export let fill = 'none';
	export let link = '';

	$: currentPath = get(page).url.pathname;
	$: isActive = currentPath === link;
</script>

{#if center == 'true'}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div 
		on:click={() => location.replace(link)}
		class={`flex h-[118px] w-[100px] flex-col items-center justify-center cursor-pointer rounded-t-[50%] p-3 transition
			${isActive 
				? 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-[#3E3E55] dark:via-[#4A4A6A] dark:to-[#3E3E55]'
				: 'bg-[#ccc] dark:bg-[#3E3E55]'}`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewbox}
			width="70"
			height="70"
			stroke={stroke}
			fill={fill}
			aria-label={text}
			role="img"
		>
			{@html paths}
		</svg>
		<p class={`text-center text-[15px] ${isActive ? 'text-black dark:text-[#ddd]' : 'dark:text-[#ccc]'}`}>{text}</p>
	</div>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div 
		on:click={() => location.replace(link)}
		class={`flex h-[95px] flex-col items-center justify-center cursor-pointer rounded-xl p-3 transition 
			${isActive 
				? 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-[#2F2F45] dark:via-[#3A3A55] dark:to-[#2F2F45]'
				: ''}`}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewbox}
			width="50"
			height="50"
			stroke={stroke}
			fill={fill}
			aria-label={text}
			role="img"
		>
			{@html paths}
		</svg>
		<p class={`text-center text-[15px] ${isActive ? 'text-black dark:text-[#ddd]' : 'dark:text-[#ccc]'}`}>{text}</p>
	</div>
{/if}

<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import '$lib/css/app.css';
	import { Input } from '$lib/components';
	export let data: PageData;
	import Navigation from '$lib/components/navigation/Navigation.svelte';
</script>

<!-- Full screen container -->
<div
	class="fixed inset-0 -z-[100] mt-[100vh] h-[300vh] w-screen overflow-hidden bg-[#F0F0F2] dark:bg-[#1F1F39]"
></div>
<div class="mr-[1rem] ml-[1rem] flex min-h-screen flex-col bg-[#3D5CFF]">
	<!-- Header -->
	<h1 class="mb-0 ml-[5px] truncate pt-[70px] text-[32px] font-bold text-white">
		Hi, {data.name.split(' ')[0]}
	</h1>
	<p class="mt-0 mb-[10px] ml-[5px] text-[14px] text-white">Welcome back to LearnQuest!</p>
	<div class="flex w-full flex-row bg-[#3D5CFF]">
		
	</div>
</div>
<Navigation/>

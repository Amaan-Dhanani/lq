<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Speedial from '@lib/components/darklight/speedial.svelte';
	import { global_mode$ } from '$lib/components/darklight/mode';
	import { type Writable } from 'svelte/store';

	let pageName;
	$: pageName = $page.url.pathname;

	let mode$: Writable<'dark' | 'light' | string> = global_mode$.mode$;

	onMount(() => {
		const body = document.body;

		mode$.subscribe((v) => {
			localStorage.theme = v;
			document.documentElement.classList.toggle('dark', v === 'dark');

			// Reset old background classes (optional safety step)
			body.classList.remove("bg-[#F0F0F2]", "dark:bg-[#1F1F39]");

			// Apply background color to the body
			if (pageName === "/register" || pageName === "/login") {
				body.classList.add("bg-[#F0F0F2]", "dark:bg-[#1F1F39]");
			}
		});
	});
</script>



<main class="size-full">
	<slot />
	<Speedial />
</main>

<style>
	main {
		max-width: 30rem;
		margin-inline: auto;
	}
</style>

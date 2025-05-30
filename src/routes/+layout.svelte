<script lang="ts">
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import RemoveGlobalComponent from '$lib/components/RemoveGlobalComponent.svelte';
	import { onMount } from 'svelte';
	import Speedial from '@lib/components/darklight/speedial.svelte';
	import { global_mode$ } from '$lib/components/darklight/mode';
	import { type Writable } from 'svelte/store';

	let mode$: Writable<'dark' | 'light' | string> = global_mode$.mode$;

	onMount(() => {
		mode$.subscribe((v) => {
			localStorage.theme = v; // Store current theme dynamically
			document.documentElement.classList.toggle('dark', v === 'dark');
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
		padding-inline: 1rem;
	}
</style>

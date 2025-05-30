<script lang="ts">
	import { page } from '$app/stores';
  import Nav from '$lib/components/Nav.svelte';
  import RemoveGlobalComponent from '$lib/components/RemoveGlobalComponent.svelte';
  import { onMount } from 'svelte';
  import Speedial from '@lib/components/darklight/speedial.svelte';
</script>


<main class="size-full">
	<slot />
	<Speedial/>
</main>

<style>
	main {
		max-width: 30rem;
		margin-inline: auto;
		padding-inline: 1rem;
	}
</style>

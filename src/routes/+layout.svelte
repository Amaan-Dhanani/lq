<script lang="ts">
	import { page } from '$app/stores';
  import Nav from '$lib/components/Nav.svelte';
  import RemoveGlobalComponent from '$lib/components/RemoveGlobalComponent.svelte';
  import { onMount } from 'svelte';
</script>


<main>
	<slot />
</main>

<style>
	main {
		max-width: 30rem;
		margin-inline: auto;
		padding-inline: 1rem;
	}
</style>

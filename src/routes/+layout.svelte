<script lang="ts">

  // Global CSS Import
  import '$lib/css/app.css';

	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { LightDark } from '$lib/components';
	import { global_mode$ } from '$lib/components/darklight/mode';

	let pageName = page.url.pathname;

	let mode$ = global_mode$.mode$;

	onMount(() => {
		mode$.subscribe((v) => {
			localStorage.theme = v;
			document.documentElement.classList.toggle('dark', v === 'dark');
		});
	});
</script>


{#if pageName === "/register" || pageName === "/login" || pageName === "/account"}
  <div class="w-full h-full -z-10000 bg-[#F0F0F2] dark:bg-[#1F1F39]">
    <main class="size-full">
      <slot />
      <LightDark />
    </main>
  </div>
{:else if pageName === "/dashboard"}
  <div class="w-full h-full -z-10000 bg-[#3D5CFF]">
    <main class="size-full">
      <slot />
      <LightDark />
    </main>
  </div>
{:else if pageName.startsWith("/create")}
  <div class="w-full h-full -z-10000 bg-[#4c4c61] dark:bg-[#1F1F39]">
    <main class="size-full">
      <slot />
      <LightDark />
    </main>
  </div>
{/if}


<style>
	main {
		max-width: 30rem;
		margin-inline: auto;
	}
</style>

<script>
    export let remove = false; // Default: component is shown
  </script>
  
  {#if !remove}
    <slot />
  {/if}
  
<!--THIS COMPONENT IS USED TO REMOVE A COMPONENT THAT IS SHOWN ON EVERY PAGE, SUCH AS THE NAV IN +layout.svelte-->
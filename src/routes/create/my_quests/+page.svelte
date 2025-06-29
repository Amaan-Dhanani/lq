<script lang="ts">
  import '$lib/css/app.css';
  export let data: {
    quests: { quest_title: string; created_at: string }[];
  };
</script>

<div class="max-w-3xl mx-auto p-6">
  <h1 class="text-4xl font-bold mb-6 text-indigo-700">Your Quests</h1>

  {#if data.quests.length > 0}
    <ul class="space-y-4">
      {#each data.quests as quest}
        <li
          class="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="text-xl font-semibold">{quest.quest_title}</div>
          <div class="text-gray-500 text-sm mt-1">
            {new Date(quest.created_at).toLocaleString()}
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <p class="text-gray-600 text-center">No quests found.</p>
  {/if}
</div>

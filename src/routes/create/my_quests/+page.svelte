<script lang="ts">
	import '$lib/css/app.css';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
  import QuestionPreview from '$lib/components/QuestionPreview.svelte';

	export let data: {
		quests: { quest_title: string; created_at: string; id: string }[];
	};

	const showModal = writable(false);
	const selectedQuest = writable<null | { quest_title: string; created_at: string; id: string }>(
		null
	);

	function openModal(quest: { quest_title: string; created_at: string; id: string } | null) {
		selectedQuest.set(quest);
		showModal.set(true);
	}

	function closeModal() {
		showModal.set(false);
		selectedQuest.set(null);
	}
</script>

<div class="mx-auto max-w-3xl p-6">
	<h1 class="mb-6 text-4xl font-bold text-indigo-700">Your Quests</h1>

	{#if data.quests.length > 0}
		<ul class="space-y-4">
			{#each data.quests as quest}
				<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<li
					class="cursor-pointer rounded-lg bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg"
					on:click={() => openModal(quest)}
				>
					<div class="text-xl font-semibold">{quest.quest_title}</div>
					<div class="mt-1 text-sm text-gray-500">{quest.id}</div>
					<div class="mt-1 text-sm text-gray-500">
						{new Date(quest.created_at).toLocaleString()}
					</div>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="text-center text-gray-600">No quests found.</p>
	{/if}
</div>

<!-- Modal -->
{#if $showModal}
	<div class="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black">
		<div class="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
			<button
				on:click={closeModal}
				class="absolute top-2 right-2 text-xl font-bold text-gray-400 hover:text-gray-600"
			>
				&times;
			</button>

			{#if $selectedQuest}
				<h2 class="mb-4 text-2xl font-bold text-indigo-700">Quest Details</h2>
				{#each Array.from({ length: 10 }, (_, i) => i + 1) as number}
					{#if tempquest[`question_${number}`]}
						<QuestionPreview
							{number}
							image={tempquest[`image_${number}`]}
							correctanswer={tempquest[`correctanswer_${number}`]}
							explanation={tempquest[`explanation_${number}`]}
							answerchoicea={tempquest[`answerchoicea_${number}`]}
							answerchoiceb={tempquest[`answerchoiceb_${number}`]}
							answerchoicec={tempquest[`answerchoicec_${number}`]}
							answerchoiced={tempquest[`answerchoiced_${number}`]}
							question={tempquest[`question_${number}`]}
						/>
					{/if}
				{/each}
			{/if}
		</div>
	</div>
{/if}

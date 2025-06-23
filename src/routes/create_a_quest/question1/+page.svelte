<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import '$lib/css/app.css';
	import ImageSubmitter from "$lib/components/image_submitter/ImageSubmitter.svelte";
	export let form: ActionData;
	import { CategorySelect } from '$lib/components';
	let selected = 'IceQuest Platformer';
	let selected2 = 'Public';
	import { Textarea } from '$lib/components';
</script>

<!-- Full screen container -->
<div
	class="fixed inset-0 -z-[100] mt-[100vh] h-[300vh] w-screen overflow-hidden bg-[#4c4c61] dark:bg-[#1F1F39]"
></div>
<div class="mr-[1rem] ml-[1rem] flex min-h-screen flex-col bg-[#4c4c61] dark:bg-[#1F1F39]">
	<!-- Header -->
	<h1 class="mb-0 ml-[5px] pt-[86px] text-[32px] font-bold text-white">Create a Quest</h1>
	<p class="mt-0 mb-[10px] ml-[5px] text-[12px] text-[#B8B8D2]">
		Unknown subheading
	</p>

	<!-- Form Section -->
	<form
		method="POST"
		autocomplete="off"
		use:enhance
		class="box-border flex flex-grow flex-col rounded-t-2xl bg-white px-6 py-8 dark:bg-[#2F2F42]"
	>
		<h1 class="mb-[5px] text-center text-[18px] dark:text-white mb-4">Question 1</h1>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Question</h2>
			<Textarea
				id="question_1"
				name="question_1"
				required
				cap={1850}
				class="mb-[10px]"
				placeholder="Enter question here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Answer Choice A</h2>
			<Textarea
				id="answerchoicea_1"
				name="answerchoicea_1"
				required
				cap={1850}
				placeholder="Enter Answer Choice A here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Answer Choice B</h2>
			<Textarea
				id="answerchoiceb_1"
				name="answerchoiceb_1"
				required
				cap={1850}
				placeholder="Enter Answer Choice B here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Answer Choice C</h2>
			<Textarea
				id="answerchoicec_1"
				name="answerchoicec_1"
				required
				cap={1850}
				placeholder="Enter Answer Choice C here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Answer Choice D</h2>
			<Textarea
				id="answerchoiced_1"
				name="answerchoiced_1"
				required
				cap={1850}
				placeholder="Enter Answer Choice D here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Description (optional)</h2>
			<Textarea
				id="description_1"
				name="description_1"
				cap={1850}
				rows=3
				placeholder="Optionally explain the reasoning behind the correct answer or provide extra context. Max length - 1850 chars."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Image Attachment (optional)</h2>
			<ImageSubmitter name="image_1" id="image_1"/>

		<div class="gap-0">
			<h2 class="mt-[5px] mb-[5px] text-[16px] dark:text-white">Correct Answer</h2>
				<CategorySelect
					name="correctanswer_1"
					bind:selected={selected2}
					options={[
						{ label: 'A', value: 'A' },
						{ label: 'B', value: 'B' },
						{ label: 'C', value: 'C' },
						{ label: 'D', value: 'D' },
					]}
				/>

		</div>
		<br>
		<!-- Submit Button -->
		<button
			class="mt-[20px] h-12 w-full rounded-xl bg-[#3d5cff] text-center text-white hover:cursor-pointer"
		>
			Continue Quest Creation
		</button>
	</form>
</div>

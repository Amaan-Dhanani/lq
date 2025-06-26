<script lang="ts">
	import { enhance } from '$app/forms';
	import '$lib/css/app.css';
	import ImageSubmitter from "$lib/components/image_submitter/ImageSubmitter.svelte";
	export let data;
	const { tempquest } = data;
	import { CategorySelect } from '$lib/components';
	let selected2 = tempquest.correctanswer_9 || 'A';
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
		<h1 class="mb-[5px] text-center text-[18px] dark:text-white mb-4">Question 8</h1>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Question</h2>
			<Textarea
				id="question_8"
				name="question_8"
				required
				cap={1850}
				class="mb-[10px]"
				value={tempquest?.question_8}
				placeholder="Enter question here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Answer Choice A</h2>
			<Textarea
				id="answerchoicea_8"
				name="answerchoicea_8"
				required
				cap={1850}
				value={tempquest?.answerchoicea_8}
				placeholder="Enter Answer Choice A here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Answer Choice B</h2>
			<Textarea
				id="answerchoiceb_8"
				name="answerchoiceb_8"
				required
				cap={1850}
				value={tempquest?.answerchoiceb_8}
				placeholder="Enter Answer Choice B here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Answer Choice C</h2>
			<Textarea
				id="answerchoicec_8"
				name="answerchoicec_8"
				required
				cap={1850}
				value={tempquest?.answerchoicec_8}
				placeholder="Enter Answer Choice C here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Answer Choice D</h2>
			<Textarea
				id="answerchoiced_8"
				name="answerchoiced_8"
				required
				cap={1850}
				value={tempquest?.answerchoiced_8}
				placeholder="Enter Answer Choice D here. Maximum length 1850 characters."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Description (optional)</h2>
			<Textarea
				id="description_8"
				name="description_8"
				cap={1850}
				rows={3}
				value={tempquest?.description_8}
				placeholder="Optionally explain the reasoning behind the correct answer or provide extra context. Max length - 1850 chars."
			/>
			<h2 class="mb-[5px] text-[16px] dark:text-white">Image Attachment (optional)</h2>
			<ImageSubmitter name="image_8" id="image_8" dataURI={tempquest?.image_8}/>

		<div class="gap-0">
			<h2 class="mt-[10px] mb-[5px] text-[16px] dark:text-white">Correct Answer</h2>
				<CategorySelect
					name="correctanswer_8"
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

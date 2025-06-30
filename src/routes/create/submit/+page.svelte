<script lang="ts">
	import { Input } from '$lib/components';
	import { enhance } from '$app/forms';
	import '$lib/css/app.css';
	import { goto } from '$app/navigation';
	export let data;
	export let form;
	let { tempquest } = data;
</script>

<!-- Full screen container -->
<div
	class="fixed inset-0 -z-[100] mt-[100vh] h-[300vh] w-screen overflow-hidden bg-[#4c4c61] dark:bg-[#1F1F39]"
></div>
<div class="mr-[1rem] ml-[1rem] flex min-h-screen flex-col bg-[#4c4c61] dark:bg-[#1F1F39]">
	<!-- Header -->
	<h1 class="mb-0 ml-[5px] pt-[86px] text-[32px] font-bold text-white">Create a Quest</h1>
	<p class="mt-0 mb-[10px] ml-[5px] text-[12px] text-[#B8B8D2]"></p>
	<!-- Form Section -->
	<div
		class="mb-[95px] box-border flex flex-grow flex-col gap-4 rounded-t-2xl bg-white px-6 py-8 dark:bg-[#2F2F42]"
	>
		<div class="gap-0">
			<h1 class="mb-[10px] text-center text-[18px] dark:text-white">Submit</h1>
			<hr class="dark:border-white" />
			<hr class="dark:border-white" />
			<hr class="dark:border-white" />
			<hr class="dark:border-white" />
		</div>
			<div class="gap-0 dark:text-white">
				<h2 class="mt-0 text-[16px]">
					Alright! You have completed
					{#if tempquest.question == '1'}
						only one question, and 10 Questions is the maximum amount of questions you can create.
					{:else if tempquest.question == '10'}
						the maximum amount of questions!
					{:else}
						{tempquest.question} questions, and 10 Questions is the maximum amount of questions you can
						create.
					{/if}
					Clicking "Submit Quest" will finalize your submission.
				</h2>

				<hr class="dark:border-white" />
			</div>
	</div>
</div>

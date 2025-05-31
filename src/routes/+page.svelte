<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import '$lib/css/app.css';
	import { Input } from '@lib/components';
	export let form: ActionData;
</script>

<!-- Full screen container -->
<div class="fixed inset-0 -z-[100] overflow-hidden w-screen h-[300vh] bg-[#F0F0F2] dark:bg-[#1F1F39] mt-[100vh]"></div>
<div class="flex flex-col min-h-screen bg-[#F0F0F2] dark:bg-[#1F1F39]">

	<!-- Header -->
	<h1 class="text-[32px] pt-[86px] font-bold ml-[5px] mb-0 dark:text-white">Login</h1>
	<p class="mt-0 ml-[5px] mb-[10px] text-[12px] text-[#B8B8D2]">
		Welcome back to LearnQuest!
	</p>

	<!-- Form Section -->
	<form
		method="POST"
		autocomplete="off"
		use:enhance
		class="flex flex-col flex-grow rounded-t-2xl py-8 px-6 box-border gap-4 bg-white dark:bg-[#2F2F42]"
	>
		<div>
			<Input type="email"
			id="email_input"
			name="email"
			label="Email"
			value={form?.email ?? ""} />
		</div>
		<div>
			<Input type="password" id="password_input" label="Password" name="password" />
		</div>
		

		<!-- Submit Button -->
		<button class="font-poppins h-12 w-full rounded-xl bg-[#3d5cff] text-center text-white hover:cursor-pointer">
			Login
		</button>

		<!-- Login Link -->
		<p class="text-center text-[#858597] text-[14px]">
			Don't have an account? <a class="text-[#3D5CFF] font-bold underline" href="/login">Sign up</a>
		</p>


		{#if form?.error}
			<p class="text-[lightcoral]">{form.error}</p>
		{/if}
	</form>
</div>

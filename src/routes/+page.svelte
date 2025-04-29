<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import '$lib/css/app.css';
	import { Input } from '@lib/components';
	export let form: ActionData;
</script>

<h1 class="text-[32px] mt-[86px] font-bold ml-[5px] mb-0">Sign Up</h1>
<p class="mt-0 ml-[5px] mb-[10px] text-[12px]  text-[#B8B8D2]">Enter your details below to start your journey!</p>

<form method="POST" autocomplete="off" use:enhance class="rounded-t-2xl py-8 border-[#ccc] border-[1px] border-b-[0px] px-6 box-border flex flex-col gap-4">
	<div>

		<Input type="email" id="email_input" name="email" label="Your Email" value={form?.user?.email ?? ''} />
	</div>
	<div>
		<Input type="password" id="password_input" label="Password" name="password"/>
	</div>
	<div>
		<Input type="text" id="name_input" name="name" label="Name" value={form?.user?.name ?? ''} class="mb-[12px]"/>
	</div>
	<button
		class="font-poppins h-12 w-full rounded-xl bg-[#3d5cff] text-center text-white hover:cursor-pointer"
		>Register</button
	>
</form>
<p class="text-center text-[#858597] text-[14px]">Already have an account? <a class="text-[#3D5CFF] font-bold underline">Log in</a></p>


{#if form?.message}
	<p class="success">
		{form.message}
	</p>
{/if}

{#if form?.error}
	<p class="error">
		{form.error}
	</p>
{/if}

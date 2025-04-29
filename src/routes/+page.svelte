<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import '$lib/css/app.css';
	import { Input } from '@lib/components';
	export let form: ActionData;
</script>

<h1 class="heading font-poppins text-[32px] mt-[86px] font-bold ml-[5px] mb-0">Sign Up</h1>
<p class="subheading">Enter your details below to start your journey!</p>

<form method="POST" autocomplete="off" use:enhance class="py-8">
	<div>

		<Input type="email" id="email_input" name="email" label="Your Email" value={form?.user?.email ?? ''} />
	</div>
	<div>
		<label for="password_input">Password</label>
		<Input type="password" id="password_input" name="password" />
	</div>
	<div>
		<label for="name_input">Name</label>
		<Input type="text" id="name_input" name="name" value={form?.user?.name ?? ''} />
	</div>
	<button
		class="font-poppins h-12 w-full rounded-xl bg-[#3d5cff] text-center text-white hover:cursor-pointer"
		>Register</button
	>
</form>

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

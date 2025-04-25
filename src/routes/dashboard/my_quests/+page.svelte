<script lang="ts">
	import Back from "$lib/components/Back.svelte";
	import "$lib/css/app.css";
	import "$lib/css/question.css";
	import type { PageData } from "./$types";
	import { enhance } from "$app/forms";

	export let form;
</script>

<div class="form-container">
	<form class="form" id="questForm" method="POST" use:enhance>
		<div class="form-group">
			<h2>Access A Quest</h2>
			<br />
			<p>
				By generating a Quest ID, you can share this ID with people who would like to access your quest! It will be generated right after you submit!
			</p>
			<br>
			<input class="qid_val" type="text" name="qid_val" required>
			<br />
		</div>
		<button class="form-submit-btn" type="submit">Access</button>
	</form>
</div>

{#if form?.quest_title}
	<div class="card">
		<h4 class="card-header">Quest Title: {form.quest_title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="small">ID: {form.qid_val}</span></h4>
		<p class="card-text">Type: {form.quest_type}</p>
        <p class="card-text margin-t">Created by: {form.name}<br>({form.email})</p>
	</div>
{:else if form?.error}
	<p class="error">{form.error}</p>
{/if}
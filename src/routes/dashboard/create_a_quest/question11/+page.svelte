<script lang="ts">
	import Back from "$lib/components/Back.svelte";
	import "$lib/css/app.css";
	import "$lib/css/question.css";
	import type { PageData } from "./$types";
	import { enhance } from "$app/forms";
	export let form: {
		message: string;
	};
	export let data: PageData;
</script>

<div class="form-container">
	<Back />
	<script>
		localStorage.setItem("condition", 11);
	</script>
	<form class="form" id="questForm" method="POST" use:enhance>
		<div class="form-group">
			<h2>Submit</h2>
			<br />
			<p>
				By generating a Quest ID, you can share this ID
				with people who would like to access your quest! It will be generated right fter you submit!
			</p>
			<br />
			<p>
				To do one last check before you submit, click the Back arrow
				and then press the "Preview" button.
			</p>
		</div>
		<input
			class="email_input"
			type="text"
			name="email"
			value={data.email}
		/>
		<button class="form-submit-btn" type="submit">Submit</button>
	</form>
</div>

<script lang="ts">
	import { onMount } from "svelte";
	import { enhance } from "$app/forms";
	import Logo from "$lib/images/LearnQuest_logo.png";
	import SpinnerOverlay from "$lib/components/SpinnerOverlay.svelte";
	import "$lib/css/quest_storage.css";
	export let form;
	// @ts-ignore
	// @ts-ignore
	export let data;

	let modalElement;
	// @ts-ignore
	let modalInstance;
	// @ts-ignore
	let secondModalElement;
	// @ts-ignore
    let secondModalInstance;
	let condition = "99";

	onMount(() => {
		condition = localStorage.getItem("condition") || "9";
		modalElement = document.getElementById("exampleModal");
		if (modalElement) {
			// @ts-ignore
			modalInstance = new bootstrap.Modal(modalElement, {
				backdrop: "static",
				keyboard: false
			});
		}

		secondModalElement = document.getElementById("secondModal");
	if (secondModalElement) {
		// @ts-ignore
		secondModalInstance = new bootstrap.Modal(secondModalElement, {
			backdrop: "static",
			keyboard: false
		});
	}
	});

	function cont() {
		let plus = Number(condition)+1;
		location.replace("/dashboard/create_a_quest/question" + plus)
	}

	function sub() {
		location.replace("/dashboard/create_a_quest/question11")
	}

	function showModal() {
		// @ts-ignore
		if (modalInstance) modalInstance.show();
	}

	function hideModal() {
		// @ts-ignore
		if (modalInstance) modalInstance.hide();
		location.reload();
	}

	function showSecondModal() {
	// Show second modal
	// @ts-ignore
	if (secondModalInstance) secondModalInstance.show();
}

function hideSecondModal() {
	// Hide second modal
	// @ts-ignore
	if (secondModalInstance) secondModalInstance.hide();
	location.reload();
}
</script>
<SpinnerOverlay/>
<svelte:head>
	<!-- Bootstrap 5 CSS -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
	/>

	<!-- Bootstrap 5 JS (Bundle includes Popper.js) -->
	<!-- Bootstrap 5 JS (Bundle includes Popper.js) -->
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
		defer
	></script>
</svelte:head>
<br><br>
<img src={Logo} alt="Logo"><br><br>
<div class="card w-100">
	<div class="card-body">
		<h6 class="card-title">
			You Have Officially Completed
			{#if condition == "0"}
				the Main Page!
			{:else if condition == "10"}
				10 Questions!
			{:else}
				Another Section!
			{/if}
		</h6>
		<p class="card-text">
			{#if condition == "10"}
				You've reached the max of 10 questions. Take a moment to
				review and submit your awesome quiz!
			{:else}
				You can move on to the next question, edit the other ones,
				preview your quest, or submit it with what you've got so far.
				Just a heads up, there’s a max of 10 questions that you can
				create. 😊
			{/if}
		</p>
	</div>
</div>
<br><br>
<form id="questForm" method="POST" use:enhance>
	<input
		name="email"
		value={data.email}
		class="form-control my-2"
		hidden
	/>
	<div class="pagination">
	<button type="button" class=" y"></button>
	<button type="submit" class="btn btn-primary" on:click={showModal}>
		Preview
	</button>
	<button type="button" class=" y"></button>
	<button type="submit" class="btn btn-secondary" on:click={showSecondModal}> Navigate Previous </button>
	<button type="button" class=" y"></button>
	<button type="button" class="btn btn-info" on:click={cont}>Next Question</button>
	<button type="button" class=" y"></button>
	
</div>
<br>
<button type="button" class="btn btn-success submit" on:click={sub}>Submit</button>
</form>

<!-- Modal -->
<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Preview</h5>
				<button
					type="button"
					class="btn-close"
					on:click={hideModal}
					aria-label="Close"
				/>
			</div>
			<div class="modal-body">
				{#if form?.quest_title}
					<strong>Quest Title: </strong><button class="x"
						>{form.quest_title}</button
					>
				{/if}
				<br><hr>
				{#if form?.quest_type}
					<strong>Quest Type: </strong><button class="x"
						>{form.quest_type}</button
					>
				{/if}
				<br />
				<hr />
				{#if form?.q1}
					<strong>Question 1: </strong><button class="x"
						>{form.q1}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q1_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q1_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q1_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q1_d}</button><br />
					Correct Answer: <button class="x">{form.ca_1}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q1_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q2}
					<strong>Question 2: </strong><button class="x"
						>{form.q2}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q2_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q2_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q2_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q2_d}</button><br />
					Correct Answer: <button class="x">{form.ca_2}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q2_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q3}
					<strong>Question 3: </strong><button class="x"
						>{form.q3}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q3_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q3_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q3_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q3_d}</button><br />
					Correct Answer: <button class="x">{form.ca_3}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q3_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q4}
					<strong>Question 4: </strong><button class="x"
						>{form.q4}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q4_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q4_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q4_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q4_d}</button><br />
					Correct Answer: <button class="x">{form.ca_4}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q4_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q5}
					<strong>Question 5: </strong><button class="x"
						>{form.q5}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q5_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q5_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q5_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q5_d}</button><br />
					Correct Answer: <button class="x">{form.ca_5}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q5_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q6}
					<strong>Question 6: </strong><button class="x"
						>{form.q6}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q6_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q6_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q6_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q6_d}</button><br />
					Correct Answer: <button class="x">{form.ca_6}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q6_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q7}
					<strong>Question 7: </strong><button class="x"
						>{form.q7}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q7_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q7_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q7_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q7_d}</button><br />
					Correct Answer: <button class="x">{form.ca_7}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q7_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q8}
					<strong>Question 8: </strong><button class="x"
						>{form.q8}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q8_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q8_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q8_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q8_d}</button><br />
					Correct Answer: <button class="x">{form.ca_8}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q8_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q9}
					<strong>Question 9: </strong><button class="x"
						>{form.q9}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q9_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q9_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q9_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q9_d}</button><br />
					Correct Answer: <button class="x">{form.ca_9}</button><br />
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q9_des}</button
					>
					<br />
					<hr />
				{/if}

				{#if form?.q10}
					<strong>Question 10: </strong><button class="x"
						>{form.q10}</button
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A)
					<button class="x">{form.q10_a}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B)
					<button class="x">{form.q10_b}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C)
					<button class="x">{form.q10_c}</button><br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D)
					<button class="x">{form.q10_d}</button><br />
					Correct Answer: <button class="x">{form.ca_10}</button><br
					/>
					Explanation:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<button class="x"
						>{form.q10_des}</button
					>
					<br />
				{/if}
			</div>
			<div class="modal-footer">
				<button
					type="button"
					class="btn btn-secondary"
					on:click={hideModal}
				>
					Close
				</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="secondModal" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Navigate Previous</h5>
				<button type="button" class="btn-close" on:click={hideSecondModal} aria-label="Close"></button>
			</div>
			<div class="modal-body">
				
	{#if form?.q1 && !form.q2}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Back to Main Page</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1">Question 1</a
				>
			</li>
		</ul>
	</nav>
{/if}
{#if form?.q2 && !form.q3}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;Question 1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question2"
					>&nbsp; Question 2&nbsp;</a
				>
			</li>
		</ul>
	</nav>
{/if}
{#if form?.q3 && !form.q4}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;Question 1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question2"
					>&nbsp;Question 2&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question3"
					>&nbsp; Question 3&nbsp;</a
				>
			</li>
		</ul>
	</nav>
{/if}

{#if form?.q4 && !form.q5}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question2"
					>&nbsp;2&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question3"
					>&nbsp;3&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question4"
					>&nbsp; Question 4&nbsp;</a
				>
			</li>
		</ul>
	</nav>
{/if}
{#if form?.q5 && !form.q6}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question2"
					>&nbsp;2&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question3"
					>&nbsp;3&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question4"
					>&nbsp;4&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question5"
					>&nbsp; Question 5&nbsp;</a
				>
			</li>
		</ul>
	</nav>
{/if}
{#if form?.q6 && !form.q7}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question2"
					>&nbsp;2&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question3"
					>&nbsp;3&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question4"
					>&nbsp;4&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question5"
					>&nbsp;5&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question6"
					>&nbsp; Question 6&nbsp;</a
				>
			</li>
		</ul>
	</nav>
{/if}
{#if form?.q7 && !form.q8}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question2"
					>&nbsp;2&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question3"
					>&nbsp;3&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question4"
					>&nbsp;4&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question5"
					>&nbsp;5&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question6"
					>&nbsp;6&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question7"
					>&nbsp;7&nbsp;</a
				>
			</li>
		</ul>
	</nav>
{/if}
{#if form?.q8 && !form.q9}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question2"
					>&nbsp;2&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question3"
					>&nbsp;3&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question4"
					>&nbsp;4&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question5"
					>&nbsp;5&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question6"
					>&nbsp;6&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question7"
					>&nbsp;7&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question8"
					>&nbsp;8&nbsp;</a
				>
			</li>
		</ul>
	</nav>
{/if}
{#if form?.q9 && !form.q10}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question2"
					>&nbsp;2&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question3"
					>&nbsp;3&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question4"
					>&nbsp;4&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question5"
					>&nbsp;5&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question6"
					>&nbsp;6&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question7"
					>&nbsp;7&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question8"
					>&nbsp;8&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question9"
					>&nbsp;9&nbsp;</a
				>
			</li>
		</ul>
	</nav>
{/if}
{#if form?.q10}
	<nav aria-label="...">
		<ul class="pagination pagination-sm">
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/main">Main</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question1"
					>&nbsp;1&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question2"
					>&nbsp;2&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question3"
					>&nbsp;3&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question4"
					>&nbsp;4&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question5"
					>&nbsp;5&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question6"
					>&nbsp;6&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question7"
					>&nbsp;7&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question8"
					>&nbsp;8&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link"
					href="/dashboard/create_a_quest/question9"
					>&nbsp;9&nbsp;</a
				>
			</li>
			<li class="page-item">
				<a
					class="page-link page-item active"
					href="/dashboard/create_a_quest/question10">10</a
				>
			</li>
		</ul>
	</nav>
{/if}
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" on:click={hideSecondModal}>Close</button>
			</div>
		</div>
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Varela+Round&display=swap");
	.x {
		border-radius: 5px;
		margin-top: 0px;
		padding: 4px;
		padding-top: 0px;
		padding-bottom: 0px;
		background-color: #0000ff4d;
		cursor: text !important;
	}

	.card-title {
		color: rgba(33, 37, 41, 0.75);
		padding: 1rem;
		padding-bottom: 0px;
		font-family: "Rubik";
	}

	.card-body {
		padding: 0 !important;
	}

	.card-text {
		border-top: 1px solid rgba(0, 0, 0, 0.176);
		background: rgba(13, 110, 253, 0.2);
		padding: 1rem;
		padding-top: 0px;
		color: black;
	}
</style>

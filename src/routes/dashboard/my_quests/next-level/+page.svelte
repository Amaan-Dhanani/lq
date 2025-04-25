<script>
	import "$lib/css/app.css";
	export let data;
	export let form;
	import Pass_Level from "$lib/images/Pass_Level.png";
</script>

<img src={Pass_Level} alt="Pass Level" width="100%" height="auto" />
<form id="quest-form" method="POST">
	<script>
		let question = Number(localStorage.getItem("question")) + 1;
		let question2 = String(question);
		localStorage.setItem("question", question2);
	</script>
	<div class="form-group">
		<input hidden type="text" id="email" name="email" value={data.email} required />
		<button class="btn center" type="submit">Continue!</button>
	</div>
</form>

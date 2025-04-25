<script>
	import "$lib/css/app.css";
	import Fail_Level from "$lib/images/Fail_Level.png";
</script>

<img src={Fail_Level} alt="Pass Level" width="100%" height="auto" />
<form id="quest-form" method="POST">
	<script>
		let question = Number(localStorage.getItem("question")) + 1;
		let question2 = String(question);
		localStorage.setItem("question", question2);
	</script>
	<div class="form-group">
		<button class="btn center" type="submit">Continue!</button>
	</div>
</form>

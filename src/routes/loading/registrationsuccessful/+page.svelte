<script lang="ts">
    import '$lib/css/app.css';
	import Spinner from "$lib/components/Spinner.svelte";
    setTimeout(() => {
      window.location.href = '/login';  // Redirect to the desired URL
    }, 1000);  // 1000 milliseconds = 1 second
</script>
<div>
<Spinner/>
<h3>Registration successful!<br>Redirecting to login page...</h3>
</div>
<style>
    h3 {
        font-weight: normal;
        font-family: 'Varela Round';
        text-align: center;
    }

    div {
        height: 100%;
        transform: translate(0%, 50%);
    }
</style>

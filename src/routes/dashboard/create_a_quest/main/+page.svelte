<script lang="ts">
  import '$lib/css/app.css';
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import type { ActionData, PageData } from "./$types";

  import "$lib/css/create_a_quest.css";
  export let data: PageData;
  let counter = writable(1);
  let countValue = 1; // Keep a separate variable for immediate updates
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</svelte:head>

<br>
<style>
  .textin {
    border: 2px solid purple;
  }
</style>

<form id="questForm" method="POST">
  <script>
    localStorage.setItem("condition", 0);
  </script>
 <h2>Type of Quest</h2>
  <p>
    By selecting a type of quest, you can choose the type of quest you would like to create!
  <div class="radio-input">
    <label class="label">
      <input type="radio" name="quest_type" value="IceQuest Platformer" required />
      <p class="text">IceQuest Platformer</p>
    </label>
    <label class="label">
      <input type="radio" name="quest_type" value="Regular Quiz" required />
      <p class="text">Regular Quiz</p>
    </label>
  </div>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class="label">Quest Title</label>
  <input class="textin" name="quest_title" id="quest_title" type="text" placeholder="" required />
  <p class="text">By creating a title, you can give your quest a name!</p>
  <p class="text">This will be the name of your quest.</p>

  <br>
  <textarea id="name" name="name" required>{data?.name || ''}</textarea>
  <textarea id="email" name="email" required>{data?.email || ''}</textarea>

  <br>

  <br>
  <button type="submit" class="button x">
    Next Page
  </button>
</form>
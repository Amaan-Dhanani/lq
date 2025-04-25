<script lang="ts">
  import '$lib/css/app.css';
  import "$lib/css/question.css";
  import type { ActionData, PageData } from "./$types";
  import Back from "$lib/components/Back.svelte";
  export let data: PageData;

  let correctAnswer = ""; // To store the selected correct answer
  let charCount = 0; // To track the character count for the Explanation

  // Handlers for selecting the correct answer
  const selectAnswer = (answer: string) => {
    correctAnswer = answer;
  };

  // Handler for updating character count
  const updateCharCount = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    charCount = target.value.length;
  };

</script>
<div class="form-container">
  <script>
    localStorage.setItem("condition", 1);
  </script>
  <form class="form" id="questForm" method="POST">
    <div class="form-group">
      <Back></Back>
      <h2>Edit Question 1</h2>
      <br>
      <label for="q1">Question</label>
      <input type="text" id="q1" name="q1" required>
    </div>
    <div class="form-group">
      <label for="q1_a">Answer Choice A</label>
      <input type="text" id="q1_a" name="q1_a" required>
    </div>
    <div class="form-group">
      <label for="q1_b">Answer Choice B</label>
      <input type="text" id="q1_b" name="q1_b" required>
    </div>
    <div class="form-group">
      <label for="q1_c">Answer Choice C (optional)</label>
      <input type="text" id="q1_c" name="q1_c">
    </div>
    <div class="form-group">
      <label for="q1_d">Answer Choice D (optional)</label>
      <input type="text" id="q1_d" name="q1_d">
    </div>
    <div class="form-group">
      <label for="q1_des">Explanation</label>
      <textarea
        id="q1_des"
        name="q1_des"
        required
        maxlength="270"
        rows="5"
        cols="50"
        placeholder=""
        on:input={updateCharCount}
      ></textarea>
      <p id="charCount">{charCount} / 270</p>
      <br>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>Select Correct Answer</label>
      <div class="radio-inputs">
        <label class="radio">
          <input type="radio" name="ca_1" value="A" required>
          <span class="name">A</span>
        </label>
        <label class="radio">
          <input type="radio" name="ca_1" value="B" required>
          <span class="name">B</span>
        </label>
            
        <label class="radio">
          <input type="radio" name="ca_1" value="C" required>
          <span class="name">C</span>
        </label>
        <label class="radio">
          <input type="radio" name="ca_1" value="D" required>
          <span class="name">D</span>
        </label>
      </div>
      <input class="email_input" type="text" name="email" value={data.email}>
      <div class="flex">
    <button class="form-submit-btn" type="submit">Save Changes</button>
  </div>
  </form>
</div>

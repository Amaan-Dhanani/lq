<script lang="ts">
  import Back from '$lib/components/Back.svelte';
    import '$lib/css/app.css';
    import "$lib/css/question.css";
    import type { ActionData, PageData } from "./$types";
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
    <Back></Back>
    <script>
      localStorage.setItem("condition", 9);
    </script>
    <form class="form" id="questForm" method="POST">
      <div class="form-group">
        <h2>Edit Question 9</h2>
        <br>
        <label for="q9">Question</label>
        <input type="text" id="q9" name="q9" required>
      </div>
      <div class="form-group">
        <label for="q9_a">Answer Choice A</label>
        <input type="text" id="q9_a" name="q9_a" required>
      </div>
      <div class="form-group">
        <label for="q9_b">Answer Choice B</label>
        <input type="text" id="q9_b" name="q9_b" required>
      </div>
      <div class="form-group">
        <label for="q9_c">Answer Choice C (optional)</label>
        <input type="text" id="q9_c" name="q9_c">
      </div>
      <div class="form-group">
        <label for="q9_d">Answer Choice D (optional)</label>
        <input type="text" id="q9_d" name="q9_d">
      </div>
      <div class="form-group">
        <label for="q9_des">Explanation</label>
        <textarea
          id="q9_des"
          name="q9_des"
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
            <input type="radio" name="ca_9" value="A" required>
            <span class="name">A</span>
          </label>
          <label class="radio">
            <input type="radio" name="ca_9" value="B" required>
            <span class="name">B</span>
          </label>
              
          <label class="radio">
            <input type="radio" name="ca_9" value="C" required>
            <span class="name">C</span>
          </label>
          <label class="radio">
            <input type="radio" name="ca_9" value="D" required>
            <span class="name">D</span>
          </label>
        </div>
        <input class="email_input" type="text" name="email" value={data.email}>
      <button class="form-submit-btn" type="submit">Save Changes</button>
    </form>
  </div>
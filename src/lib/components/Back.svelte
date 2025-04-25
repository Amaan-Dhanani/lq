<script>
import Back from "$lib/images/Back.png";
function y() {
    let condition = localStorage.getItem("condition");
    
    // Convert condition to a number
    let condition2 = Number(condition);
    
    // Subtract 1 from condition
    condition2 = condition2 - 1;

    // Convert condition2 to a string and store it
    let condition3 = String(condition2);
    
    // Set the new condition value in localStorage
    localStorage.setItem("condition", condition3);
    
    // Redirect to the specified URL
location.replace("/dashboard/create_a_quest/quest_storage");
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
 <span>
<img width="50" src={Back} alt="Go Back" on:click={y}><br>
</span>
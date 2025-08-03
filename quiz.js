function checkAnswer() {
  // Step 1: Define the correct answer
  const correctAnswer = "4";

  // Step 2: Get the user's selected answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Step 3: Check if the user selected an answer
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  // Step 4: Compare user's answer to the correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Step 5: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

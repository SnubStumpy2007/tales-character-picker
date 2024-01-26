let choiceInput = document.getElementById("choice");
let btn = document.getElementById("btn");
let resultDiv = document.querySelector(".text");

// Add an event listener for the "input" event on the text input
choiceInput.addEventListener("input", function () {
  // You can optionally add validation or processing logic here
  // For example, convert the input to lowercase to make the switch case insensitive
  let inputValue = choiceInput.value.toLowerCase();
  
  // Display the current input value in the resultDiv
  resultDiv.textContent = `Current Input: ${inputValue}`;
});

// Add an event listener for the button click
btn.addEventListener("click", function () {
  // Read the value of the input and use it in the switch statement
  let inputValue = choiceInput.value.toLowerCase();

  switch (inputValue) {
    case "judemathis":
      console.log("Jude Mathis");
      break;
    case "learolando":
      console.log("Leia Rolando");
      break;
    case "elizelutus":
      console.log("Elize Lutus");
      break;
    case "alvin":
      console.log("Alvin");
      break;
    case "rowenilbert":
      console.log("Rowen Ilbert");
      break;
    case "millamaxwell":
      console.log("Milla Maxwell");
      break;
    default:
      console.log("invalid choice");
  }
});

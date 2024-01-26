
document.getElementById("btn").addEventListener("click", function() {
    let choice = document.getElementsByClassName("choice")
    switch (choice) {
        case "Jude Mathis":
          console.log("Jude Mathis");
          break;
        case "Leia Rolando":
          console.log("Leia Rolando");
          break;
        case "Elize Lutus":
          console.log("Elize Lutus");
          break;
        case "Alvin":
          console.log("Alvin");
          break;
        case "Rowen Ilbert":
          console.log("Rowen Ilbert");
          break;
        case "Milla Maxwell":
          console.log("Milla Maxwell");
          break;
        default:
          console.log("invalid choice");
      }
      
  });

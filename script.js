document.addEventListener("DOMContentLoaded", function() {
    const computerChooseElement = document.getElementById("computerChoose");
    const userInputElement = document.getElementById("userInput");
    const playButton = document.getElementById("playButton");
    const computerNumberElement = document.getElementById("computerNumber");
    const totalElement = document.getElementById("total");
    const resultElement = document.getElementById("result");
  
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const option = ["even", "odd"];
  
    playButton.addEventListener("click", function() {
      const computerChoosed = option[Math.floor(Math.random() * option.length)];
      computerChooseElement.textContent = `Computer choose: ${computerChoosed}`;
  
      const userValue = parseInt(userInputElement.value);
      const computerValue = number[Math.floor(Math.random() * number.length)];
      computerNumberElement.textContent = `Computer number: ${computerValue}`;
  
      const total = userValue + computerValue;
      totalElement.textContent = `Total: ${total}`;
  
      const final = total % 2 === 0 ? "even" : "odd";
      resultElement.textContent = final;
  
      if (final === computerChoosed) {
        resultElement.textContent += " - Computer wins";
      } else {
        resultElement.textContent += " - User wins";
      }
    });
  });
  
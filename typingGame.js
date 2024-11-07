export async function startTypingGame() {
    const words = ["javascript", "vefforritun", "api", "vite", "haskoli","fotbolti","ronaldo"];
    let score = 0;
  
    const targetWordElement = document.getElementById("target-word");
    const inputElement = document.getElementById("input");
    const feedbackElement = document.getElementById("feedback");
    const scoreElement = document.getElementById("score");
    const resetButton = document.getElementById("reset");

  
    let keyboardLayoutMap;
  
    if (navigator.keyboard) {
      try {
        keyboardLayoutMap = await navigator.keyboard.getLayoutMap();
        console.log("Keyboard Layout Map retrieved.");
      } catch (error) {
        console.error("Failed to get keyboard layout map:", error);
      }
    } else {
      console.warn("Keyboard API not supported in this browser.");
    }
  
    function setNewWord() {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      targetWordElement.textContent = randomWord;
      inputElement.value = "";
      inputElement.focus();
    }
  
    function checkInput() {
      if (inputElement.value === targetWordElement.textContent) {
        feedbackElement.textContent = "Rétt!";
        score += 1;
        scoreElement.textContent = score;
        setNewWord();
      } else {
        feedbackElement.textContent = "Haltu áfram!";
      }
    }
  
    inputElement.addEventListener("input", (event) => {
      if (keyboardLayoutMap) {
        const character = keyboardLayoutMap.get(event.inputType);
        console.log(`Búinn að skrifa: ${character}`);
      }
      checkInput();
    });
  
    if (navigator.keyboard && navigator.keyboard.lock) {
      try {
        await navigator.keyboard.lock(["Tab", "Escape"]);
        console.log("Tab and Escape keys locked to prevent browser interaction.");
      } catch (error) {
        console.error("Failed to lock keys:", error);
      }
    }

    resetButton.addEventListener("click", () => {
        score = 0;
        scoreElement.textContent = score;
        feedbackElement.textContent = "";
        setNewWord();
    });
  
    setNewWord();
  }
  
  
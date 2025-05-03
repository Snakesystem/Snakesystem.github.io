<script>
    import { onMount } from "svelte";
  
    export let words = []; // Array of words for typing effect
    let currentText = "";
    let wordIndex = 0;
    let typingSpeed = 100;
    let erasingSpeed = 75;
    let newWordDelay = 1000;
  
    // Fungsi untuk mengetik
    const type = () => {
      let currentWord = words[wordIndex];
      let currentLetterIndex = 0;
      currentText = "";
      const typingInterval = setInterval(() => {
        currentText += currentWord[currentLetterIndex];
        currentLetterIndex++;
  
        if (currentLetterIndex === currentWord.length) {
          clearInterval(typingInterval);
          setTimeout(erase, newWordDelay);
        }
      }, typingSpeed);
    };
  
    // Fungsi untuk menghapus teks
    const erase = () => {
      const erasingInterval = setInterval(() => {
        currentText = currentText.slice(0, -1);
  
        if (currentText.length === 0) {
          clearInterval(erasingInterval);
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, newWordDelay);
        }
      }, erasingSpeed);
    };
  
    onMount(() => {
      type();
    });
  </script>
  
  <span class="typed">{currentText}</span>
  
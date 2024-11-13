function copyToClipboard() {
  const resultText = document.querySelector(".lorem-text");
  
  // Ensure we get the text content from the result element
  if (resultText && resultText.innerText.trim() !== "") {
    // Copy the text from the element
    navigator.clipboard.writeText(resultText.innerText)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch(err => {
        console.error('Error copying text: ', err);
      });
  } else {
    alert("No text to copy!");
  }
}

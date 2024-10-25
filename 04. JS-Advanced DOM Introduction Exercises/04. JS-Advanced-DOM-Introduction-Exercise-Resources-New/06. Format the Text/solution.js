function solve() {
  let textAreaElement = document.getElementById('input');
  let outputElement = document.getElementById('output');
  let sentences = textAreaElement.value.split('.').filter(Boolean);
  outputElement.innerHTML = "";
  
    for (let i = 0; i < sentences.length; i+=3) {
      let paragraphText = sentences.slice(i, i + 3).join('.') + '.';
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = paragraphText;

      outputElement.appendChild(paragraphElement);
    }

  textAreaElement.value = '';
  
}
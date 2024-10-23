function solve() {

  let textElement = document.getElementById('text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  let convertedText = '';

  let splitedText = textElement.split(' ');

  if(conventionElement == "Camel Case"){

    for (let i = 0; i < splitedText.length; i++) {

    if(i == 0){
      convertedText = splitedText[i].toLowerCase();
    }else{
      convertedText += (splitedText[i].charAt(0).toUpperCase() + splitedText[i].slice(1).toLowerCase());
    }

    }
  }else if(conventionElement == "Pascal Case"){
    for (let i = 0; i < splitedText.length; i++) {
      convertedText += (splitedText[i].charAt(0).toUpperCase() + splitedText[i].slice(1).toLowerCase());
    }
   
  }else{
    convertedText = 'Error!';
  }

  resultElement.textContent = convertedText;
}
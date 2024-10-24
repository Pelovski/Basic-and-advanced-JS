// An HTML file is given and your task is to show more/less information. By clicking the [More] button, 
// it should reveal the content of a hidden div and changes the text of the button to [Less].
// When the same link is clicked again (now reading Less), hide the div and change the text of the link to More. 
// Link action should be toggleable (you should be able to click the button an infinite amount of times).


function toggle() {
  let buttonElement = document.querySelector('#accordion span');
  let extraText = document.getElementById('extra');
  let currentState = window.getComputedStyle(extraText).display;
 
  if(currentState == 'none'){
    extraText.style.display = 'inline';
    buttonElement.textContent = 'LESS';
  }else{
    extraText.style.display = 'none';
    buttonElement.textContent = 'MORE';
  }
  
}   
// Write a JS function that receives a string message and displays it inside a div with id "notification. 
// The div starts hidden and when the function is called, reveal it. 
// After the user clicks on it, hide the div. In the example document, a notification is shown when you click on the button 
// ["Get notified"].

function notify(message) {
  let notification = document.getElementById('notification');

  notification.textContent = message;
  notification.style.display = 'inline';

  notification.addEventListener('click', () => {
    notification.textContent = '';
    notification.style.display = 'none';
  });
}
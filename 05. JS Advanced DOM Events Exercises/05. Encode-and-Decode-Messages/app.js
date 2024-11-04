// This program should contain two functionalities.
// The first one is to encode the given message and send it to the receiver. 
// The second one is to decode the received message and read it (display it).
// When the [Encode and send it] button is clicked, you should get the given message from the first textarea. 
// When you get the current message, you should encode it as follows:
// •	Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER,
// that represents the current character in that message
// •	Clear the sender textarea and add the encoded message to the receiver textarea

// After that, when the [Decode and read it] button is clicked. 
// You need to get the encoded message from the receiver textarea and do the opposite logic from encoding:
// •	Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
// •	Replace the encoded message with the already decoded message in the receiver textarea, to make it readable




function encodeAndDecodeMessages() {
   let messageElement = document.querySelectorAll('div textarea')[0];
   let lastRecevedMessageElement = document.querySelectorAll('div textarea')[1];
   let messageBtn = messageElement.parentElement.querySelector('button');
   let lastRecevedMessageBtn = lastRecevedMessageElement.parentElement.querySelector('button');

   messageBtn.addEventListener('click', () => {
    lastRecevedMessageElement.value = encodeMessage(messageElement.value);
    messageElement = '';

   });

   lastRecevedMessageBtn.addEventListener('click', () =>{
    lastRecevedMessageElement.value = decodeMessage(lastRecevedMessageElement.value);

   });

   function encodeMessage(message) {
    let encodedMessage = '';
    for (const char of message) {
        encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
    }
    return encodedMessage;
}

function decodeMessage(message) {
    let decodedMessage = '';
    for (const char of message) {
        decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
    }
    return decodedMessage;
}
   
}

//The password for my bank account is 123pass321
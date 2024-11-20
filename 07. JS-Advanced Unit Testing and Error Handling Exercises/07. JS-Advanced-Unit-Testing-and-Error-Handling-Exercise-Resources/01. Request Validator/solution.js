// Write a function that validates an HTTP request object. 
//The object has the properties method, uri, version, and message.
// Your function will receive the object as a parameter and has to verify that each property meets the following requirements:


// •	method - can be GET, POST, DELETE or CONNECT
// •	uri - must be a valid resource address or an asterisk (*); 
//      a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string
// •	version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
// •	message - may contain any number of non-special characters (special characters are <, >, \, &, ', ")
// If a request is valid, return it unchanged. 
// If any part fails the check, throw an Error with the message "Invalid request header: Invalid {Method/URI/Version/Message}". 
// Replace the part in curly braces with the relevant word. Note that some of the properties may be missing, in which case the request is invalid. Check the properties in the order in which they are listed above. If more than one property is invalid, throw an error for the first encountered.
// Input / Output
// Your function will receive an object as a parameter. Return the same object or throw an Error as described above as an output.


function solution (input){
    let keysToCheck = ['method', 'uri', 'version', 'message'];
    let nonExistentKey = keysToCheck.filter(key => !(key in input))[0];

    if(nonExistentKey != undefined){
        throw Error(`Invalid request header: Invalid ${nonExistentKey.charAt(0).toUpperCase() + nonExistentKey.slice(1)}`);
    }

    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if (!validMethods.includes(input.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    const uriRegex = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9\.]*[a-zA-Z0-9])?|\*)$/;

    if (!uriRegex.test(input.uri)) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validVersions.includes(input.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    const messageRegex = /^[^<>&'"\\]*$/;

    if (!messageRegex.test(input.message)) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return input;
}

let input = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  };
  


 console.log(solution(input));



  
// You are provided a skeleton containing the necessary files for your program.
// The validations should be as follows:
// • The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
// • The password and confirm-password must be between 5 and 15 inclusively symbols and only word characters are allowed 
// (letters, numbers, and _).
// • The inputs of the password and confirm-password field must match.
// • The email field must contain the “@” symbol and at least one "."(dot) after it.
// If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible and the Company Number field must also be validated, if it isn’t checked the Company fieldset should have the style "display: none;" and the value of the Company Number field shouldn’t matter. 
// •	The Company Number field must be a number between 	 and 9999.
// •	Use addEventListener() function to attach an event listener for the "change" event to the checkbox.
// Every field with an incorrect value when the [Submit] button is pressed should have the following style applied border-color: red;, alternatively, if it’s correct it should have style border: none;. If there are required fields with an incorrect value when the [Submit] button is pressed, the div with id="valid" should become hidden ("display: none;"), alternatively if all fields are correct the div should become visible.



function validate() {
    let usernameInputElement = document.getElementById('username');
    let emailInputElement = document.getElementById('email');
    let passwordInputElement = document.getElementById('password');
    let confirmPasswordInputElement = document.getElementById('confirm-password');
    let companyElement  = document.getElementById('company');
    let companyInfoElement = document.getElementById('companyInfo');
    let submitBtn = document.getElementById('submit');
    let validElement = document.getElementById('valid');
    let companyNumber =  document.getElementById('companyNumber');

    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const passwordRegex = /^\w{5,15}$/;
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    
    companyElement.addEventListener('change', () => {
        if(companyElement.checked == true){
            companyInfoElement.style.display = 'block';

            companyNumber.addEventListener('change', () => {
                if(Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999 ){
                    companyNumber.style.borderColor = 'red'
                }else{
                    companyNumber.style.borderColor = 'transparent'; 
                }
            });
        }else{
            companyInfoElement.style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', (e) => {

        e.preventDefault();

        let validator = true;

  usernameRegex.test(usernameInputElement.value) == false ? usernameInputElement.style.borderColor = 'red' : usernameInputElement.style.borderColor = 'transparent';

        if(!passwordRegex.test(passwordInputElement.value) || passwordInputElement.value == ''){
         passwordInputElement.style.borderColor = 'red';
         validator = false;
        }else{
         passwordInputElement.style.borderColor = 'transparent'; 
          }

          if(!passwordRegex.test(confirmPasswordInputElement.value) || confirmPasswordInputElement.value == ''){
              confirmPasswordInputElement.style.borderColor = 'red';
              validator = false;
         }else{
          confirmPasswordInputElement.style.borderColor = 'transparent'; 
         }

        if(passwordInputElement.value != confirmPasswordInputElement.value){
            validator = false;
        }

        if(!emailRegex.test(emailInputElement.value) || emailInputElement.value == ''){
            emailInputElement.style.borderColor = 'red';
            validator = false;
        
        }else{
            emailInputElement.style.borderColor = 'transparent'; 
        }

        validElement.style.display = validator ? 'block' : 'none';


    });

}

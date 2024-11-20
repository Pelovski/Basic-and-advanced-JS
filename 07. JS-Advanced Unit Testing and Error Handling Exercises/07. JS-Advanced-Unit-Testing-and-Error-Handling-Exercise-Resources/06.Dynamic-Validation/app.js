function validate() {
    let emailInput = document.getElementById('email');

    emailInput.addEventListener('change', () =>{
        const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if(!emailRegex.test(emailInput.value)){
            emailInput.classList.add('error');
        }else{
            emailInput.classList.remove('error');
        }
    });
}
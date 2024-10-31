function validate() {
    const emailInput = document.getElementById('email');
    
    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    emailInput.addEventListener('change', function () {

        emailInput.classList.remove('error');

        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('error');
        }
    });
}
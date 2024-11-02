function lockedProfile() {
    let profileBtn = document.querySelectorAll('.profile button');

    profileBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            let divElement = btn.parentElement.querySelector('div');
            let ratioElement = btn.parentElement.querySelectorAll('input')[0];

            if(!ratioElement.checked){

          
            if(btn.textContent == 'Show more'){
               divElement.style.display = 'inline';
               btn.textContent = 'Hide it'
            }else{
                btn.textContent = 'Show more';
                divElement.style.display = 'none';
            }
        }
        });
    });
    
}
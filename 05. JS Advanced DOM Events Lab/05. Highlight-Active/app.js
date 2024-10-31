function focused() {
    let sectionElements = document.querySelectorAll('div input');

    sectionElements.forEach(element => {
        element.addEventListener('click', (event) => {
            let currentFocusedElement = document.getElementsByClassName('focused');
            if(currentFocusedElement.length > 0){
                currentFocusedElement[0].classList.remove('focused');
            }
            event.target.parentElement.classList.add('focused');
        });
    });
    
}
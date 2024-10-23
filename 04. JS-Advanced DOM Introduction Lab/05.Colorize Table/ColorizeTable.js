function colorize() {
    let elements = document.querySelectorAll('table tr');

    for (let index = 1; index <= elements.length -1; index+=2) {
      
        elements[index].style.color = 'Teal';
      
    }

}
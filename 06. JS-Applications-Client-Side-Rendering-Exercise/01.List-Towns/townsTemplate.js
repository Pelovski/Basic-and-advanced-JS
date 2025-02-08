export function template(towns, rootElement) {
    let ulElement = document.createElement('ul');

    towns.forEach(element => {
        let liElement = document.createElement('li');

        liElement.textContent = element;

        ulElement.appendChild(liElement);
    });

    rootElement.appendChild(ulElement);
}
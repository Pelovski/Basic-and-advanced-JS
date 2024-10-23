function extractText() {
    let result  = document.getElementById('result');
    const items = document.querySelectorAll('#items li');

    for (const item of items) {
        result.textContent += item.textContent + '\n';
    }
    
}
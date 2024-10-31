function attachGradientEvents() {
   let gradientBoxElement = document.getElementById('gradient-box');
   let resultElement = document.getElementById('result');

   gradientBoxElement.addEventListener('mousemove', (event) => {
    let rect = gradientBoxElement.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let width = rect.width;

    let percentage = Math.round((mouseX / width) * 100);

    percentage = Math.max(0,Math.min(100, percentage));

    resultElement.textContent = `${percentage}%`;
   });
}
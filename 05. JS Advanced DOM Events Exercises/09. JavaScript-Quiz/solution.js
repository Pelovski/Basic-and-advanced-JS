function solve() {
  const sections = document.querySelectorAll('#quizzie section');
  const results = document.getElementById('results');
  const resultMessage = results.querySelector('h1');

  // Array of correct answers in the order of questions
  const correctAnswers = [
      'onclick',
      'JSON.stringify()',
      'A programming API for HTML and XML documents'
  ];
  
  let currentQuestion = 0;
  let rightAnswers = 0;

  // Add event listeners to each answer option
  sections.forEach((section, index) => {
      const answers = section.querySelectorAll('.quiz-answer');
      
      answers.forEach(answer => {
          answer.addEventListener('click', () => {
              const selectedAnswer = answer.textContent.trim();
              
              // Check if selected answer is correct
              if (selectedAnswer === correctAnswers[index]) {
                  rightAnswers++;
              }
              
              // Hide the current section
              section.style.display = 'none';
              
              // Show the next section if it exists
              currentQuestion++;
              if (currentQuestion < sections.length) {
                  sections[currentQuestion].style.display = 'block';
              } else {
                  // If all questions are answered, display the results
                  results.style.display = 'block';
                  if (rightAnswers === correctAnswers.length) {
                      resultMessage.textContent = "You are recognized as top JavaScript fan!";
                  } else {
                      resultMessage.textContent = `You have ${rightAnswers} right answers`;
                  }
              }
          });
      });
  });

  // Initially, show only the first question
  sections[0].style.display = 'block';
}

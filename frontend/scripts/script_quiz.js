document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answers = {
        question1: 'c',
        question2: 'b',
        question3: 'a',
        question4: 'a',
        question5: 'c',
        question6: 'c',
        question7: 'b',
        question8: 'b',
        question9: 'c',
        question10: 'b'
    };

    let score = 0;
    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Você acertou ${score} de 10 perguntas.`;
});

function logout() {
    localStorage.removeItem('user');
    //alert('Você saiu com sucesso.');
    window.location.href = 'index.html';
}
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('user-name').textContent = `Bem-vindo, ${user.name}`;
        
        if (!document.querySelector('.cabecalho__menu__link[href="quiz.html"]')) {
            const nav = document.querySelector('.cabecalho__menu');
            const quizLink = document.createElement('a');
            quizLink.className = 'cabecalho__menu__link';
            quizLink.href = 'quiz.html';
            quizLink.textContent = 'QUIZ';
            nav.appendChild(quizLink);
        }

    } else {
        window.location.href = 'index.html'; // Redireciona para a página inicial se não estiver logado
    }
});

function logout() {
    localStorage.removeItem('user');
    //alert('Você saiu com sucesso.');
    window.location.href = 'index.html'; // Redireciona para a página inicial após logout
}
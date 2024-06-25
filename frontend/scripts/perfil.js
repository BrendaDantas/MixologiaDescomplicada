document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('user-name').textContent = `Bem-vindo, ${user.name}`;
    } else {
        window.location.href = 'index.html'; // Redireciona para a página inicial se não estiver logado
    }
});

function logout() {
    localStorage.removeItem('user');
    //alert('Você saiu com sucesso.');
    window.location.href = 'index.html'; // Redireciona para a página inicial após logout
}
const backendUrl = 'http://localhost:3000';

// Função para abrir o modal de registro a partir do modal de login
function openRegisterModal() {
    closeModal('modal-login');
    openModal('modal-register');
}

// Função para abrir o modal de login a partir do modal de registro
function openLoginModal() {
    closeModal('modal-register');
    openModal('modal-login');
}

// Funções para abrir e fechar os modais
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Adiciona evento de clique ao ícone do usuário
document.querySelector('.cabecalho__menu__link__icone').addEventListener('click', (event) => {
    event.preventDefault();
    openModal('modal-login');
});

// Enviar dados de registro ao servidor
document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        name: event.target.name.value,
        cpf: event.target.cpf.value,
        age: event.target.age.value,
        email: event.target.email.value,
        password: event.target.password.value
    };

    try {
        const response = await fetch(`${backendUrl}/api/users/register`, {  // Certifique-se de usar o backendUrl aqui
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
            alert('Registro bem-sucedido!');
            closeModal('modal-register');
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Erro ao registrar:', error);
        alert('Erro ao registrar. Tente novamente mais tarde.');
    }
});

// Enviar dados de login ao servidor
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        email: event.target.email.value,
        password: event.target.password.value
    };

    try {
        const response = await fetch(`${backendUrl}/api/users/login`, {  // Certifique-se de usar o backendUrl aqui
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
            alert('Login bem-sucedido!');
            localStorage.setItem('user', JSON.stringify({ id: result.userId, name: result.name }));
            window.location.href = 'perfil.html';
            /*closeModal('modal-login');
            showUserProfile(result.name);*/
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
});

/*function showUserProfile(userName) {
    document.getElementById('user-profile').style.display = 'block';
    document.getElementById('user-name').textContent = `Bem-vindo, ${userName}`;
}*/

function logout() {
    localStorage.removeItem('user');
    /*document.getElementById('user-profile').style.display = 'none';*/
    alert('Você saiu com sucesso.');
    window.location.href = 'index.html';
}

/*document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        //showUserProfile(user.name);
        document.getElementById('user-name').textContent = `Bem-vindo, ${user.name}`;
    } else {
        window.location.href = 'index.html';
    }
});*/

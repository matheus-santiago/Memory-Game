const player = localStorage.getItem('player');
const message = document.querySelector('.message_end');

message.innerHTML = `Parabéns, ${player}, você ganhou!`

const form = document.querySelector('.login_form');

const handleSubmit = (event) => {
    event.preventDefault(); // Serve para a página não atualizar quando clicar no envio do formulário
    window.location = '../index.html'; // Ajuste o caminho para index.html
};

form.addEventListener('submit', handleSubmit);
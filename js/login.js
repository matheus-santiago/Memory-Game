
//Buscando o input e botão de login
const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');

//Busca o formulario
const form = document.querySelector('.login_form');


//Função para validar se o input é maior que 3 digitos e ativar o botão 
const validateInput = ({ target }) => {
    if (target.value.length > 2){
        button.removeAttribute('disabled')
        return;
    }
    button.setAttribute('disabled', '')
}
//Caso tiver algum input sendo inserido, chama a função para validar a quantidade de digitos
input.addEventListener('input', validateInput);

//Enviar dados
const handleSubmit = (event) => {
    event.preventDefault(); //Serve para a pagina nao atualizar quando clicar no envio do formluario
    
    //Salva o input no localstorage
    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'
}

// Quando for clicado no botão, chama a função HandleSubmit
form.addEventListener('submit', handleSubmit);


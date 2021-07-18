const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let converteData = JSON.stringify(data);

    localStorage.setItem('lead', converteData)
    let content = document.getElementById('content');
    let carregado = `<p>Seu cadastro foi realizado com sucesso, enviaremos a data do Black Friday e novas promoções por email...</p>`;
    content.innerHTML = carregado
})
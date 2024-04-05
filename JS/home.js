let crud = document.querySelector('#crud');
let jogo = document.querySelector('#jogo');

jogo.addEventListener("click", () => {
    window.open('./game/login.html', '_self');

});

crud.addEventListener("click", () => {
    window.open('controle-produtos.html', '_self');

});
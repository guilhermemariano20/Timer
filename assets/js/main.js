function getTimeFromSeconds (seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciarRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(event){ // capitura o evento de clicar no botão
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
  });
pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
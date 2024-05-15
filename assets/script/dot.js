const dot2 = document.querySelector('.a');
const dot1 = document.querySelector('.b');

function contador() {
    var segundos = 0;
    setInterval(function () {
        segundos++;
        dot(segundos); // Chama a função dot() a cada segundo
    }, 1000);
}

function dot(segundos) {
    if (segundos % 2 === 0) {
        dot1.id = 'disable'; // Se segundos é par, desativa dot1
        dot2.id = 'disable'; // Se segundos é par, ativa dot2
    } else {
        dot1.id = 'enable'; // Se segundos é ímpar, ativa dot1
        dot2.id = 'enable'; // Se segundos é ímpar, desativa dot2
    }
}

contador();





const clientSpan = document.querySelector('.client-span');
const nameSpan = document.querySelector('.span-name');

const namesFemale = [
    "Maria",
    "Ana",
    "Francisca",
    "Antonia",
    "Adriana",
    "Juliana",
    "Mariana",
    "Silvia",
    "Fernanda",
    "Gabriela",
    "Patricia",
    "Isabela",
    "Leticia",
    "Luciana",
    "Camila",
    "Aline",
    "Carla",
    "Regina",
    "Raquel",
    "Renata",
    "Viviane",
    "Valeria",
    "Cristina",
    "Sandra",
    "Bianca",
    "Vanessa",
    "Daniela",
    "Carolina",
    "Monica",
    "Tatiana"
];

// Função para gerar um número aleatório entre min e max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para embaralhar o array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Embaralha o array de nomes femininos
shuffleArray(namesFemale);

let index = 0;

function clientSpanShow() {
    setTimeout(function () {
        // Oculta o span
        clientSpan.classList.add('hidden');

        // Define um timeout para trocar o nome e mostrar o span novamente
        setTimeout(function () {
            nameSpan.textContent = namesFemale[index];
            clientSpan.classList.remove('hidden');
            index = (index + 1) % namesFemale.length;
            clientSpanShow(); // Chama recursivamente para continuar mostrando nomes aleatórios
        }, getRandomInt(3000, 20000)); // Tempo aleatório entre 1 e 5 segundos
    }, 3000); // Muda após 1 segundo para criar o efeito de "sumir antes de mudar"
}

clientSpanShow();

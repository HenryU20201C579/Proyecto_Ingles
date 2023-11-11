const sentences = [
    "text - texto",
    "play soccer - jugar futbol",
    "eat - comer",
    "read - leer",
    "outside - afuera",
    "gym - gimnasio",
    "classroom - clase",
    "cafeteria - cafeteria",
    "exercising - ejercitandose",
    "talking on the phone - hablando por telefono",
    "studying - estudiando",
    "drinking coffee - tomando cafe",
    "going to school - ir a la escuela",
    "doing homework - haciendo tarea",
    "texting a friend - texteando a un amigo",
    "running - corriendo",
    "working out - entrenando",
    "listening to music - escuchando musica",
    "eating pizza - comiendo pizza",
    "drinking soda - tomando gaseosa",
    "shopping - comprando",
    "watching TV - mirando tv",
    "sleeping - durmiendo",
    "Dan is having lunch in the library - Dan está almorzando en la biblioteca",
    "Sophie is talking on the phone at the gym - Sophie está hablando por telefono en el gimnasio",
    "Paolo and John are exercising in the cafeteria - Paolo y John hacen ejercicio en la cafetería",
    "Melissa is studying for a test outside - Melissa está estudiando para un examen afuera",
];

let currentSentenceIndex = 0;

function startTest() {
    displaySentence();
    document.getElementById('userInput').value = '';
}

function displaySentence() {
    const sentence = sentences[currentSentenceIndex];
    const sentenceHtml = sentence.split('').map(char => `<span>${char}</span>`).join('');
    document.getElementById('sentence').innerHTML = sentenceHtml;
}

function checkInput() {
    const userInput = document.getElementById('userInput').value;
    const originalSentence = sentences[currentSentenceIndex];

    const sentenceSpan = document.getElementById('sentence').querySelectorAll('span');
    const userInputArray = userInput.split('');

    sentenceSpan.forEach((charSpan, index) => {
        const userChar = userInputArray[index];

        if (userChar === undefined) {
            charSpan.classList.remove('correct', 'incorrect');
        } else if (userChar === originalSentence[index]) {
            charSpan.classList.remove('incorrect');
            charSpan.classList.add('correct');
        } else {
            charSpan.classList.remove('correct');
            charSpan.classList.add('incorrect');
        }
    });

    if (userInput === originalSentence) {
        currentSentenceIndex++;
        if (currentSentenceIndex < sentences.length) {
            displaySentence();
            document.getElementById('userInput').value = '';
        } else {
            alert('Prueba completada. ¡Buen trabajo!');
        }
    }
}

function focusInput() {
    const userInput = document.getElementById('userInput');
    userInput.style.display = 'block';
    userInput.focus();
}

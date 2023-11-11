const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "prueba",
    "otra prueba"
    // Agrega más oraciones según tu preferencia
];

let currentSentenceIndex = 0;
let startTime, endTime;

function startTest() {
    displaySentence();
    document.getElementById('userInput').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('feedback-container').style.display = 'none';
    startTime = new Date().getTime();
}

function displaySentence() {
    const sentence = sentences[currentSentenceIndex];
    const sentenceHtml = sentence.split('').map(char => `<span>${char}</span>`).join('');
    document.getElementById('sentence').innerHTML = sentenceHtml;
}

function checkInput() {
    const userInput = document.getElementById('userInput').value;
    const originalSentence = sentences[currentSentenceIndex];

    const feedbackContainer = document.getElementById('feedback-container');
    const feedback = document.getElementById('feedback');

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
            endTime = new Date().getTime();
            const totalTime = (endTime - startTime) / 1000;
            const wordsPerMinute = Math.round((sentences.length / totalTime) * 60);
            feedback.innerText = `¡Prueba completada! Velocidad: ${wordsPerMinute} palabras por minuto.`;
            feedbackContainer.style.display = 'block';
        }
    } else {
        feedbackContainer.style.display = 'block';
        feedback.innerText = 'Texto incorrecto. Inténtalo de nuevo.';
    }
}

function focusInput() {
    const userInput = document.getElementById('userInput');
    userInput.style.display = 'block';  // Muestra el área de texto
    userInput.focus();
}

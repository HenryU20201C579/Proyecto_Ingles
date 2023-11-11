const sentences = [
    "hola",
    "prueba"
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

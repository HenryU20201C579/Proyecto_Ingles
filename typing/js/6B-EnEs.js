const sentences = [
    "gifts - regalos",
"important items - articulos importantes",
"friends - amigos",
"photo - foto",
"candy - dulce",
"books - libros",
"keys - llaves",
"computer - computadora",
"soccer ball - balón de futbol",
"cellphone - teléfono celular",
"ring - anillo",
"apple - manzana",
"map - mapa",
"wallet - billetera",
"camera - camara",
"tape measure - cinta métrica",
"safety kit - botiquín",
"snacks - aperitivos",
"lipstick - lápiz labial",
"bag - bolsa",
"backpack - mochila",
"briefcasa - maletín",
"purse - cartera",
"gift card - tarjeta de regalo",
"notebook - cuaderno",
"pencil case - cartuchera",
"tablet - tableta",
"charger - cargador",
"headphones - audifonos",
"watch - reloj",
"sunglasses - lentes de sol",
"earrings - aretes",
"water bottle - botella de agua",
"chewing gum - chicle",
"make-up - maquillaje",
"comb - peine",
"band-aids - curitas",
"pills - pastillas",
"toothbrush - cepillo dental",
"toothpaste - pasta dental",
"passport - pasaporte",
"ID card - dni",
"driver license - licencia de conducir",
"coin purse - monedero",
"coins - monedas",
"bills - billetes",
"birthday - cumpleaños",
"wedding - boda",
"graduation - graduacion",
"brand - marca",
"teddy bear - oso de peluche",
"perfume - perfume",
"bracelet - pulsera",
"flowers - flores",
"chocolate - chocolate",
"mug - taza",
"photo album - album de fotos",
"car - auto",
"gift basket - canasta de regalos",
"money - dinero",
"thank you so much - muchas gracias",
"thank you very much - muchas gracias",
"thank you - gracias",
"thanks a lot - muchas gracias",
"thanks - gracias",
"thanks a bunch - gracias un montón",
"not at all - para nada",
"you're welcome - de nada",
"my pleasure - mi placer",
"sure, no problem - seguro, ningún problema",
"you bet - por supuesto",
"anytime - cuando quieras",
"desk - escritorio",
"calculator - calculadora",
"eraser - borrador",
"folder - folder",
"glue sticks - goma en barra",
"marker - plumón",
"ruler - regla",
"scissors - tijeras",
"sticky note - pósit",
"stapler - engrapadora",
"paper - papel",
"paper punch - perforadora de papel",
"highlighter - resaltador",
"sharpener - tajador",
"colored pencils - lapices de colores",
"crayons - crayones",
"quiz - prueba",
"dish - plato",
"tomato - tomate",
"races - carreras",
"busses - autobuses",
"boxes - cajas",
"prizes - premios",
"kisses - besos",
"watches - relojes",
"lamps - lamparas",
"roof - techo",
"graph - grafico",
"laughs - risas",
"crabs - cangrejos",
"gloves - guantes",
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

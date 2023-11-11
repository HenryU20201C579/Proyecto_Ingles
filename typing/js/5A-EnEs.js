const sentences = [
    "artichoke - alcachofa",
    "asparagus - esparragos",
    "avocado - palta",
    "beet - remolacha",
    "broccoli - brocoli",
    "carrot - zanahoria",
    "cauliflower - coliflor",
    "celery - apio",
    "green beans - vainita",
    "ginger - kion",
    "lettuce - lechuga",
    "manioc - yuca",
    "mushroom - hongo",
    "onion - cebolla",
    "parsley - perejil",
    "peas - arveja",
    "pepper - pimienta",
    "potato - papa",
    "sweet potato - camote",
    "radish - rabano",
    "tomato - tomate",
    "spinach - espinaca",
    "spring onion - cebolla china",
    "olives - aceituna",
    "cinnamon - canela",
    "chamomile - manzanilla",
    "chili pepper - chile",
    "clove - clavo",
    "corn - maiz",
    "cucumber - pepino",
    "eggplant - berenjena",
    "garlic - ajo",
    "apple - manzana",
    "cherry - cereza",
    "banana - platano",
    "blackberry - mora",
    "blueberry - arandano",
    "coconut - coco",
    "fig - higo",
    "gooseberry - aguaymanto",
    "grapes - uvas",
    "grapefruit - toronja",
    "kiwifruit - kiwi",
    "lemon - lima",
    "lime - limon",
    "mango - mango",
    "mandarin - mandarina",
    "melon - melon",
    "orange - naranja",
    "peach - durazno",
    "pear - pera",
    "pineapple - piña",
    "plum - ciruela",
    "pomegranate - granadilla",
    "strawberry - fresa",
    "watermelon - sandia",
    "beans - frijoles",
    "lentils - lentejas",
    "nut - nuez",
    "oat - avena",
    "peanut - mani",
    "raisin - pasa",
    "rice - arroz",
    "wheat - trigo",
    "bacon - tocino",
    "beef - carne de vaca",
    "blood sausage - morcilla",
    "chicken - pollo",
    "duck - pato",
    "guinea pig - cuy",
    "ham - jamon",
    "lamb - cordero",
    "liver - higado",
    "pate - pate",
    "patty - hamburguesa",
    "rib - costilla",
    "salami - salami",
    "sausage - salchicha",
    "pork - cerdo",
    "turkey - pavo",
    "fish - pescado",
    "crab - cangrejo",
    "lobster - langosta",
    "mussels - mejillon",
    "octopus - pulpo",
    "shrimp - camaron",
    "squid - calamar",
    "tuna - atun",
    "butter - mantequilla",
    "bread - pan",
    "cereal - cereal",
    "cheese - queso",
    "chocolate spread - crema de chocolate",
    "cracked pepper - pimienta molida",
    "egg - huevo",
    "flour - harina",
    "honey - miel",
    "jam - mermelada",
    "ketchup - ketchup",
    "mayonnaise - mayonesa",
    "milk - leche",
    "mustard - mostaza",
    "noodles - fideos",
    "oil - aceite",
    "salt - sal",
    "soy sauce - sillao",
    "spicy sauce - salsa picante",
    "sugar - azucar",
    "toast - tostada",
    "vinaigrette - vinagreta",
    "vinegar - vinagre",
    "yogurt - yogurt",
    "I study English - yo estudio ingles",
    "You work in New York - tu trabajas en nueva york",
    "We drink tea at 5pm - Nosotros tomamos te a las 5 pm",
    "They cook every day - ellos comen todos los dias",
    "He goes to school - él va a la escuela",
    "She walks to work - ella camina al trabajo",
    "It eats fruits and vegetables - come frutas y verduras",
    "My sister reads a book - mi hermana lee un libro",
    "Frank likes dogs - a Frank le gustan los perros",
    "My parents do the shopping - mis padres hacen las compras",
    "We sometimes meet in front of the cinema - Nosotros aveces nos encontramos frente al cine",
    "My uncle Jack goes to the doctor's office - Mi tio Jack va al consultorio del medico",
    "Our friends play soccer in the park - Nuestros amigos juegan futbol en el parque",
    "She studies Chinese - Ella estudia chino",
    "Mario rides his bicycle every day - Mario anda en bicicleta todos los días",
    "I don't eat hamburger - yo no como hamburguesa",
    "You don't speak Japanese - tú no hablas japones",
    "We don't drive a car - nosotros no conducimos un carro",
    "They don't have cellphones - ellos no tienen celulares",
    "He doesn't sleep in the mornings - él no duerme en la mañana",
    "She doesn't ride a bike - ella no maneja bicicleta",
    "It doesn't move fast - No se mueve rápido",
    "I don't like chicken - No me gusta el pollo",
    "My sister doesn't eat pasta - Mi hermana no come pasta",
    "They don't play soccer - No juegan futbol",
    "We don't buy pizza in the supermarket - No compramos pizza en el supermercado",
    "My cousin Luis doesn't go to the bank - Mi primo Luis no va al banco",
    "My parents don't dance at parties - mis padres no bailan en las fiestas",
    "You don't study Chinese - No estudias chino",
    "Mario doesn't write poems - Mario no escribe poemas",
    "Well, I drink orange juice, but I don't drink milk - Bueno, tomo jugo de naranja, pero no bebo leche",
    "For breakfast, I drink yogurt. I don’t drink coffee - Para el desayuno tomo yogur. No tomo cafe",
    "In my case, I only drink milk - En mi caso solo tomo leche.",
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

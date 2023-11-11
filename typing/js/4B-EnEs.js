const sentences = [
    "Pre-School - preescolar",
    "Nursery School - guarderia",
    "Kindergarten - jardin infantil",
    "Primary School - primaria",
    "Elementary School - primaria",
    "Secondary School - secundaria",
    "Middle School - secundaria",
    "High School - secundaria",
    "Higher Education - educacion superior",
    "University - universidad",
    "Institute - instituto",
    "Internship - pasantía",
    "Work - trabajo",
    "math - matematicas",
    "algebra - algebra",
    "geometry - geometria",
    "economics - economia",
    "language - lenguaje",
    "literature - literatura",
    "foreign languages - idiomas extranjeros",
    "history - historia",
    "geography - geografia",
    "citizenship - ciudadania",
    "philosophy - filosofia",
    "human relations - relaciones humanas",
    "science - ciencia",
    "chemistry - quimica",
    "physics - fisica",
    "astronomy - astronomia",
    "anatomy - anatomia",
    "biology - biologia",
    "physical education - educacion fisica",
    "health - salud",
    "information technology - tecnologia de la informatica",
    "art - arte",
    "music - musica",
    "drama - drama",
    "architecture - arquitectura",
    "engineering - ingenieria",
    "graphic design - diseño grafico",
    "computer science - ciencias de la computacion",
    "photography - fotografia",
    "fashion design - diseño de moda",
    "fine arts - performing arts",
    "culinary arts - artes culinarias",
    "education - educacion",
    "phychology - psicologo",
    "veterinary - veterinario",
    "medicine - medicina",
    "dentistry - dentista",
    "nursing - enfermeria",
    "nutrition - nutricionista",
    "law - leyes",
    "political science - ciencias politicas",
    "management - administracion",
    "business - negocios",
    "economics - economia",
    "aviation - aviacion",
    "journalism - periodismo",
    "tourism - turismo",
    "I'm a student at USIL - soy estudiante en la usil",
    "I go to USIL - voy a la usil",
    "I'm majoring in Medicine - me estoy especializando en medicina",
    "I'm taking a cooking class - estoy tomando una clase de cocina",
    "My favorite subject is History - mi curso favorito es historia",
    "I'm preparing for the entrance exam - me estoy preparando para el examen de ingreso",
    "I work in an office - trabajo en una oficina",
    "He's a good artist - él es un buen artista",
    "She's majoring in art - ella se especializa en arte",
    "He's taking the class for fun - él está tomando la clase por diversion",
    "He's working in a hotel - él está trabajando en un hotel",
    "She's trying to get a better job - ella esta intentando obtener un mejor trabajo",
    "He's not having fun in class - él no se divierte en clase",
    "He's trying to lose weight - él está intentando perder peso",
    "I am living abroad this year - estoy viviendo en el extranjero este año",
    "He is working part-time this month - él esta trabajando a tiempo parcial este mes",
    "They are taking 4 classes this term - Están tomando 4 clases este semestre",
    "Tara is taking ballet lessons this month - Tara está tomando clases de ballet este mes",
    "Tara is dancing ballet - Tara está bailando ballet",
    "I'm exercising at the gym - estoy entrenado en el gym",
    "I'm exercising at the gym these days - estoy entrenado en el gym estos dias",
    "They are renovating their kitchen this month - estan renovando su cocina este mes",
    "I am living with a friend this week - Esta semana estoy viviendo con un amigo",
    "Jack is working at a restaurant until he graduates - Jack está trabajando en un restaurante hasta que se gradúe",
    "She is living in New York York some months - Ella está viviendo en Nueva York durante algunos meses",
    "They are working late at night these days - Están trabajando hasta tarde por las noches en estos días",
    "I'm improving My English because I'm studying hard - Estoy mejorando mi inglés porque estoy estudiando duro",
    "I want to travel - quiero viajar",
    "I'm doing it for my job - lo hago por mi trabajo",
    "I'm preparing for an exam - me estoy peparando para un examen",
    "I'm majoring in English - me estoy especializando en ingles",
    "Monica is studying English for fun and for her job - Monica esta estudiando ingles por diversion y por su trabajo"
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

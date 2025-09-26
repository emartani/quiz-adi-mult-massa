const questions = [
    // -----------------------------------------------------
    // 10 PROBLEMAS DE ADIÇÃO
    // -----------------------------------------------------
    {
        question: "A mamãe comprou um pacote de farinha de 1kg e um pacote de açúcar de 500g. Qual é a massa total dos dois pacotes?",
        answers: [
            { text: "1kg e 200g", correct: false },
            { text: "1kg e 500g", correct: true },
            { text: "2kg", correct: false },
            { text: "501g", correct: false },
        ],
        calculation: "1kg é igual a 1000g. 1000g + 500g = 1500g, que é 1kg e 500g."
    },
    {
        question: "Para fazer um bolo, a Ana usou 250g de farinha e 40g de açúcar. Qual é a massa total dos ingredientes secos?",
        answers: [
            { text: "350g", correct: false },
            { text: "450g", correct: false },
            { text: "290g", correct: true },
            { text: "390g", correct: false },
        ],
        calculation: "250g + 40g = 290g."
    },
    {
        question: "O feirante vendeu 5kg de batatas pela manhã e 8kg à tarde. Quantos quilos de batata ele vendeu no total?",
        answers: [
            { text: "12kg", correct: false },
            { text: "10kg", correct: false },
            { text: "13kg", correct: true },
            { text: "14kg", correct: false },
        ],
        calculation: "5kg + 8kg = 13kg."
    },
    {
        question: "A vovó misturou 500g de aveia com 200g de frutas secas. Qual é a massa total da mistura?",
        answers: [
            { text: "600g", correct: false },
            { text: "700g", correct: true },
            { text: "750g", correct: false },
            { text: "800g", correct: false },
        ],
        calculation: "500g + 200g = 700g."
    },
    {
        question: "O atleta comeu 150g de arroz e 100g de frango no almoço. Qual a massa total de sua refeição?",
        answers: [
            { text: "200g", correct: false },
            { text: "250g", correct: true },
            { text: "300g", correct: false },
            { text: "180g", correct: false },
        ],
        calculation: "150g + 100g = 250g."
    },
    {
        question: "O papai comprou uma melancia de 4kg e um melão de 2kg. Qual é a massa total das frutas?",
        answers: [
            { text: "5kg", correct: false },
            { text: "6kg", correct: true },
            { text: "7kg", correct: false },
            { text: "8kg", correct: false },
        ],
        calculation: "4kg + 2kg = 6kg."
    },
    {
        question: "Na mochila do Pedro, ele colocou um livro de 1kg e um estojo de 250g. Qual é a massa total do que ele carregou?",
        answers: [
            { text: "1kg e 500g", correct: false },
            { text: "1kg e 250g", correct: true },
            { text: "1kg e 750g", correct: false },
            { text: "2kg", correct: false },
        ],
        calculation: "1kg (1000g) + 250g = 1250g, que é 1kg e 250g."
    },
    {
        question: "Uma receita pede 350g de chocolate em barra e 20g de gotas de chocolate. Qual a massa total de chocolate usada?",
        answers: [
            { text: "370g", correct: true },
            { text: "300g", correct: false },
            { text: "500g", correct: false },
            { text: "450g", correct: false },
        ],
        calculation: "350g + 20g = 370g."
    },
    {
        question: "O João pescou um peixe de 1kg e outro de 800g. Qual é a massa total dos peixes que ele pescou?",
        answers: [
            { text: "1kg e 500g", correct: false },
            { text: "2kg", correct: false },
            { text: "1kg e 800g", correct: true },
            { text: "1kg e 600g", correct: false },
        ],
        calculation: "1kg + 800g = 1kg e 800g."
    },
    {
        question: "O padeiro usou 2kg de farinha de trigo e 1kg de farinha de milho. Qual a massa total de farinha que ele usou?",
        answers: [
            { text: "2kg", correct: false },
            { text: "3kg", correct: true },
            { text: "4kg", correct: false },
            { text: "2kg e 500g", correct: false },
        ],
        calculation: "2kg + 1kg = 3kg."
    },

    // -----------------------------------------------------
    // 10 PROBLEMAS DE SUBTRAÇÃO
    // -----------------------------------------------------
    {
        question: "O papai comprou 5kg de batatas. Ele usou 2kg para fazer a janta. Quantos quilos de batata sobraram?",
        answers: [
            { text: "2kg", correct: false },
            { text: "3kg", correct: true },
            { text: "4kg", correct: false },
            { text: "1kg", correct: false },
        ],
        calculation: "5kg - 2kg = 3kg. Sobraram 3 quilos de batata."
    },
    {
        question: "A mamãe tinha um pacote de farinha com 1500g. Ela usou 400g para fazer o bolo. Quantos gramas de farinha sobraram?",
        answers: [
            { text: "500g", correct: false },
            { text: "700g", correct: false },
            { text: "1100g", correct: true },
            { text: "800g", correct: false },
        ],
        calculation: "1500g - 400g = 1100g."
    },
    {
        question: "O João tinha 900g de feijão. Ele vendeu 400g. Quantos gramas de feijão sobraram?",
        answers: [
            { text: "1000g", correct: false },
            { text: "500g", correct: true },
            { text: "1200g", correct: false },
            { text: "2000g", correct: false },
        ],
        calculation: "900g - 400g = 500g."
    },
    {
        question: "Um saco de cimento tem 25kg. O pedreiro usou 10kg para construir uma parede. Quantos quilos de cimento sobraram?",
        answers: [
            { text: "10kg", correct: false },
            { text: "15kg", correct: true },
            { text: "5kg", correct: false },
            { text: "20kg", correct: false },
        ],
        calculation: "25kg - 10kg = 15kg."
    },
    {
        question: "A vovó tinha 750g de uvas. Ela comeu 250g. Quantos gramas de uvas sobraram?",
        answers: [
            { text: "400g", correct: false },
            { text: "500g", correct: true },
            { text: "600g", correct: false },
            { text: "100g", correct: false },
        ],
        calculation: "750g - 250g = 500g."
    },
    {
        question: "Uma caixa de laranjas pesa 10kg. Foram vendidas 3kg de laranjas. Quantos quilos restam na caixa?",
        answers: [
            { text: "6kg", correct: false },
            { text: "7kg", correct: true },
            { text: "8kg", correct: false },
            { text: "5kg", correct: false },
        ],
        calculation: "10kg - 3kg = 7kg."
    },
    {
        question: "A mochila da Maria tinha 4kg de peso. Ela tirou um livro de 1kg. Qual a massa da mochila agora?",
        answers: [
            { text: "3kg", correct: true },
            { text: "2kg", correct: false },
            { text: "5kg", correct: false },
            { text: "1kg", correct: false },
        ],
        calculation: "4kg - 1kg = 3kg."
    },
    {
        question: "O padeiro tinha 1500g de massa de pão. Ele usou 400g para fazer os pães de queijo. Quantos gramas de massa sobraram?",
        answers: [
            { text: "500g", correct: false },
            { text: "600g", correct: false },
            { text: "1100g", correct: true },
            { text: "800g", correct: false },
        ],
        calculation: "1500g - 400g = 1100g."
    },
    {
        question: "Um caminhão saiu com 50kg de areia. Ele descarregou 20kg. Quantos quilos de areia restam no caminhão?",
        answers: [
            { text: "20kg", correct: false },
            { text: "25kg", correct: false },
            { text: "30kg", correct: true },
            { text: "40kg", correct: false },
        ],
        calculation: "50kg - 20kg = 30kg."
    },
    {
        question: "A avó do Lucas comprou 950g de morangos. A família comeu 240g. Quantos gramas de morangos sobraram?",
        answers: [
            { text: "300g", correct: false },
            { text: "710g", correct: true },
            { text: "500g", correct: false },
            { text: "200g", correct: false },
        ],
        calculation: "950g - 240g = 710g."
    },

    // -----------------------------------------------------
    // 10 PROBLEMAS DE MULTIPLICAÇÃO
    // -----------------------------------------------------
    {
        question: "O feirante vende pacotes de batata de 2kg. Se a Carla comprou 3 pacotes, qual a massa total de batatas?",
        answers: [
            { text: "5kg", correct: false },
            { text: "6kg", correct: true },
            { text: "8kg", correct: false },
            { text: "9kg", correct: false },
        ],
        calculation: "3 pacotes x 2kg/pacote = 6kg."
    },
    {
        question: "Para fazer um bolo, a receita pede 150g de manteiga. Se a vovó vai fazer 4 bolos, quantos gramas de manteiga ela vai precisar?",
        answers: [
            { text: "400g", correct: false },
            { text: "500g", correct: false },
            { text: "600g", correct: true },
            { text: "750g", correct: false },
        ],
        calculation: "4 bolos x 150g/bolo = 600g."
    },
    {
        question: "Um supermercado tem 5 caixas de laranjas. Se cada caixa pesa 10kg, qual a massa total das laranjas?",
        answers: [
            { text: "15kg", correct: false },
            { text: "40kg", correct: false },
            { text: "50kg", correct: true },
            { text: "60kg", correct: false },
        ],
        calculation: "5 caixas x 10kg/caixa = 50kg."
    },
    {
        question: "Um pacote de arroz tem 5kg. Se a mamãe comprou 2 pacotes, qual a massa total de arroz que ela tem em casa?",
        answers: [
            { text: "25kg", correct: false },
            { text: "10kg", correct: true },
            { text: "35kg", correct: false },
            { text: "40kg", correct: false },
        ],
        calculation: "2 pacotes x 5kg/pacote = 10kg."
    },
    {
        question: "Para a festa, a Maria comprou 3 pacotes de balas, e cada pacote tem 200g. Qual é a massa total das balas?",
        answers: [
            { text: "500g", correct: false },
            { text: "600g", correct: true },
            { text: "700g", correct: false },
            { text: "800g", correct: false },
        ],
        calculation: "3 pacotes x 200g/pacote = 600g."
    },
    {
        question: "O padeiro faz 4 pães iguais. Se cada pão tem 250g, qual a massa total de todos os pães?",
        answers: [
            { text: "1kg", correct: true },
            { text: "1kg e 250g", correct: false },
            { text: "1kg e 500g", correct: false },
            { text: "1kg e 750g", correct: false },
        ],
        calculation: "4 pães x 250g/pão = 1000g, que é 1kg."
    },
    {
        question: "O atleta usa 2 pesos de 5kg cada para se exercitar. Qual a massa total que ele está levantando?",
        answers: [
            { text: "10kg", correct: true },
            { text: "12kg", correct: false },
            { text: "15kg", correct: false },
            { text: "7kg", correct: false },
        ],
        calculation: "2 pesos x 5kg/peso = 10kg."
    },
    {
        question: "O papai vai fazer 3 tortas de maçã. Se cada torta usa 500g de maçãs, qual a massa total de maçãs que ele vai precisar?",
        answers: [
            { text: "1kg", correct: false },
            { text: "1kg e 500g", correct: true },
            { text: "2kg", correct: false },
            { text: "2kg e 500g", correct: false },
        ],
        calculation: "3 tortas x 500g/torta = 1500g, que é 1kg e 500g."
    },
    {
        question: "Uma caixa de suco pesa 1kg. Se o mercado comprou 8 caixas, qual é a massa total de suco?",
        answers: [
            { text: "7kg", correct: false },
            { text: "8kg", correct: true },
            { text: "9kg", correct: false },
            { text: "10kg", correct: false },
        ],
        calculation: "8 caixas x 1kg/caixa = 8kg."
    },
    {
        question: "A Ana comprou 4 pacotes de biscoitos. Se cada pacote pesa 150g, qual a massa total de biscoitos?",
        answers: [
            { text: "500g", correct: false },
            { text: "550g", correct: false },
            { text: "600g", correct: true },
            { text: "650g", correct: false },
        ],
        calculation: "4 pacotes x 150g/pacote = 600g."
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');
const acertoSom = document.getElementById('acerto-som');
const erroSom = document.getElementById('erro-som');

// Referências corrigidas para os elementos do placar
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const counterTextElement = document.getElementById('counter-text');

const explanationBox = document.getElementById('explanation-box');
const calculationText = document.getElementById('calculation');

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffleArray(questions);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    updateScoreAndCounter();
    nextButton.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    updateScoreAndCounter();

    const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackElement.innerText = '';
    explanationBox.classList.add('hide'); 
    calculationText.innerText = ''; 
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    // ESSENCIAL: Declarar a variável da pergunta atual aqui
    const currentQuestion = questions[currentQuestionIndex];
    
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        selectedButton.classList.add('correct');
        feedbackElement.innerText = 'Correto! 🎉';
        correctAnswers++;
        acertoSom.play();
    } else {
        selectedButton.classList.add('wrong');
        feedbackElement.innerText = 'Ops! Tente novamente. 🤔';
        wrongAnswers++;
        erroSom.play();
    }

    // NOVO: Exibe o cálculo correto
    calculationText.innerText = currentQuestion.calculation;
    explanationBox.classList.remove('hide'); // Torna a explicação visível

    updateScoreAndCounter();

    // BLOCO ÚNICO para desabilitar todos os botões e mostrar a resposta correta
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    // CRUCIAL: Mostrar o botão de próxima pergunta
    nextButton.classList.remove('hide');
}

// A função para atualizar o placar é a mais importante aqui.
function updateScoreAndCounter() {
    correctCountElement.innerText = `Acertos: ${correctAnswers}`;
    wrongCountElement.innerText = `Erros: ${wrongAnswers}`;
    counterTextElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz finalizado! Você acertou <span style="color:#28a745;">${correctAnswers}</span> de ${questions.length} perguntas. Parabéns!`;
        resetState();
        nextButton.classList.add('hide');
    }
});

startQuiz();
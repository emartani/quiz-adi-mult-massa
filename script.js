const questions = [
    // Seus 30 problemas de matemática
    // ... (Mantenha a lista completa de perguntas aqui)
    {
        question: "A mamãe comprou um pacote de farinha de 1kg e um pacote de açúcar de 500g. Qual é a massa total dos dois pacotes?",
        answers: [
            { text: "1kg e 200g", correct: false },
            { text: "1kg e 500g", correct: true },
            { text: "2kg", correct: false },
            { text: "501g", correct: false },
        ]
    },
    {
        question: "Para fazer um bolo, a Ana usou 250g de farinha e 150g de açúcar. Qual é a massa total dos ingredientes secos?",
        answers: [
            { text: "350g", correct: false },
            { text: "450g", correct: false },
            { text: "400g", correct: true },
            { text: "300g", correct: false },
        ]
    },
    {
        question: "O feirante vendeu 5kg de batatas pela manhã e 8kg à tarde. Quantos quilos de batata ele vendeu no total?",
        answers: [
            { text: "12kg", correct: false },
            { text: "10kg", correct: false },
            { text: "13kg", correct: true },
            { text: "14kg", correct: false },
        ]
    },
    {
        question: "A vovó misturou 500g de aveia com 200g de frutas secas. Qual é a massa total da mistura?",
        answers: [
            { text: "600g", correct: false },
            { text: "700g", correct: true },
            { text: "750g", correct: false },
            { text: "800g", correct: false },
        ]
    },
    {
        question: "O atleta comeu 100g de arroz e 150g de frango no almoço. Qual a massa total de sua refeição?",
        answers: [
            { text: "200g", correct: false },
            { text: "250g", correct: true },
            { text: "300g", correct: false },
            { text: "180g", correct: false },
        ]
    },
    {
        question: "O papai comprou uma melancia de 4kg e um melão de 2kg. Qual é a massa total das frutas?",
        answers: [
            { text: "5kg", correct: false },
            { text: "6kg", correct: true },
            { text: "7kg", correct: false },
            { text: "8kg", correct: false },
        ]
    },
    {
        question: "Na mochila do Pedro, ele colocou um livro de 1kg e um estojo de 250g. Qual é a massa total do que ele carregou?",
        answers: [
            { text: "1kg e 500g", correct: false },
            { text: "1kg e 250g", correct: true },
            { text: "1kg e 750g", correct: false },
            { text: "2kg", correct: false },
        ]
    },
    {
        question: "Uma receita pede 350g de chocolate em barra e 50g de gotas de chocolate. Qual a massa total de chocolate usada?",
        answers: [
            { text: "400g", correct: true },
            { text: "300g", correct: false },
            { text: "500g", correct: false },
            { text: "450g", correct: false },
        ]
    },
    {
        question: "O João pescou um peixe de 1kg e outro de 800g. Qual é a massa total dos peixes que ele pescou?",
        answers: [
            { text: "1kg e 500g", correct: false },
            { text: "2kg", correct: false },
            { text: "1kg e 800g", correct: true },
            { text: "1kg e 600g", correct: false },
        ]
    },
    {
        question: "O padeiro usou 2kg de farinha de trigo e 1kg de farinha de milho. Qual a massa total de farinha que ele usou?",
        answers: [
            { text: "2kg", correct: false },
            { text: "3kg", correct: true },
            { text: "4kg", correct: false },
            { text: "2kg e 500g", correct: false },
        ]
    },

    // Problemas de Subtração
    {
        question: "O papai comprou 5kg de batatas. Ele usou 2kg para fazer a janta. Quantos quilos de batata sobraram?",
        answers: [
            { text: "2kg", correct: false },
            { text: "3kg", correct: true },
            { text: "4kg", correct: false },
            { text: "1kg", correct: false },
        ]
    },
    {
        question: "A mamãe tinha um pacote de farinha com 1000g. Ela usou 400g para fazer o bolo. Quantos gramas de farinha sobraram?",
        answers: [
            { text: "500g", correct: false },
            { text: "700g", correct: false },
            { text: "600g", correct: true },
            { text: "800g", correct: false },
        ]
    },
    {
        question: "O João tinha 2kg de feijão. Ele vendeu 500g. Quantos gramas de feijão sobraram?",
        answers: [
            { text: "1000g", correct: false },
            { text: "1500g", correct: true },
            { text: "500g", correct: false },
            { text: "2000g", correct: false },
        ]
    },
    {
        question: "Um saco de cimento tem 25kg. O pedreiro usou 10kg para construir uma parede. Quantos quilos de cimento sobraram?",
        answers: [
            { text: "10kg", correct: false },
            { text: "15kg", correct: true },
            { text: "5kg", correct: false },
            { text: "20kg", correct: false },
        ]
    },
    {
        question: "A vovó tinha 750g de uvas. Ela comeu 250g. Quantos gramas de uvas sobraram?",
        answers: [
            { text: "400g", correct: false },
            { text: "500g", correct: true },
            { text: "600g", correct: false },
            { text: "100g", correct: false },
        ]
    },
    {
        question: "Uma caixa de laranjas pesa 10kg. Foram vendidas 3kg de laranjas. Quantos quilos restam na caixa?",
        answers: [
            { text: "6kg", correct: false },
            { text: "7kg", correct: true },
            { text: "8kg", correct: false },
            { text: "5kg", correct: false },
        ]
    },
    {
        question: "A mochila da Maria tinha 4kg de peso. Ela tirou um livro de 1kg. Qual a massa da mochila agora?",
        answers: [
            { text: "3kg", correct: true },
            { text: "2kg", correct: false },
            { text: "5kg", correct: false },
            { text: "1kg", correct: false },
        ]
    },
    {
        question: "O padeiro tinha 1500g de massa de pão. Ele usou 800g para fazer os pães de queijo. Quantos gramas de massa sobraram?",
        answers: [
            { text: "500g", correct: false },
            { text: "600g", correct: false },
            { text: "700g", correct: true },
            { text: "800g", correct: false },
        ]
    },
    {
        question: "Um caminhão saiu com 50kg de areia. Ele descarregou 20kg. Quantos quilos de areia restam no caminhão?",
        answers: [
            { text: "20kg", correct: false },
            { text: "25kg", correct: false },
            { text: "30kg", correct: true },
            { text: "40kg", correct: false },
        ]
    },
    {
        question: "A avó do Lucas comprou 1kg de morangos. A família comeu 600g. Quantos gramas de morangos sobraram?",
        answers: [
            { text: "300g", correct: false },
            { text: "400g", correct: true },
            { text: "500g", correct: false },
            { text: "200g", correct: false },
        ]
    },

    // Problemas de Multiplicação
    {
        question: "O feirante vende pacotes de batata de 2kg. Se a Carla comprou 3 pacotes, qual a massa total de batatas?",
        answers: [
            { text: "5kg", correct: false },
            { text: "6kg", correct: true },
            { text: "8kg", correct: false },
            { text: "9kg", correct: false },
        ]
    },
    {
        question: "Para fazer um bolo, a receita pede 150g de manteiga. Se a vovó vai fazer 4 bolos, quantos gramas de manteiga ela vai precisar?",
        answers: [
            { text: "400g", correct: false },
            { text: "500g", correct: false },
            { text: "600g", correct: true },
            { text: "750g", correct: false },
        ]
    },
    {
        question: "Um supermercado tem 5 caixas de laranjas. Se cada caixa pesa 10kg, qual a massa total das laranjas?",
        answers: [
            { text: "15kg", correct: false },
            { text: "40kg", correct: false },
            { text: "50kg", correct: true },
            { text: "60kg", correct: false },
        ]
    },
    {
        question: "Um pacote de arroz tem 5kg. Se a mamãe comprou 6 pacotes, qual a massa total de arroz que ela tem em casa?",
        answers: [
            { text: "25kg", correct: false },
            { text: "30kg", correct: true },
            { text: "35kg", correct: false },
            { text: "40kg", correct: false },
        ]
    },
    {
        question: "Para a festa, a Maria comprou 3 pacotes de balas, e cada pacote tem 200g. Qual é a massa total das balas?",
        answers: [
            { text: "500g", correct: false },
            { text: "600g", correct: true },
            { text: "700g", correct: false },
            { text: "800g", correct: false },
        ]
    },
    {
        question: "O padeiro faz 5 pães iguais. Se cada pão tem 250g, qual a massa total de todos os pães?",
        answers: [
            { text: "1kg", correct: false },
            { text: "1kg e 250g", correct: true },
            { text: "1kg e 500g", correct: false },
            { text: "1kg e 750g", correct: false },
        ]
    },
    {
        question: "O atleta usa 2 pesos de 5kg cada para se exercitar. Qual a massa total que ele está levantando?",
        answers: [
            { text: "10kg", correct: true },
            { text: "12kg", correct: false },
            { text: "15kg", correct: false },
            { text: "7kg", correct: false },
        ]
    },
    {
        question: "O papai vai fazer 3 tortas de maçã. Se cada torta usa 500g de maçãs, qual a massa total de maçãs que ele vai precisar?",
        answers: [
            { text: "1kg", correct: false },
            { text: "1kg e 500g", correct: true },
            { text: "2kg", correct: false },
            { text: "2kg e 500g", correct: false },
        ]
    },
    {
        question: "Uma caixa de suco pesa 1kg. Se o mercado comprou 8 caixas, qual é a massa total de suco?",
        answers: [
            { text: "7kg", correct: false },
            { text: "8kg", correct: true },
            { text: "9kg", correct: false },
            { text: "10kg", correct: false },
        ]
    },
    {
        question: "A Ana comprou 4 pacotes de biscoitos. Se cada pacote pesa 150g, qual a massa total de biscoitos?",
        answers: [
            { text: "500g", correct: false },
            { text: "550g", correct: false },
            { text: "600g", correct: true },
            { text: "650g", correct: false },
        ]
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
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
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

    updateScoreAndCounter();

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

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
const questions = [{
        question: "Qual o mês de aniversário da cantora Beyoncé?",
        answers: [
            { text: "December", correct: false },
            { text: "May", correct: false },
            { text: "February", correct: false },
            { text: "September", correct: true },
        ]
    },
    {
        question: "Qual o nome da autora do livro The Spirit of Intimacy ‘O Espírito da Intimidade’??",
        answers: [
            { text: "Sobonfu Somé", correct: true },
            { text: "Matilda Storm", correct: false },
            { text: "Dyana Forbs", correct: false },
            { text: "Mayla Dill", correct: false },
        ]
    },
    {
        question: "Qual era o nome de Muhammad Ali, antes da conversão ao islã?",
        answers: [
            { text: "Mike Tyson", correct: false },
            { text: "Klover Brown", correct: false },
            { text: "Cassius Marcellus Clay Jr", correct: true },
            { text: "Peter Jhones", correct: false },
        ]
    },
    {
        question: "Onde nasceu a cantora Nina Simone?",
        answers: [
            { text: "Carolina do Norte ", correct: true },
            { text: "Mississipi", correct: false },
            { text: "Frankfurt", correct: false },
            { text: "Texas", correct: false },
        ]
    },
    {
        question: "Qual o nome do pastor e ativista político autor do discurso I Have a Dream ‘ Eu tenho um sonho’?",
        answers: [
            { text: "James Smith ", correct: false },
            { text: "Petter Davis", correct: false },
            { text: "Martin Luther King Jr", correct: true },
            { text: "Andrew Blake", correct: false },
        ]
    },
    {
        question: "Qual o mês de aniversário de Malcom X?",
        answers: [
            { text: "December", correct: false },
            { text: "May", correct: true },
            { text: "April", correct: false },
            { text: "September", correct: false },
        ]
    },
    {
        question: "Qual a cantora ganhadora do Grammy Latino: Melhor Álbum de Música Brasileira em 2022?",
        answers: [
            { text: "Liniker", correct: true },
            { text: "Luedji Luna", correct: false },
            { text: "Tássia Reis", correct: false },
            { text: "Maria", correct: false },
        ]
    }


];





const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-botn");

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    Score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("botn");
        answerButtons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        Score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${Score} de ${questions.length} perguntas!`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();
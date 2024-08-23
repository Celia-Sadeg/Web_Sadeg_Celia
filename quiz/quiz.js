// Questions de chaque sujet
const quizData = {
    history: [
        {
            question: "Qui était le premier président des États-Unis?",
            a: "George Washington",
            b: "Thomas Jefferson",
            c: "Abraham Lincoln",
            d: "John Adams",
            correct: "a"
        },
        {
            question: "En quelle année a eu lieu la Révolution française?",
            a: "1789",
            b: "1776",
            c: "1815",
            d: "1821",
            correct: "a"
        }
    ],
    math: [
        {
            question: "Quelle est la racine carrée de 16?",
            a: "2",
            b: "4",
            c: "8",
            d: "16",
            correct: "b"
        },
        {
            question: "Quel est le résultat de 7 x 6?",
            a: "42",
            b: "36",
            c: "48",
            d: "54",
            correct: "a"
        }
    ],
    science: [
        {
            question: "Quel est le symbole chimique de l'eau?",
            a: "O2",
            b: "H2O",
            c: "CO2",
            d: "NaCl",
            correct: "b"
        },
        {
            question: "Quel est l'organe principal de la respiration chez l'homme?",
            a: "Le cœur",
            b: "Les poumons",
            c: "Le foie",
            d: "Les reins",
            correct: "b"
        }
    ]
};

const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score');
const resultContainer = document.querySelector('.result-container');
const retryBtn = document.getElementById('retry-btn');
const quizTitle = document.getElementById('quiz-title');

let currentQuiz = 0;
let score = 0;
let subject = 'history'; // Par défaut, histoire

// Obtenir le sujet à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('subject')) {
    subject = urlParams.get('subject');
    quizTitle.textContent = `Quiz sur ${subject.charAt(0).toUpperCase() + subject.slice(1)}`;
}

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[subject][currentQuiz];
    quizContainer.innerHTML = `
        <div class="mb-3">
            <h5>${currentQuizData.question}</h5>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer" id="a" value="a">
            <label class="form-check-label" for="a">${currentQuizData.a}</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer" id="b" value="b">
            <label class="form-check-label" for="b">${currentQuizData.b}</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer" id="c" value="c">
            <label class="form-check-label" for="c">${currentQuizData.c}</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="answer" id="d" value="d">
            <label class="form-check-label" for="d">${currentQuizData.d}</label>
        </div>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[subject][currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData[subject].length) {
            loadQuiz();
        } else {
            quizContainer.style.display = 'none';
            resultContainer.style.display = 'block';
            scoreContainer.innerText = `${score}/${quizData[subject].length}`;
        }
    }
});

retryBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuiz();
});

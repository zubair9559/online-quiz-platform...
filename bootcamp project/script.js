const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        answer: 0
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Earth", "Mars", "Mercury", "Venus"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Saturn", "Mars", "Venus"],
        answer: 2
    },
    {
        question: "Which country has the largest population?",
        options: ["India", "USA", "China", "Indonesia"],
        answer: 2
    },
    {
        question: "What is the process by which plants make their food?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionElements = document.querySelectorAll(".option");

    questionElement.textContent = questions[currentQuestion].question;
    optionElements.forEach((option, index) => {
        option.textContent = questions[currentQuestion].options[index];
    });

    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result").textContent = "";
}

function selectOption(index) {
    const isCorrect = index === questions[currentQuestion].answer;
    document.getElementById("result").textContent = isCorrect ? "Correct!" : "Wrong!";
    if (isCorrect) {
        score++;
    }
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>Your Score: ${score} / ${questions.length}</h2>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').innerText = '';
    loadQuestion();
}

// Initialize the first question
loadQuestion();

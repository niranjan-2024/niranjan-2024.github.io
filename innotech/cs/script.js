const quizData = [
    {
        question: "What is Control System?",
        a: "Control system is a system in which the output is controlled by varying the input",
        b: "Control System is a system in which the input is controlled by varying the output",
        c: "Control system is a feedback system that can be both positive and negative",
        d: "None",
        correct: "a",
    },
    {
        question: "Which of the following is not the feature of a modern control system?",
        a: "Accuracy",
        b: "Quick response",
        c: "No oscillation",
        d: "Correct power level",
        correct: "c",
    },
    {
        question: "Which of the following element is not used in an automatic control system?",
        a: "Final control element",
        b: "Error detector",
        c: "Sensor",
        d: "Oscillator",
        correct: "d",
    },
    {
        question: "A control system working under unknown random actions is called ",
        a: "Adaptive control system",
        b: "Digital data system",
        c: "Digital data system",
        d: "Stochastic control system",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function foo() {
var user_choice = window.confirm('Do you want go back to Electro-Geeks');
if(user_choice==true) {
window.location='https://niranjan-2024.github.io/innotech/main.html ';  // you can also use element.submit() if your input type='submit' 
} else {
return false;
}
}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="foo()">Go To Electro-Geeks</button>
            `;
        }
    }
});
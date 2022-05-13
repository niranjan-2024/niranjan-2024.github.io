const quizData = [
    {
        question: "How many basic logic gates are there ?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
    },
    {
        question: "Which gate will a NAND gate be equivalent to when two inputs of NAND gates are shorted ?",
        a: "AND gate",
        b: "NAND gate",
        c: "NOR gate",
        d: "NOt gate",
        correct: "d",
    },
    {
        question: "What should be done to obtain an OR gate from a NAND gate ?",
        a: "We need 2 NAND gates and 4 AND gates obtained from NAND gates.",
        b: "We need two NOT gates obtained from NAND gates and one NAND gate",
        c: "We need 3 NOT gates obtained from NAND gates and 3 NAND gates",
        d: "We need only 3 NAND gates",
        correct: "b",
    },
    {
        question: "Which of the following gates can have only one input ?",
        a: "NOT gate",
        b: "AND gate",
        c: "NOR gate",
        d: "NAND gate",
        correct: "a",
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
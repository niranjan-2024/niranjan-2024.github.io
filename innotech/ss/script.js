const quizData = [
    {
        question: "The type of systems which are characterized by input and the output quantized at certain levels are called as",
        a: "analog",
        b: "discrete",
        c: "Signal",
        d: "None",
        correct: "b",
    },
    {
        question: "The type of systems which are characterized by input and the output capable of taking any value in a particular set of values are called as",
        a: "None",
        b: "both c and d",
        c: "digital",
        d: "continuous",
        correct: "d",
    },
    {
        question: "An example of a discrete set of information/system is",
        a: "data on a CD",
        b: "trajectory of sun",
        c: "universe time scale",
        d: "All of the above",
        correct: "a",
    },
    {
        question: "Should real time instruments like oscilloscopes be time invariant?",
        a: "Sometimes",
        b: "Yes",
        c: "They have no relation with time variance",
        d: "Never",
        correct: "b",
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
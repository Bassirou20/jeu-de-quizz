
const quizData = [
    {
        question: "Quelle est le meilleur langage de programmation en 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "Qui est le meilleur président de l'histoire du sénégal?",
        a: "Abdou Diouf",
        b: "Macky Sall",
        c: "Leopold sedar senghor",
        d: "Abdoulaye wade",
        correct: "d",
    },
    {
        question: "la femme de seugn chouga?",
        a: "Deux au carré",
        b: "Elisabeth Mendy",
        c: "Sokhor clé",
        d: "marathon",
        correct: "a",
    },
    {
        question: "Le meilleur jour de l'histoire du Sénégal?",
        a: "Moussa Doumbouya",
        b: "Sané madio",
        c: "Sadio mané",
        d: "monsioeur wane",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Recharger</button>
            `
        }
     }
 })
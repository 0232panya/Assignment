

let questions = [
    {
        question: "Which is largest animal in world?",
        answers: [
            {text: 'Shark', correct: false},
            {text: 'Elephant', correct: false},
            {text: 'Blue Whale', correct: true},
            {text: 'Giraffe', correct: false},
        ]
    },
    {
        question: "Which is smallest continent in world?",
        answers: [
            {text: 'Asia', correct: false},
            {text: 'Europe', correct: false},
            {text: 'North America', correct: false},
            {text: 'australia', correct: true},
        ]
    },
    {
        question: "National animal of india",
        answers: [
            {text: 'Bengal Tiger', correct: true},
            {text: 'Elephant', correct: false},
            {text: 'Lion', correct: false},
            {text: 'Bear', correct: false},
        ]
    },
    {
        question: "Which is largest country in world?",
        answers: [
            {text: 'America', correct: false},
            {text: 'London', correct: false},
            {text: 'Russia', correct: true},
            {text: 'China', correct: false},
        ]
    }
];

let questionElement = document.getElementById('question');
let answerButtons = document.getElementById('ans-buttons');
let nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct == 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function resetState(){
    nextButton.style.display = 'none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ' + score + ' out of '+ questions.length + "!";
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz()
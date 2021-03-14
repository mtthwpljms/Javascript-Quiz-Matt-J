const startButton = document.getElementById("start-button")
const highscoreButton = document.getElementById("highscore-button")
const questionContainerElement = document.getElementById('question-box')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add("hide")
    highscoreButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is the file extension for a Javascript file?',
        answer: [
            { text: '.js', correct: true },
            { text: '.html', correct: false},
            { text: '.css', correct: false},
            {text: '.xlsx', correct: false}
        ]
    }
]


'use strict';

const quizForm = document.querySelector('.quiz-form');
const labelQuizMessage = document.getElementById('label-Quiz-message');
const SubmitButton = document.getElementById('submit-answer-btn');

const correctAnswer = ["90", "right angled"];


SubmitButton.addEventListener('click', () => {

    let score = 0;
    let index = 0;
    const formQuiz = new FormData(quizForm);
    for (let value of formQuiz.values()){
        if (value === correctAnswer[index]){
            score++;
        }
        index++;
    }
    labelQuizMessage.innerHTML = `You got ${score} out of ${correctAnswer.length} correct.`;
}
);

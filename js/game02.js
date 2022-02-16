'use strict'

const userNumberOne = +prompt('Введите начальное число');
const userNumberTwo = +prompt('Введите конечное число');

const min = Math.ceil(userNumberOne);
const max = Math.floor(userNumberTwo);
let botRandomNumber = Math.floor(Math.random() * (max - min)) + min;
let arr = [];
let countAttempt;
let range = [];

for (let i = min; (i >= min && i <= max); i++) {
    range.push(i)
}

const gameBotHard = () => {

    range.forEach(() => {
        countAttempt = Math.floor(range.length * 0.3);
    })

    while (true) {

        let userAnswer = +prompt('Отгадайте мое число');

        if (!arr.includes(userAnswer) && !isNaN(userAnswer)) {
            arr.push(userAnswer);
            countAttempt -= 1;
        } else if (isNaN(userAnswer)){
            alert('введите число');
            continue;
        } else {
            alert('такое число уже было');
            continue;
        }

        if (countAttempt === 0 && userAnswer > botRandomNumber) {
            alert('Меньше!');
            alert('У вас закончились попытки');
            break;
        } else if (countAttempt === 0 && userAnswer < botRandomNumber) {
            alert('Больше');
            alert('У вас закончились попытки');
            break;
        }

        if (userAnswer === 0 || min === 0 || max === 0) {
            alert('Игра окончена!')
            break;
        }

        if (userAnswer === botRandomNumber) {
            alert('Правильно!')
            break;
        } else if (userAnswer > botRandomNumber) {
            alert('Меньше!');
        } else if (userAnswer < botRandomNumber) {
            alert('Больше!')
        }
    }

    return console.log(arr);
}

gameBotHard();
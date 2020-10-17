'use strict';

let generateNumber = function (maxValue) {
    return Math.ceil(Math.random() * maxValue);
};

let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let startAGame = function() {
    let trueNumber = generateNumber(100);

    let answerResult = function (trueNumber) {
        return function (userNumber) {
            if (userNumber > trueNumber) {
                return 'Загаданное число меньше';
            } else if (userNumber < trueNumber) {
                 return 'Загаданное число больше';
            } else {
                 return true;
            }
        };
    };

    let userAnswer = function(message){
        let userNumber = prompt(message);
        let compareAnswer = answerResult(trueNumber);
        if (isNumber(userNumber)) {
            if (compareAnswer(userNumber) === true) {
                return alert('Поздравляю, Вы угадали!');
            } else {
                userAnswer(compareAnswer(userNumber));
            }
        } else if (userNumber === null) {
            return alert('Игра окончена');
        } else {
            userAnswer('Введите корректное значение');
        }
    };

    userAnswer('Введите число от 1 до 100');
};

let letsPlay = confirm('Сыграем в игру "Угадай число?"');

if (letsPlay === true) {
    startAGame();
}
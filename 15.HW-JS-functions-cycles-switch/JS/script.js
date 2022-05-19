"use strict";
//1


function max(a, b) { if (a > b) { return a; } else { return b; } }

function max(a, b) {
    return a > b ? a : b;
}


//2
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}

//3
let month = +prompt("Номер месяца в году", '');
howManyDays(month);

function howManyDays(month) {

    let days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            alert("Нет таких значений");
            break;
    }
    alert(days);
    return (days)
}

//4
function isEven(num) {
    console.log("Число четное " + num);
}

function isOdd(num) {
    console.log("Число нечетное " + num);
}

function multip(a, b, isEven, isOdd) {
    if (a == 0 || b == 0) {
        console.log("Вы ввели 0");
        return;
    }

    let mult = a * b;
    if (mult % 2 == 0) {
        isEven(mult);
    } else {
        isOdd(mult);
    }
}

multip(3, 3, isEven, isOdd);

//5

let num = +prompt("Введите число от 1 до 18");

if (num <= 18 && num > 0) {
    for (i = 2; i <= num; i += 2) {
        console.log(i);
    }
} else {
    console.log("Вы ввели некорректные данные, введите число от 1 до 18");
}
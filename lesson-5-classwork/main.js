// Всі функції повинні бути описані стрілочним типом!!!!
//  1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minNumber = (a, b, c) => {
    let txt = 'Найменьше число';
    if (a < b && a < c) {
        console.log (`${txt} ${a}`);
    } else if (b < a && b < c) {
        console.log (`${txt} ${b}`);
    } else {
        console.log (`${txt} ${c}`);
    }
};

minNumber (644, 875, 80);

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxNumber = (a, b, c) => {
    let txt = 'Найбільше число';
    document.write (`<div>`);
    if (a > b && a > c) {
        console.log (`${txt} ${a}`);
    } else if (b > a && b > c) {
        console.log (`${txt}  ${b}`);
    } else {
        console.log (`${txt}  ${c}`);
    }
};

maxNumber (365, 85, 832);

// 3 - створити функцію яка повертає найбільше число з масиву

let arrayMax = (array) => {
    let max = array[0];
    for (const element of array) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}
document.write(`<div class="array"><p>Найбільший елемент масиву: </p><h3>${arrayMax([-10, 510, 846, 0, 1546, -90])}</h3></div>`);

// - створити функцію яка повертає найменьше число з масиву

let arrayMin = (array) => {
    let min = array[0];
    for (const element of array) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}

document.write(`<div class="array"><p>Найбільший елемент масиву: </p><h3>${arrayMin([100, -51, 80, 0, 15, 900])}</h3></div>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arraySum = (array) => {
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}

document.write(`<div class="array"><p>Сума елементів масиву: </p><h3>${arraySum([-58, 0, 860, 450, 105, 9])}</h3></div>`);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arrayMid = (array) => {
    let middle = 0;
    for (const num of array) {
        middle += num;
    }
    return middle / array.length;
}

document.write(`<div class="array"><p>Середнє арифметичне значення елементів масиву: </p><h3>${arrayMid([100, -51, 80, 0, 15, 900])}</h3></div>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let arrayMinMax = (array) => {
    let minA = array [0];
    let maxA = array [0];
    for (const element of array) {
        if (element < minA) {
            minA = element;
        }
        if (element > maxA) {
            maxA = element;
        }
    }
    document.write(`<div class="array"><p>Найбільше число масиву: </p><h3>${maxA}</h3></div>`);
    return minA;
}

document.write(`<div class="array"><p>Найменьше число масиву: </p><h3>${arrayMinMax([15156, 546, 56232, -5663, 4646, 0, 46599])}</h3></div>`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arrayRand = (light) => {
    document.write (`<div class="array"><p>Масив випадкових чисел:</p>`);
    let array = [];
    for (let i = 0; i < light; i++) {
        array.push(Math.floor(Math.random() * 100));
        document.write (`<h4>${array[i]}</h4>`);
    }
    document.write (`</ul></div>`);
}

arrayRand (10);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let arrayRandom = (light, limit) => {
    document.write (`<div class="array"><p>Масив випадкових чисел:</p>`);
    let array = [];
    for (let i = 0; i < light; i++) {
        array.push(Math.floor(Math.random() * limit));
        document.write (`<h4>${array[i]}</h4>`);
    }
    document.write (`</ul></div>`);
}

arrayRandom (5, 20);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrayRevers = (arrayOld) => {
    let arrayNew = [];
    for (let i = arrayOld.length - 1, n = 0; i >= 0; i--, n++) {
        arrayNew[n] = arrayOld[i];}
    return arrayNew;
}

console.log(arrayRevers ([11515, 65563, -844, -75, 4676, 955]));
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

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

minNumber (36544, 8566, 8032);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

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

maxNumber (36544, 8566, 8032);

// - створити функцію яка повертає найбільше число з масиву

function arrayMax () {
    let max = arguments [0];
    for (const argument of arguments) {
        if (argument > max) {
            max = argument;
        }
    }
    return max;
}

let maxArr = arrayMax (100, 43, 542, 75, 765, 952);
document.write (`<p>Найбільше число массиву <br>${maxArr}</p>`);

// - створити функцію яка повертає найменьше число з масиву

function arrayMin () {
    let min = arguments [0];
    for (const argument of arguments) {
        if (argument < min) {
            min = argument;
        }
    }
    return min;
}

let minArr = arrayMin (12, -50, 52, 750, 9);
document.write (`<p>Найменьше число массиву <br>${minArr}</p>`);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function arraySum (arrSum) {
    let sum = 0;
    for (const num of arrSum) {
            sum += num;
    }
    return sum;
}

let sumArr = arraySum ([12, 50, 750, 9]);
document.write (`<p>Сума массиву <br>${sumArr}</p>`);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arrayMid (arrMid) {
    let middle = 0;
    for (const num of arrMid) {
        middle += num;
    }
    return middle / arrMid.length;
}

let middleArr = arrayMid ([102, -50, 650, -90]);
document.write (`<p>Середнє арифметичне массива <br>${middleArr}</p>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function arrayMinMax (minMax) {
    let minArr = minMax [0];
    let maxArr = minMax [0];
    for (const num of minMax) {
        if (num < minArr) {
            minArr = num;
        }
        if (num > maxArr) {
            maxArr = num;
        }
    }
    document.write (`<h2>Найбільше число массиву ${maxArr}</h2>`);
    return minArr;
}

arrayMinMax ([102, -50, 650, -9]);
console.log(minArr);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function arrayRandom (light) {
    document.write (`<ul>Масив випадкових чисел:`);
    let array = [];
    for (let i = 0; i < light; i++) {
        array.push(Math.floor(Math.random() * 100));
        document.write (`<li>${array[i]}</li>`);
    }
    document.write (`</ul>`);

}

arrayRandom (10);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function arrayRandomLimit (light, limit) {
    document.write (`<ul>Масив випадкових чисел з лімітом:`);
    let array = [];
    for (let i = 0; i < light; i++) {
        array.push(Math.floor(Math.random() * limit));
        document.write (`<li>${array[i]}</li>`);
    }
    document.write (`</ul>`);

}

arrayRandomLimit (10, 50);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function arrayRevers (arrayOld) {
    let arrayNew = [];
    for (let i = arrayOld.length - 1, n = 0; i >= 0; i--, n++) {
        arrayNew[n] = arrayOld[i];}
    return arrayNew;
}

console.log(arrayRevers ([10, 403, -54, 705, 76, 95]));
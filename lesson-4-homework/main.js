// 1) створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaRec = (a) => {
    return a * 6;
}

console.log (`Площа прямокутника дорівнює ${areaRec (5)}`);

// 2) створити функцію яка обчислює та повертає площу кола з радіусом r

const pi = 3.1415;
let areaСir = (r) => {
    return pi * Math.pow(r, 2);
}

console.log (`Площа кола дорівнює ${areaRec (pi, 6)}`);

// 3) створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaCyl = (r, h) => {
    return 2 * pi * r * h + 2 * pi * Math.pow(r, 2);
}

console.log (`Площа циліндра дорівнює ${areaCyl (5, 10)}`);

// 4) створити функцію яка приймає масив та виводить кожен його елемент

function arrCreator (...abc) {
    document.write(`<h2>Масив з елементів:</h2>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<p>${arr[i]}</p>`)
    }
}

let arr = [100, 200, 300, 400, 'продовження'];
arrCreator(arr);

// 5) створити функцію яка створює параграф з текстом. Текст задати через аргумент

let pСontent = (a) => {
    document.write(`<p>${a}</p>`)
}

pСontent('Довільний довгий тект про щось цікаве!');

// 6) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulCreator (a) {
    document.write(`<ul>Масив ul:`);
    for (let i = 1; i <= 3; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`);
}

ulCreator('текст');

// 7) - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function forCreator (a, b) {
    document.write(`<ul>Масив з аргументом:`);
    for (let i = 0; i < b; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`);
}

forCreator(1000, 3);

// 8) створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список

function arrayMix (...abc) {
        document.write(`<ul>Міксований масив:`);
        for (let i = 0; i < array.length; i++) {
            document.write(`<li>${array[i]}</li>`)
        }
        document.write(`</ul>`);
}

let array = [100, 'дата народження', false, 467, 'продовження'];
arrayMix (array);

// 9) створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function objectArray(object) {
    document.write(`<h2>Картки клієнтів:</h2>`);
    for (const objectElement of object) {
        document.write(`
            <div class="flex"><p>id: ${objectElement.id}</p>
                <p>${objectElement.name}</p>
                <p>${objectElement.age}</p>
            </div>
        `);
    }
}
let objects = [
                {id: 0001, name: 'Богдан', age: 40},
                {id: 0002, name: 'Людмила', age: 39},
                {id: 0003, name: 'Назар', age: 12},
                {id: 0004, name: 'Анастасія', age: 4},
                {id: 0005, name: 'Мирослав', age: 3},
];
objectArray(objects);

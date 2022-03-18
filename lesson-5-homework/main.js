// Всі функції повинні бути описані стрілочним типом!!!!
// 1- створити функцію яка обчислює та повертає площу прямокутника

let areaRec = (a, b) => a * b;

console.log (`Площа прямокутника дорівнює ${areaRec (5, 10)}`);

// 2- створити функцію яка обчислює та повертає площу кола

const pi = 3.1415;
let areaСir = r => pi * Math.pow(r, 2);

console.log (`Площа кола дорівнює ${areaСir (6)}`);

// - створити функцію яка обчислює та повертає площу циліндру

let areaCyl = (r, h) => 2 * pi * r * h + 2 * pi * Math.pow(r, 2);

console.log (`Площа циліндра дорівнює ${areaCyl (5, 10)}`);

// 3- створити функцію яка приймає масив та виводить кожен його елемент

let creatorArray = array => {
    document.write(`<h2>Масив з елементів:</h2><ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}

let array = [100, 200, 300, 400, 500];
creatorArray(array);

// 4- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let parText = paragraph => document.write(`<h2>${paragraph}</h2>`);

parText('Довільний тект!');

// 5- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let liText = list => {
    document.write(`<h2>Список з трьома елементами:</h2><ul>`);
    for (let i = 1; i <= 3; i++) {
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`);
}

liText('список');

// 6- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulText = (a, n) => {
    document.write(`<h2>Список з дублюючими елементами:</h2><ul>`);
    for (let i = 1; i <= n; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`);
}

ulText('дублюючий текст', 5);

// 7- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let multiArray = (multi) => {
    document.write(`<h2>Масив примітивних елементів:</h2><ul>`);
    for (let i = 0; i < multi.length; i++) {
        document.write(`<li>${multi[i]}</li>`)
    }
    document.write(`</ul>`);
}

let multi = [100, 'дата народження', false, 45, 'ПІП'];
multiArray (multi);

// 8- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let objects = [
    {id: 0001, name: 'Богдан', age: 40},
    {id: 0002, name: 'Людмила', age: 39},
    {id: 0003, name: 'Назар', age: 12},
    {id: 0004, name: 'Анастасія', age: 4},
    {id: 0005, name: 'Мирослав', age: 3},
];

let blocArray = object => {
    document.write(`<h2>Картки клієнтів:</h2><div class="flex">`);
    for (const objectElement of object) {
        document.write(`
            <div class="card"><h3>id: ${objectElement.id}</h3>
                <p>Ім'я: ${objectElement.name}</p>
                <p>Вік: ${objectElement.age}</p>
                <button>Детальніше</button>
            </div>
        `);
    }
    document.write(`</div>`);
}

blocArray(objects);
// 1) --створити масив: з 5 числових значень, з 5 стічкових значень, з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let str = ['Liudmila', 'Bogdan', 'Nazar', 'Anastasia', 'Miroslav'];
let num = [39, 40, 12, 4, 3];
let mix = [false, true, 18, 'ready', 'not ready'];
    console.log(str, num, mix);

// 2) -- Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу.
// Вивести в консоль

let empty = [];
    empty[0] = str[0];
    empty[1] = num[0];
    empty[2] = mix[0];
    empty[3] = 'Okten';
    empty[4] = 6;
    console.log(empty);

// 3) За допомогою циклу for і document.wite() вивести 10 блоків div c довільним текстом всередині

document.write(`<h2>for і document.wite()</h2><div class="flex"><div><h3>10 блоків div</h3>`);
for (let div = 0; div < 10; div++) {
        document.write(`<div>Просто текст</div>`);
}
document.write(`</div>`);

// 4) За допомогою циклу for і document.write() вивести 10 блоків div з індексом c довільним текстом і індексом всередині

document.write(`<div><h3>10 блоків div з індексом</h3>`);
for (let div = 0, divi = 1; div < 10; div++, divi++) {
        document.write(`<div>Текс для перевірки №${divi}</div>`);
}
document.write(`</div></div>`);

// 5) - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

document.write(`<h2>while і document.wite()</h2><div class="flex">
    <div><h3>20 блоків h1</h3>`);
let h = 0;
while (h < 20) {
        document.write(`<h1 class="reduction">Просто блок</h1>`);
        h++;
}
document.write(`</div>`);

// 6)- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

document.write(`<div><h3>20 блоків h1 з індексом</h3>`);
let hi = 0;
let hii = 1;
while (hi < 20) {
        document.write(`<h1 class="reduction">Нумерований блок №${hii}</h1>`);
        hi++;
        hii++;
 }
document.write(`</div></div>`);

// 7)- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numers =
    [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
    ];
for (i = 0; i < numers.length; i++) {
        console.log(numers[i]);
}

// 8) Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let strings =
    [
        "Людмила Олександрівна",
        "Оксана Миколаївна",
        "Богдан Володимирович",
        "Яна Михайлівна",
        "Зиновій Богданович",
        "Клара Михайлівна",
        "Олег Анатолійович",
        "Христина Макарівна",
        "Арсеній Евгенович",
        "Динис Петрович"
    ];
for (i = 0; i < strings.length; i++) {
        console.log(strings[i]);
}

// 9) Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let mixes =
    [
        "Англійська мова",
        56834211,
        47358,
        5>6,
        true,
        "Математика",
        "Економіка",
        false,
        "Китайська мова",
        NaN
    ];
for (i = 0; i < mixes.length; i++) {
        console.log(mixes[i]);
}

// 10) Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

for (i = 0; i < mixes.length; i++) {
        if (typeof mixes[i] === 'boolean'){
                console.log(mixes[i]);
        }
}

// 11) Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

for (i = 0; i < mixes.length; i++) {
        if (typeof mixes[i] === 'number'){
                console.log(mixes[i]);
        }
}

// 12) Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

for (i = 0; i < mixes.length; i++) {
        if (typeof mixes[i] === 'string'){
                console.log(mixes[i]);
        }
}

// 13) Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let mixArrey = [];
    mixArrey[0] = false;
    mixArrey[1] = 1;
    mixArrey[2] = "людини";
    mixArrey[3] = "робота";
    mixArrey[4] = "для";
    mixArrey[5] = 2;
    mixArrey[6] = 5>1;
    mixArrey[7] = "програмістів";
    mixArrey[8] = "зроблять";
    mixArrey[9] = {};
for (i = 0; i < mixArrey.length; i++) {
        console.log(mixArrey[i]);
}

// 14) Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

document.write(`<h2>for на 10  ітерацій з кроком 1</h2>`);
let ii = 10;
for (let i = 0; i < ii; i++) {
    console.log(`${i}-а ітерація цикла з ${ii}-ти.`);
    document.write(`<p>${i}-а ітерація цикла з ${ii}-ти.</p>`);
}

// 15) Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

document.write(`<h2>for на 100 ітерацій</h2><div class="flex-1"><div><h3>з кроком +1</h3>`);
for (let i = 0; i < 100; i++) {
    console.log(`Ітерація ${i}`);
    document.write(`<p>Ітерація ${i}</p>`);
}
document.write(`</div>`);

// 16) Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

document.write(`<div><h3>з кроком +2</h3>`);
for (let i = 0; i <= 198; i+=2) {
    console.log(`Ітерація ${i}`);
    document.write(`<p>Ітерація ${i}</p>`);
}
document.write(`</div>`);

// 17) Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write

document.write(`<div><h3>парні кроки</h3>`);
for (let i = 0; i <= 198; i++) {
    if (i % 2 === 0) {
        console.log(`Ітерація ${i}`);
        document.write(`<p>Ітерація ${i}</p>`);
    }
}
document.write(`</div>`);

/// 18) Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write

document.write(`<div><h3>непарні кроки</h3>`);
for (let i = 0; i <= 199; i++) {
    if (i % 2 === 1) {
        console.log(`Ітерація ${i}`);
        document.write(`<p>Ітерація ${i}</p>`);
    }
}
document.write(`</div></div>`);
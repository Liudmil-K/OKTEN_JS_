// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let cleanStr = text => {
    let onlyText = (text.trim().replaceAll(/[^a-zа-яё]/gi, ' ')).trim().replaceAll(/\s+/g, ' ');// /[^a-zа-яё]/gi не літери
        console.log(`Очистемо стінгу "${text}" від зайвих символів=>
                 ${onlyText}.`);
}

cleanStr ('Harry..Potter');
cleanStr ('Ron---Whisley');
cleanStr ('Hermione__Granger');

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arrayRandom = (min, max, light) => {
    let arrayNew = [];
    for (let i = 0; i < light; i++) {
        arrayNew.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    document.write(`<p>Згенеруємо масив випадкових чисел: </p><h3>${arrayNew}</h3>`);
    return arrayNew;
}

let array = arrayRandom (0,100, 5);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

document.write(`<p>Відсортуємо масив від меньшого: </p><h3>${array.sort((a, b)=>{return a - b})}</h3>`);
document.write(`<p>Відсортуємо масив від більшого: </p><h3>${array.sort((a, b)=>{return b - a})}</h3>`);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

document.write(`<p>Залишаємо лише парні числа: </p><h3>${array.filter(item=>{return item % 2 === 0;})}</h3>`);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log(`Всі числа масиву ${array} перетворити на стрінгові =>`);
console.log(array.map(x=> x+''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// aбо навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = direction => {
    if (direction === '>') {
        nums.sort((a, b)=>{return a - b});
    } else {
        nums.sort((a, b)=>{return b - a});
    }
    return nums;
}

sortNums ('>');
console.log(`Відсортуємо масив =>${nums}`);

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) => {return a.monthDuration - b.monthDuration}));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter((a) => {return a.monthDuration >5}));
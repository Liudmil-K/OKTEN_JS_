// 1) Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let num1 = Math.round(Math.random() * 101);
let num2 = Math.round(Math.random() * 101);
    if (num1 === num2){
        console.log('Два випадкових числа рівні:' + num1 + ' = ' + num2);
    }else if (num1 > num2){
        console.log('З двох випадкових чисел ' + num1 + ' та ' + num2 + ' - ПЕРШЕ більше!');
    }else{
        console.log('З двох випадкових чисел ' + num1 + ' та ' + num2 + ' - ДРУГЕ більше!');}

// 2) У першому під'їзді квартири з 1 до 20.
// У другому з 21 по 48.
// У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let flat = +prompt('Введіть число від 1 до 90', 1);
    if (flat >= 1  && flat <= 20){
        alert('Квартира знаходиться в ПЕРШОМУ підїзді.');
    }else if (flat >= 21  && flat <= 48){
        alert('Квартира знаходиться в ДРУГОМУ підїзді.');
    }else if (flat >= 49  && flat <= 90){
        alert('Квартира знаходиться в ТРЕТЬОМУ підїзді.');
    }else{
        alert('Квартири немає в даному будинку!');}

// 3) Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10
// - тоді НЕВІРНО
let number = +prompt('Введіть число', 1);
    let ifnumber = (number === 10) ? alert('ВІРНО') : alert('НЕВІРНО');

// 4) Ми маємо змінну x в яку користувач задає  значення,
// якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2,
// якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = 10;
// let x = 'abc';
// let x = [];
let x = false;
    if (typeof x === 'number') {console.log(1);}
    else if (typeof x === 'string') {console.log(2);}
    else if (typeof x === 'boolean' || typeof x === "object") {console.log(3);}
    else {console.log('Невідоме (комбіноване) значення');}

// 5) Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22
// вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома
// і вчимося ОНЛАЙН
let okten = +prompt('Яка температура повітря сьогодні', +20);
    let ifokten = (okten >= 10 && okten <= 22) ? alert('Чудово! Ми йдемо ВЧИТИСЯ.') : alert('Сьогодні вчимося ОНЛАЙН.');

// 6) За допомогою switch case - реалізувати гру - вікторину,
// де ми вводимо число від 1 до 5. І взалежності від введеного числа
// нам дається приз. (Авто, Мото, Телефон, і т.д )
// і якщо число не підходить тоді вивести Повідомлення - що число не вірне ... .
let gift = +prompt(`Введіть цифру від 1 до 5`);
switch (gift) {
    case 1:
        document.write("<h2>Вітаємо Ваш подарунок</h2><h1>Автомобіль</h1>");
        break;
    case 2:
        document.write("<h2>Вітаємо Ваш подарунок</h2><h1>Мотоцикл</h1>");
        break;
    case 3:
        document.write("<h2>Вітаємо Ваш подарунок</h2><h1>Телефон</h1>");
        break;
    case 4:
        document.write("<h2>Вітаємо Ваш подарунок</h2><h1>Подарунковий сертифікат</h1>");
        break;
    case 5:
        document.write("<h2>Вітаємо Ваш подарунок</h2><h1>Шоколадка</h1>");
        break;
    default:
        document.write("<h2>Помилка!</h2><p>Невірне число...</p>");
}
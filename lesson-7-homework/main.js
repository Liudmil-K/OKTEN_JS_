// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User (id, name, surname, email, phone) {
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

let arrayUser = [
    new User (101, 'Христина', 'Олива', 'ho@gmail.com', 30951111111),
    new User (27, 'Ольга', 'Слива', 'os@gmail.com', 30682222222),
    new User (350, 'Антон', 'Шустак', 'ash@gmail.com', 30673333333),
    new User (14, 'Сергій', 'Крафт', 'sk@gmail.com', 30734444444),
    new User (55, 'Мирон', 'Вінський', 'mv@gmail.com', 30665555555),
    new User (106, 'Людмила', 'Жданова', 'lgd@gmail.com', 30636666666),
    new User (1001, 'Давид', 'Маркович', 'dm@gmail.com', 30687777777),
    new User (88, 'Олеся', 'Давиденко', 'od@gmail.com', 30988888888),
    new User (569, 'Дарина', 'Литвинчук', 'uj7@gmail.com', 30689999999),
    new User (110, 'Олег', 'Стеценко', 'uj7@gmail.com', 30660000000)
];

console.log (arrayUser.filter((item) => {if (item.id % 2 === 0) {return item}}));
console.log (arrayUser.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor (id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayClient = [
    new Client(4583, 'Христина', 'Олива', 'ho@gmail.com', 30668111585, ['Один', 1, 'one']),
    new Client(5656, 'Ольга', 'Слива', 'os@gmail.com', 30685416148, ['Два', 2, 'two']),
    new Client(7923, 'Антон', 'Шустак', 'ash@gmail.com', 30994645496, ['Три', 3, 'three']),
    new Client(4664, 'Сергій', 'Крафт', 'sk@gmail.com', 30675656598, ['Чотири', 4, 'four']),
    new Client(4583, 'Мирон', 'Вінський', 'mv@gmail.com', 30506564544, ['Пять', 5, 'five']),
    new Client(4463, 'Людмила', 'Жданова', 'lgd@gmail.com', 30689965652, ['Шість', 6, 'six']),
    new Client(9565, 'Давид', 'Маркович', 'dm@gmail.com', 30569595594, ['Сім', 7, 'seven']),
    new Client(5454, 'Олеся', 'Давиденко', 'od@gmail.com', 304465658888, ['Вісім', 8, 'eight']),
    new Client(4545, 'Дарина', 'Литвинчук', 'uj7@gmail.com', 30994544545, ['Девять', 9, 'nine']),
    new Client(5464, 'Олег', 'Стеценко', 'uj7@gmail.com', 30500540002, ['Десять', 10, 'ten']),
];

console.log(arrayClient.sort((a, b) => a.order.length - b.order.length))
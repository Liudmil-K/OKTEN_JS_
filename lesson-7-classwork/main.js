// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarsConstructor (model, manufacturer, yearIssue, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearIssue = yearIssue;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);};
	this.info = function () {
		console.log(`
		    model : ${this.model}
			manufacturer : ${this.manufacturer}
			yearIssue : ${this.yearIssue}
			maxSpeed : ${this.maxSpeed}
			engineCapacity : ${this.engineCapacity}`);
    };
    this.newMaxSpeed = function (newSpeed) {this.maxSpeed = this.maxSpeed + newSpeed;};
    this.changeYear = function (newValue) {this.year = newValue;};
    this.addDriver = function (driver) {this.driver = driver;};
}

let addConstructor = new CarsConstructor ('Prius', 'Toyota', 2016, 180, 1.8);
addConstructor.drive ();
addConstructor.info ();
addConstructor.newMaxSpeed (50);
addConstructor.changeYear (2022);
addConstructor.addDriver ('Kobzarenko Liudmila');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarsClass {
    constructor(model, manufacturer, yearIssue, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearIssue = yearIssue;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info () {
        console.log(`
            model : ${this.model}
			manufacturer : ${this.manufacturer}
			yearIssue : ${this.yearIssue}
			maxSpeed : ${this.maxSpeed}
			engineCapacity : ${this.engineCapacity}`);
    };
    newMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

let addClass = new CarsClass ('Berlingo', 'Citroen', 2013, 150, 1.6);
addClass.drive ();
addClass.info ();
addClass.newMaxSpeed (30);
addClass.changeYear (2021)
addClass.addDriver ('Kobzarenko Bogdan');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella (name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
}

let arrayCinderella = [
    new Cinderella ('Ольга', 42, 38),
    new Cinderella ('Інна', 56, 41),
    new Cinderella ('Христина', 21, 39),
    new Cinderella ('Маргарита', 12, 33),
    new Cinderella ('Світлана', 17, 36),
    new Cinderella ('Яна', 40, 40),
    new Cinderella ('Вікторія', 72, 38),
    new Cinderella ('Катерина', 45, 40),
    new Cinderella ('Вікторія', 18, 37),
    new Cinderella ('Діана', 15, 39),
];

class Prince {
    constructor(name, age, shose) {
        this.name = name;
        this.age = age;
        this.shose = shose;
    }
}

let para = (popelushkaArray, prince) => {
    for (const item of popelushkaArray) {
        if (item.footsize === prince.shose) {
            console.log (`Маємо чудову пару ${prince.name} та ${item.name}!`)
        }
    }
};

let prince = new Prince ('Давид', 20, 37);
para (arrayCinderella, prince);

console.log(arrayCinderella.find((item) => item.footsize === prince.shose));
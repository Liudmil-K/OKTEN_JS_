//    - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих2х форм.
//        Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let divOne = document.createElement ('div');
let divTwo = document.createElement ('div');
let formOne = document.createElement ('form');
let formTwo = document.createElement ('form');
    formOne.innerText = 'Форма №1';
    formTwo.innerText = 'Форма №2';
    formOne.setAttribute ('name', 'formOne');
    formTwo.setAttribute ('name', 'formTwo');
    document.body.append (divOne);
    document.body.append (divTwo);
    divOne.append (formOne);
    divTwo.append (formTwo);

let inputOneOne = document.createElement ('input');
let inputOneTwo = document.createElement ('input');
let inputTwoOne = document.createElement ('input');
let inputTwoTwo = document.createElement ('input');
    inputOneOne.setAttribute ('name', 'inputOneOne');
    inputOneTwo.setAttribute ('name', 'inputOneTwo');
    inputTwoOne.setAttribute ('name', 'inputTwoOne');
    inputTwoTwo.setAttribute ('name', 'inputTwoTwo');

let buttonForms = document.createElement ('button');
    buttonForms.innerText = 'Вивести значення двох форм в консоль';
    document.body.append (buttonForms);

    formOne.append (inputOneOne, inputOneTwo);
    formTwo.append (inputTwoOne, inputTwoTwo);

    buttonForms.onclick = () => {
        console.log (`З першої форми отримали значення: `+ document.forms.formOne.inputOneOne.value +` та `+document.forms.formOne.inputOneTwo.value);
        console.log (`З другої форми отримали значення: `+ document.forms.formTwo.inputTwoOne.value +` та `+document.forms.formTwo.inputTwoTwo.value);
    }

//    - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//        При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let divThree = document.createElement ('div');
let inputLines = document.createElement ('input');
let inputCells = document.createElement ('input');
let inputContents = document.createElement ('input');
let buttonTable = document.createElement ('button');

    buttonTable.innerText = 'Згенерувати таблицю';
    document.body.append (divThree, inputLines, inputCells, inputContents, buttonTable);

    buttonTable.onclick = function () {
        let tr = inputLines.value;
        let td = inputCells.value;
        let inner = inputContents.value;
        function generationTable (tr, td, inner) {
            let divTable = document.createElement('div');
            let table = document.createElement('table');
            divTable.append (table);
            document.body.append (divTable);

            for (let i = 0; i < tr; i++) {
                let tr = document.createElement('tr');
                for (let j = 0; j < td; j++) {
                    let td = document.createElement('td');
                    td.innerText = `${inner}`;
                    table.append (tr);
                    tr.append (td);
                }
            }
        }
    generationTable (tr, td, inner);
    }


//    - Сворити масив не цензцрних слів.
//        Сворити інпут текстового типу.
//        Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//        Перевірку робити при натисканні на кнопку

let censorious = [
    'сто копанок чортів тобі в печінку',
    'під три чорти',
    'бодай тебе чорти вхопили',
    'дідька лисого',
    'дідько б його вхопив',
    'де його чорти понесли'];

let divCensorious = document.createElement('div');
let inputCensorious = document.createElement('input');
let buttonCensorious = document.createElement('button');
    buttonCensorious.innerText = 'Перевірка вислову на чистоти';
    document.body.append (divCensorious, inputCensorious, buttonCensorious);

    buttonCensorious.onclick = function () {
        let valueCensorious = inputCensorious.value;
        for (let censor of censorious) {
            if (censor == valueCensorious) {
                alert ('Використання лайливих слів шкожить Вашому чистомовству!');
                return;
            }
        }
        if (valueCensorious) {
            alert ('Ваша мова чиста від лайливих слів');
        }
    }

    //зміна назви в зязку з глюком
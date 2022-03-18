// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

document.getElementById('buttonHide').onclick = function () {
    document.getElementById('text').hidden = true;
}

document.getElementById('buttonDisplay').onclick = function () {
    document.getElementById('text').hidden = false;
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

document.getElementById('buttonAge').onclick = function () {
  let age = document.getElementById('age').value;
    if (age < 18) {
        alert ('Перегляд контенту НЕ ДОЗВОЛЕНО!');
    } else {
        alert ('Весь контент відкритий для ВАС!');
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике

let menuElement = document.querySelector('.menu');
menuElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'Kanban, Scram', body: 'Пройдений матеріал з 20.12 до 28.12'},
    {title: 'HTML', body: 'Пройдений матеріал з 10.01 до 21.01. Мікропроет до 30.01'},
    {title: 'JS', body: 'Вивчення матеріалу з 31.01 до 20.03.'},
];

let divParent = document.createElement('div');
for (let item of comments) {
    let divBlock = document.createElement('div');
    let h2Block = document.createElement('h2');
    let pBlock = document.createElement('p');
    let btnHide = document.createElement('button');

        h2Block.innerText = item.title;
        pBlock.innerHTML = item.body;
        btnHide.innerHTML = 'Приховати';

        divBlock.append(h2Block, pBlock, btnHide);
        divParent.append (divBlock);
        btnHide.onclick = function ()  {
            pBlock.classList.add('pHide').hidden = false;
        }
}
    document.body.appendChild(divParent);
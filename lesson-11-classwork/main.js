// є масив -

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let favoritesKey = 'favorites';
    localStorage.setItem(favoritesKey, JSON.stringify([]));

let divParent = document.createElement('div');
for (let user of users) {
    let divBlock = document.createElement('div');
    let h2Block = document.createElement('h2');
    let pBlock = document.createElement('p');
    let btnAdd = document.createElement('button');

        h2Block.innerText = user.name;
        pBlock.innerHTML = `Вік: ${user.age}, Статус: ${user.status}`;
        btnAdd.innerHTML = 'Додати до улюблених';

        divBlock.append(h2Block, pBlock, btnAdd);
        divParent.append (divBlock);
        btnAdd.onclick = () => {
            let favor = document.getElementById ('favor');
            let favorites = JSON.parse(localStorage.getItem (favoritesKey));
                favorites.push (user);
                localStorage.setItem(favoritesKey, JSON.stringify (favorites));
            let pAdd = document.createElement ('p');
                pAdd.innerHTML = `Додано в улюблені. <a href="./favorites.html">Переглянути список</a>.`;
                divBlock.append (pAdd);
                btnAdd.hidden = true;
        }
}

    document.body.appendChild (divParent);
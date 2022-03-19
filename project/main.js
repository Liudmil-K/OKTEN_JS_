// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then (items => items.json())
    .then (items => {
        let usersDiv = document.createElement ('div');
        usersDiv.classList.add ('usersDiv');
        for (let item of items) {
            let userDiv = document.createElement ('div');
            userDiv.classList.add ('userDiv');
            let link = document.createElement ('a');
            link.classList.add ('link');
            link.innerText = `${item.id}) ${item.name}...`;
            link.href = `./user-details.html?data=${JSON.stringify (item)}`;
            userDiv.appendChild (link);
            usersDiv.appendChild (userDiv);
            document.body.appendChild (usersDiv);
        }
    });
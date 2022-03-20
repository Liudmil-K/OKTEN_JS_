// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

let user = JSON.parse (new URL (location.href).searchParams.get ('data'));

let userDiv = document.createElement ('div');
userDiv.classList.add ('userDiv');
userDiv.innerHTML = `
                    <p class="name">ID: ${JSON.stringify(user.id)}, name / username: ${JSON.stringify(user.name)} / ${JSON.stringify(user.username)}</p>
                    <p class="contacts">Contacts: ${JSON.stringify(user.email)}, ${JSON.stringify(user.address)}, ${JSON.stringify(user.phone)}</p>
                    <p class="company">Company: ${JSON.stringify(user.company)}, web: ${JSON.stringify(user.website)}</p>
                    `;
document.body.appendChild (userDiv);

let buttonDiv = document.createElement ('div');
buttonDiv.classList.add ('buttonDiv');
let postsButton = document.createElement ('button');
postsButton.innerText = 'post of current user';

buttonDiv.appendChild (postsButton);
document.body.appendChild (buttonDiv);

postsButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then (items => items.json())
        .then (items => {
            let postsDiv = document.createElement ('div');
            postsDiv.classList.add ('postsDiv');

            for (const item of items) {
                let postDiv = document.createElement('div');
                postDiv.classList.add ('postDiv');
                let linkPost = document.createElement ('a');
                linkPost.classList.add ('link');
                linkPost.innerHTML = `
                    <h3 class="title">${item.title}</h3>
                    <p class="bodis">${item.body}</p>
                    `;
                linkPost.href = `./post-details.html?data=${JSON.stringify (item)}`;
                postDiv.appendChild (linkPost);
                postsDiv.appendChild (postDiv);
                document.body.appendChild (postsDiv);
            }
        });
    postsButton.hidden = true;
    buttonDiv.hidden = true;
};
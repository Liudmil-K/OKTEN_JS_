// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let post = JSON.parse(new URL(location.href).searchParams.get('data'));

let postDiv = document.createElement ('div');
postDiv.classList.add ('postDiv');
postDiv.innerHTML = `
                    <p class="id">PostID / ID: ${JSON.stringify(post.userId)} / ${JSON.stringify(post.id)}</p>
                    <h2 class="name">${JSON.stringify(post.title)}</h2>
                    <p class="content">${JSON.stringify(post.body)}</p>
                    `;
document.body.appendChild (postDiv);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(items => items.json())
    .then(items => {
        let commentsDiv = document.createElement ('div');
        commentsDiv.classList.add ('commentsDiv');
        for (let item of items) {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add ('commentDiv');
            commentDiv.innerHTML = `
                    <h3 class="titles">${item.name}</h3>
                    <p class="bodys">${item.body}</p>
                    `;
            commentsDiv.appendChild(commentDiv);
            document.body.appendChild (commentsDiv);
        }
    });
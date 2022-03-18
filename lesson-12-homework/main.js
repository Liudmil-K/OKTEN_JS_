// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then (content => content.json())
    .then (posts => {
        let divPosts = document.createElement ('div');
        divPosts.classList.add ('divPosts');
        for (let post of posts) {
            let divPost = document.createElement ('div');
            divPost.classList.add('divPost');
            divPost.innerHTML = `
                    <p class="id">ID: ${post.id}, userId: ${post.userId}</p>
                    <h3>${post.title}</h3>
                    <p class="coment">${post.body}</p>
                    `;
            divPosts.appendChild (divPost);
            document.body.append (divPosts);
        }
    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then (content => content.json())
    .then (comments => {
        let divComments = document.createElement ('div');
        divComments.classList.add ('divComments');
        for (let comment of comments) {
            let divComment = document.createElement ('div');
            divComment.classList.add('divComment');
            divComment.innerHTML = `
                    <p class="id">ID: ${comment.id}, postId: ${comment.postId}, e-mail: ${comment.email}</p>
                    <h3>${comment.name}</h3>
                    <p class="coment">${comment.body}</p>
                    `;
            divComments.appendChild (divComment);
            document.body.append (divComments);
        }
    });
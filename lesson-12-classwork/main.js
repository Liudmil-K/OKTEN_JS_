// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(content => {
        return content.json();
    })
    .then(posts => {
        let divPosts = document.createElement('div');
            divPosts.classList.add('divPosts');
        for (const post of posts) {
            let divPost = document.createElement('div');
                divPost.classList.add('divPost');
                divPost.innerHTML = `
                    <p class="id">ID: ${post.id}, userId: ${post.userId}</p>
                    <h3>${post.title}</h3>
                    <p class="coment">${post.body}</p>
                    `;
            let button = document.createElement('button');
                button.innerText = 'Click Comments';
                button.onclick = (id) => {
                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                        .then(content => content.json())
                        .then(comments => {
                            for (const comment of comments) {
                                if (post.id === comment.postId) {
                                    let divPostComments = document.createElement('div');
                                        divPostComments.classList.add('divPostComments');
                                        divPostComments.innerHTML = `
                                            <p class="id">ID: ${comment.id}, postId: ${comment.postId}, e-mail: ${comment.email}</p>
                                            <h3>${comment.name}</h3>
                                            <p class="coment">${comment.body}</p>
                                            `;
                                        divPost.appendChild(divPostComments)
                                    }
                                        button.hidden = true;
                            }
                        })
                }
                divPost.appendChild (button);
                divPosts.appendChild (divPost);
                document.body.appendChild (divPosts);
        }
    });
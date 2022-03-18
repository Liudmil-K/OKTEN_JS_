let favoritesKey = 'favorites';
let favor = document.getElementById ('favor');
let users = JSON.parse (localStorage.getItem (favoritesKey));

users.forEach(user => {
    let userDiv = document.createElement ('div');
    let content = document.createElement ('div');
        content.innerText = `І'мя фаварита: ${user.name}\nВік: ${user.age}\nСтатус: ${user.status}\n`;
        userDiv.append (content);
        favor.append (userDiv);
});
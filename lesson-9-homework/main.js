// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement ('div');
div.classList.add ('wrap', 'collapse', 'alpha', 'beta');
div.style = `background-color: yellow;
    color = 'blue';
    fontSize = '40px';
  `;
document.body.append (div);
document.body.append (div.cloneNode (true));

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const element of coursesAndDurationArray) {
    let divElement = document.createElement ('div');
    divElement.innerText = `${element.title} ${element.monthDuration}`;
    document.body.appendChild (divElement);
}

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let divElement = document.createElement ('div');
    let h1 = document.createElement ('h1');
    let p = document.createElement ('p');
    h1.classList.add ('heading');
    p.classList.add ('description');
    h1.innerText = element.title;
    p.innerText = element.monthDuration;
    divElement.appendChild (h1);
    divElement.appendChild (p);
    document.body.appendChild (divElement);
}
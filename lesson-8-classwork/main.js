// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

document.getElementById('main_header').innerText = 'Enter the name of your group '; // a) додає клас з назвою групи, елементу з ід main_header

document.getElementsByTagName('ul')[0].style.width = '400px'; // b) робить шириниу елементу ul 400px

for (let liElement of document.getElementsByClassName('linkList')) {liElement.style.width = '50%';} // c) робить шириниу всіх елементів з класом linkList шириною 50%

document.getElementsByClassName('listElement2')[0].innerHTML = 'Замінний текст'; // d) заміна текста який зберігається в елементі з класом listElement2

for (let liAllElement of document.getElementsByTagName('li')) {liAllElement.style.backgroundColor = 'grey';} // e) отримує всі елементи li та змінює ім колір фону на сірий

for (let aAllElement of document.getElementsByTagName('a')) {aAllElement.classList.add('anchor');} // f) отримує всі елементи 'a' та додає їм клас anchor

for (let aAllElement of document.getElementsByTagName('a')) {
     if (aAllElement.innerText === 'link3') {
         aAllElement.style.fontSize = '40px';
     }
} // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів


for (let aAllElement of document.getElementsByTagName('a')) {
     let newClass = aAllElement.innerText;
     aAllElement.classList.add(`Element_${newClass}`);
}// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const pElement of document.getElementsByTagName('p')) {pElement.style.padding = '20px';} // l) отримати елементи p та змінити їм padding на 20px

document.getElementsByClassName('text2')[0].innerText = 'new-class'; // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
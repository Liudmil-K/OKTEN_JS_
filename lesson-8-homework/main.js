// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :

let contentById = document.getElementById('content'); // -- отримує текст з параграфа з id "content"

let rulesById = document.getElementById('rules'); // -- отримує текст з блоку з id "rules"

contentById.innerHTML = (`Замінний текст параграфа content`); // -- замініть текст параграфа з id 'content' на будь-який інший

rulesById.innerHTML = (`Замінний текст параграфа rules`) // -- замініть текст параграфа з id 'rules' на будь-який інший

for (const element of document.body.children) {element.style.backgroundColor = 'red';} // -- змініть кожному елементу колір фону на червоний

for (const element of document.body.children) {element.style.color = 'blue';} // -- змініть кожному елементу колір тексту на синій

console.log((document.getElementById('rules')).classList); // -- отримати весь список класів елемента з id=rules і вивести їх в console.log

for (const element of document.getElementsByClassName('fc_rules')) {element.style.color = 'red'} // -- поміняти колір тексту у всіх елементів fc_rules на червоний
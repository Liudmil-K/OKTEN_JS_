//0) Зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]:

let mainArray = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while.

console.log('перебрати його циклом while');
let j = 0;
while (j < mainArray.length) {
    let mainArrayElement = mainArray[j];
    console.log(mainArray[j]);
    j++;
}

// 2. перебрати його циклом for.

console.log('перебрати його циклом for');
for (let i = 0; i < mainArray.length; i++) {
    console.log(mainArray[i]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

console.log('while з непарним індексом');
let i = 1;
while (i < mainArray.length) {
    let mainArrayElement = mainArray[i];
    console.log(mainArray[i]);
    i+=2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

console.log('for з непарним індексом');
for (let i = 1; i < mainArray.length; i+=2) {
    console.log(mainArray[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

console.log('while парні значення');
let x = 0;
while (x < mainArray.length) {
    if (mainArray[x] % 2 === 0) {
        let mainArrayElement = mainArray[x];
        console.log(mainArray[x]);
    }
    x++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

console.log('for парні значення');
for (let i = 0; i < mainArray.length; i++) {
    if (mainArray[i] % 2 === 0) {
        console.log(mainArray[i]);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

console.log('число кратне 3 замінити на "okten"');
for (let i = 0; i < mainArray.length; i++) {
    if (mainArray[i] % 3 === 0) {
        mainArray[i] = 'okten';
    }
    console.log(mainArray[i]);
}

// 8. вивести масив в зворотньому порядку.

let reverseArray = [2,17,13,6,22,31,45,66,100,-18];
document.write(`<h2>масив в зворотньому порядку</h2>`);
for (let i = reverseArray.length-1; i >= 0; i--) {
    document.write(`<p>${reverseArray[i]}</p>`);
}

// 9. перебрати його циклом while в зворотньому порядку

document.write('<h2>while в зворотньому порядку</h2>');
let z = reverseArray.length-1;
while (z >= 0) {
    let reverseArrayElement = reverseArray[z];
    document.write(`<p>${reverseArray[z]}</p>`);
    z--;
}

// 10. перебрати його циклом for в зворотньому порядку

document.write('<h2>for в зворотньому порядку</h2>');
for (let i = reverseArray.length-1; i >= 0; i--) {
    document.write(`<p>${reverseArray[i]}</p>`);
}

// 11. перебрати циклом while та вивести  числа тільки з непарним індексом в зворотньому порядку

document.write('<h2>while з непарним індексом в зворотньому порядку</h2>');
let c = reverseArray.length-1;
while (c >= 0) {
    let reverseArrayElement = reverseArray[c];
    document.write(`<p>${reverseArray[c]}</p>`);
    c-=2;
}

// 12. перебрати циклом for та вивести  числа тільки з непарним індексом в зворотньому порядку

document.write('<h2>for з непарним індексом в зворотньому порядку</h2>');
for (let i = reverseArray.length-1; i >= 0; i-=2) {
    document.write(`<p>${reverseArray[i]}</p>`);
}

// 13. перебрати циклом while та вивести  числа тільки парні  значення в зворотньому порядку

document.write('<h2>while парні значення в зворотньому порядку</h2>');
let y = reverseArray.length-1;
while (y >= 0) {
    if (reverseArray[x] % 2 === 0) {
        let reverseArrayElement = reverseArray[y];
        document.write(`<p>${reverseArray[y]}</p>`);
    }
    y--;
}

// 14. перебрати циклом for та вивести  числа тільки парні  значення в зворотньому порядку

document.write('<h2>for парні значення в зворотньому порядку</h2>');
for (let i = reverseArray.length-1; i >= 0; i--) {
    if (reverseArray[i] % 2 === 0) {
        document.write(`<p>${reverseArray[i]}</p>`);
    }
}

// 15. замінити кожне число кратне 3 на слово "okten" в зворотньому порядку

document.write('<h2>число кратне 3 замінити на "okten" в зворотньому порядку</h2>');
for (let i = reverseArray.length-1; i >= 0; i--) {
    if (reverseArray[i] % 3 === 0) {
        reverseArray[i] = 'okten';
    }
    document.write(`<p>${reverseArray[i]}</p>`);
}
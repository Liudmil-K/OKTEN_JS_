// - Знайти та вивести довжину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'okten hello !';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
    console.log(`Довжина стрігового значення:
        "${str1}"=>${str1.length} символів,
        "${str2}"=>${str2.length} символів,
        "${str3}"=>${str3.length} символів.`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strUp1 = str1.toUpperCase(); //toUpperCase - toLowerCase
let strUp2 = str2.toUpperCase();
let strUp3 = str3.toUpperCase();
    console.log(`Змінимо всі літери на великий регістр:
        "${str1}"=>${strUp1},
        "${str2}"=>${strUp2},
        "${str3}"=>${strUp3}.`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

    console.log(`Змінимо всі літери на нижній регістр:
        "${strUp1}"=>${strUp1.toLowerCase()},
        "${strUp1}"=>${strUp1.toLowerCase()},
        "${strUp1}"=>${strUp1.toLowerCase()}.`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';
let strClean = strDirty.trim().replaceAll('  ', '');
    console.log(`Почистемо від зайвих пробілів:
        "${strDirty}"=>${strClean}.`);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';

let stringToarray = (text, separator) => {
    let arrayStrNew = [];
    let arrayStr = text.split(separator); //розподільний знак
    let j = arrayStr.length-1;
        document.writeln(`<p>З стрінги "${text}" створено массив з ${arrayStr.length} агументів =></p><h3>[`);
    for (let i = 0; i < j; i++) {
        arrayStrNew[i] = arrayStr[i];
        document.writeln (`'${arrayStr[i]}', `);
    }
        document.writeln (`'${arrayStr[j]}' ]</h3>`);
    arrayStrNew[j];
    return arrayStr;
}

stringToarray(str, ' ');

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (text, length) => {
    if ((typeof text === 'string') && (length>0)) {
        return text.slice(0, length);
    }
};

document.writeln('<p>Підрядок фрази виглядає, як =></p><h3>'+delete_characters(str, 7)+'</h3>');

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insertDash = (find, replace, str) => {
    while (str.indexOf(find) > 0) {
        str = str.replace(find, replace); //(знайти, замінити, де)
    }
    let strUp = str.toUpperCase();
    document.writeln(`<p>Змінемо текст ${str} замінивши "${find}" на "${replace}", 
                    всі літери в ВЕРХНЬОМУ регістрі =></p><h3>${strUp}</h3>`);
}

insertDash(' ', '-', 'HTML JavaScript PHP');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let upArgument = (argument) => {
    let upFirst = argument.charAt(0).toUpperCase() + argument.slice(1);
    document.writeln(`<p>Замінемо першу літеру тексту "${argument}" на прописну =></p><h3>${upFirst}</h3>`);
    return upFirst;
}

upArgument('курси JS');

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


let capitalize = (strUp) => {
    return strUp.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}); //всі символи на початку без пробілів, та після пробілу і перевести в верхній регістр
}

document.writeln(`<p>Всі прописні літери =></p><h3>`+capitalize('кобзаренко людмила олександрівна')+`</h3>`);
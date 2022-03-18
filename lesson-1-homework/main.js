// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
    let str0 = `Hello`;
    let str1 = `owu`;
    let str2 = `com`;
    let str3 = `ua`;
    let num0 = 1;
    let num1 = 10;
    let num2 = -999;
    let num3 = 123;
    let num4 = 3.14;
    let num5 = 2.7;
    let num6 = 16;
    let bool1 = true;
    let bool0 = false;
    console.log(str0+'! Welcome to the site: '+str1+'.'+str2+'.'+str3+'. T: '+num0+num1+num2+num3+num4+num5+num6+'. Here you will learn what is '+bool1+' and what is '+bool0+'!');
    alert(str0+', on the site '+str1+'.'+str2+'.'+str3+' your API: '+num0+num1+num2+num3+num4+num5+num6+'. '+bool1+' or '+bool0+'?');
    document.write("<h2>" + str0 + "!</h2><h1>" + str1 + "." + str2 + "." + str3 + "</h1><p>Call us " + num0 + num1 + num2 + num3 + num4 + num5 + num6 + ".</p><p>" + bool1 + "</p><p>" + bool0 + "</p>");
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
    str0 = `JavaScript`;
    str1 = `is the`;
    str2 = `programming`;
    str3 = `language`;
    num0 = 380;
    num1 = 9;
    num2 = 88;
    num3 = 0;
    num4 = 40;
    num5 = 80;
    num6 = 8;
    bool1 = 'Yes';
    bool0 = 'No';
    console.log(str0+' '+str1+' '+str2+' '+str3+' of the Web. T: '+num0+num1+num2+num3+num4+num5+num6+'. Call now '+bool1+' or '+bool0+'?');
    alert(str0+' '+str1+' world\'s most popular '+str2+' '+str3+'. Now your API: '+num4+num5+num6+num0+num1+num2+num3+'. '+bool1+' or '+bool0+'?');
    document.write("<h1>" + str0 + " " + str1 + " " + str2 + " " + str3 + "</h1><p>Call us " + num0 + num1 + num2 + num3 + num4 + num5 + num6 + ".</p><p>" + bool1 + "</p><p>" + bool0 + "</p>");
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
    let firstName = `Kobzarenko`;
    let middleName = `Oleksandrivna`;
    let lastName = `Liudmila`;
    let person = (firstName+` `+lastName+` `+middleName);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
    let last = prompt("What is your name?", "Name"),
        middle = prompt('What is your middle name?', `MiddleName`),
        age = prompt('How old are you?', 100);
    alert(`Вітаю, ${last} ${middle}! Тобі ${age} років.`);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100;
    let b = '100';
    let c = true;
    console.log(typeof(a) + " " + typeof(b) + " " + typeof(c));
// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
    // 5 < 6 -> true
    // 5 > 6 -> false
    // 5 = 6 -> false
    // 5 === 6 -> false
    // 10 = 10 -> true
    // 10 === 10 -> true
    // 10 > 10 -> false
    // 10 < 10 -> false
    // 10 != 10 -> false
    // 123 === '123' -> false
    // 123 == '123' -> true
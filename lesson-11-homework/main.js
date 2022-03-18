// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let name = document.getElementById('nameUser');
let age = document.getElementById('ageUser');
let btnUser = document.getElementById('buttonUser');
let user = 'user';

let sendUser = (userName, userAge) => {localStorage.setItem (user, JSON.stringify ({name: userName, age: userAge}));};
    btnUser.onclick = () => {sendUser (name.value, age.value);}


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let model = document.getElementById('modelСar');
let type = document.getElementById('typeСar');
let volume = document.getElementById('volumeСar');
let btnCar = document.getElementById('buttonСar');
let cars = 'car';

let sendCar = f (modelCar, typeCar, volumeCar) = {
    let newArray = JSON.parse(localStorage.getItem(cars)) || [];
    newArray.push({modelCar, typeCar, volumeCar})
    localStorage.setItem(cars, JSON.stringify(newArray));
};

    btnCar.onclick = () => {sendCar (model.value, type.value, volume.value);}
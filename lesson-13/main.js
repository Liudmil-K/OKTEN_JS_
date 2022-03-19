setTimeout (() => {
    let counter = 7;
    console.log ('Найкращий час для сніданку', counter);
    setTimeout (() => {
        counter=counter+6;
        console.log ('Пообідати ліпше в', counter);
        setTimeout (() => {
            counter=counter+5;
            console.log ('Ну а вечеря буде чекати тебе о', counter)
        }, 500)
    }, 500);
}, 500);

let promise = new Promise ((resolve, reject) => {
    setTimeout (() => {
        let counter = 0;
        console.log ('Прокидайся в 6.30, щоб все встигнути!');
        resolve (counter);
    }, 2000)
});
promise
    .then(counter => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                counter++;
                console.log (counter, 'Перед сніданком не забудьте почистити зуби');
                resolve (counter);
            }, 500);

        })
    })
    .then(value => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                value++;
                console.log (value, 'Ранок найпродуктивніший для вивчення чогось нового!');
                resolve (value);
            }, 500)
        });
    })
    .then(value => {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                value++;
                console.log (value, 'Не забудь зупинитися на обід і продовжуй навчання');
                resolve (value);
            }, 500)
        })
    })
    .then(value => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                value++;
                console.log (value, 'До вечері потрібно багато чого встигнути!');
                resolve (value);
            }, 500)
        })
    })
    .then(value => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                value++;
                console.log (value, 'Присвяти вечір родині!');
                resolve (value);
            }, 500)
        })
    })

let counter = 0;
console.log('Мій графік', counter);
setTimeout (() => {
    counter++;
    console.log ('Понеділок', counter);
    setTimeout (() => {
        counter++;
        console.log ('Вівторок', counter);
        setTimeout (() => {
            counter++;
            console.log ('Середа', counter);
            setTimeout (() => {
                counter++;
                console.log ('Черверг', counter);
                setTimeout (() => {
                    counter++;
                    console.log ('Пятниця', counter);
                    setTimeout (() => {
                        counter++;
                        console.log ('Субота', counter);
                        setTimeout (() => {
                            counter++;
                            console.log ('Неділя', counter);
                        }, 500)
                    }, 500)
                }, 500)
            }, 500)
        }, 500)
    }, 500)
}, 5000)
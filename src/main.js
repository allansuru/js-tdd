// const fetch = require("node-fetch");

const name = 'Allan';

const convertToArray = Array.from(name);
console.log(convertToArray);

const data = [
    {
        name: 'Allan'
    },
    {
        name: 'Gui'
    }
]

const existe = data.some(item => item.name === 'Gui')

console.log(existe);



const multiply = (mult, ...args) => args.map(value => mult * value);


console.log(multiply(2, 1, 2, 3));

const currency = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ currency: 'dolar', value: 4.50 })
    }, 1000);
});

const countries = new Promise((resolve) => {
    setTimeout(() => {
        resolve(['Ireland', 'England', 'Scotland']);
    }, 1000);
});

const resolveds = Promise.all([currency, countries]);

resolveds.then(itens => {
    console.log(itens)
})



// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => json.filter(item => item.userId === 10))
//     .then(d => console.log(d))
//     .catch(err => console.log(err.message))


var txt = 'Brasil' //iterable



for (let letter of txt) {
    console.log(letter)
    if (letter === 'a') break;
}




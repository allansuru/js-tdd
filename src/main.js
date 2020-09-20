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
    // console.log(itens)
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


function* getNames() {
    yield _a;
    yield _b;
    yield 'C';
}

const _a = 'A'
const _b = 'B'

const names = getNames()

console.log(names.next())
console.log(names.next())


console.log('1'.padStart(11, '0'))
console.log('1'.padEnd(11, '0'))

console.log(2 ** 3) // Mat.pow(2,3)

const exist = [1, 2, 3, 4, 5, 99].includes(99);
console.log(exist);

const animals = {
    cat: 1,
    dog: 2,
    bear: 3,
    horse: 4
}

const animalsMap = new Map(Object.entries(animals))
console.log(animalsMap.size)
console.log(animalsMap.has('cat'))

for (const a of animalsMap) {
    console.log(a);
}

console.log(Object.values(animals).reduce((acc, cur) => acc + cur))

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


console.log(multiply(2, 1, 2, 3))


var defer = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve(console.log('RESOLVEU'))
        } else {
            reject(console.log('NAO RESOLVEU'))
        }
    }, 2000);
})

defer
    .then(data => {
        console.log(data);
        return `ronaldo`;
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
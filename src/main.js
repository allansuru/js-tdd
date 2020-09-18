
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
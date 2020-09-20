let mySet = new Set(['Allan', 'Gui', 'Ka'])

mySet.add('Kim');

// console.log(mySet)

for (const iterator of mySet) {
    console.log(iterator)
    if (iterator === 'Kim') {
        console.log(`${iterator}, is a cat`)
    }
}

let map = new Map();

map.set('Allan', 35);
map.set('Gui', 4)

console.log(map)

for (const m of map) {
    console.log(m)
}
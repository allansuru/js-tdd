let mySet = new Set(['Allan', 'Gui', 'Ka'])

mySet.add('Kim');

// console.log(mySet)

for (const iterator of mySet) {
    console.log(iterator)
    if (iterator === 'Kim') {
        console.log(`${iterator}, is a cat`)
    }
}
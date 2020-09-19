const fetch = require("node-fetch");


function ajax(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => dados.next(data))
}



function* ajaxGen() {
    console.log('Buscando post...')
    const posts = yield ajax('https://jsonplaceholder.typicode.com/todos/1');
    console.log(posts)

    console.log('Buscando dados do git allansuru');
    const ap = yield ajax('https://api.github.com/users/allansuru');
    console.log(ap)
}

const dados = ajaxGen();

dados.next();

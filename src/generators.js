const fetch = require("node-fetch");


function ajax(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => dados.next(data))
}


function* ajaxGen() {
    console.log('Buscando post 1...')
    const posts = yield ajax('https://jsonplaceholder.typicode.com/todos/1');
    console.log(posts)

    console.log('Buscando post 2...')
    const posts2 = yield ajax('https://jsonplaceholder.typicode.com/todos/2');
    console.log(posts2)



    console.log('Buscando dados do git allansuru');
    const { blog, name } = yield ajax('https://api.github.com/users/allansuru');
    console.log(blog, name)
}

const dados = ajaxGen();

dados.next();

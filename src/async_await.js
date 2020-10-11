import fetch from "node-fetch";


// const user = fetch('https://api.github.com/users/allansuru');

// user
//     .then(data => data.json())
//     .then(data => console.log(data.name))

/**
 * async/await funciona obrigatoriamente no protoclo de Promises
 * async é uma palavra chave usada no início de uma função
 * await é usada para avisar a função para esperar o resultado da Promise
 * await só pode ser usado para uma função com async
 * async/await já está funcionando em quase todos os Browsers e NodeJs
 * usando async/await o código fica mais simplificado
 * mais fácil de debugar por ter menos callbacks
 * simples e menos encadeado
 */


async function getUser(user) {
    try {
        const responseA = await fetch(`https://api.github.com/users/${user}`)


        const data = await responseA.json();

        console.log(data)


        return data;
    } catch (err) {
        console.log('ERRO: ', err)
    }
}

async function getUsers(...users) {
    try {
        const promises = users.map(user => fetch(`https://api.github.com/users/${user}`).then(resp => resp.json()))

        const result = await Promise.all([...promises]);

        console.log(result);

        return result;

    } catch (err) {
        console.log('ERRO: ', err)
    }
}




getUser('allansuru')
getUsers('allansuru', 'jesus', 'maria')
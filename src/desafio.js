// filtrar maior que zero
// mapear objeto nome, quantidade e preco
// retorna total do preco

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 3, preco: 19.20 },
    { nome: 'PS5', qtde: 1, preco: 6000.00 },
]

const filterByQuantity = (item, quantity) => item > quantity;
const mountObject = ({ nome, qtde, preco }) => ({ nome, total: qtde * preco })


const desafio = carrinho
    .filter(({ qtde }) => filterByQuantity(qtde, 3))
    .map((item) => mountObject(item))


console.log(desafio);

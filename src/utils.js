

function sum(a, b) {
    return a + b;
}

// named export
// ter vários export dentro de uma msm arquivo
// só pode chamar com o mesmo nome entre chaves{}
export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const PI = 3.14

export { mult as multiplicacao, div, PI }



// método principal
// somente um default por arquivo
// importar com qq nome
// nao precisa utilizar as chaves
export default sum;
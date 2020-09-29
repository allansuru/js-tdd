import * as R from 'ramda'

import sum, { sub, multiplicacao, div as dividir, PI } from './src/utils'

const { identity } = R
R.map(identity, [1, 2, 3])

const removeDuplicate = R.union([1, 2, 3], [2, 3, 4]);

console.log(removeDuplicate);

console.log(sum(1, 4))

console.log(sub(2, 1))

console.log(multiplicacao(2, 2))

console.log(dividir(2, 2))

console.log(PI)
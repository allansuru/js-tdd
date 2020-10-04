import * as R from 'ramda'

import sum, { sub, multiplicacao, div as dividir, PI } from './src/utils'

import react from 'react';
import reactDom from 'react-dom'

const { identity } = R
R.map(identity, [1, 2, 3])

const removeDuplicate = R.union([1, 2, 3], [2, 3, 4]);

console.log(removeDuplicate);

console.log(sum(1, 4))

console.log(sub(2, 1))

console.log(multiplicacao(20, 100))

console.log(dividir(10, 2))

console.log(PI)
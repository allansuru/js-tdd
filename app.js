import * as R from 'ramda'

import sum from './src/utils'

const { identity } = R
R.map(identity, [1, 2, 3])

const removeDuplicate = R.union([1, 2, 3], [2, 3, 4]);

console.log(removeDuplicate);

console.log(sum(1, 4))
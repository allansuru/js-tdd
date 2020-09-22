import * as R from 'ramda'

const { identity } = R
R.map(identity, [1, 2, 3])

const removeDuplicate = R.union([1, 2, 3], [2, 3, 4]);

console.log(removeDuplicate);


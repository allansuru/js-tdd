import * as R from 'ramda'

const { identity } = R
R.map(identity, [1, 2, 3])

const removeDuplicate = R.union([1, 2, 3, 4, 5], [2, 3, 4, 5]);

console.log(removeDuplicate);


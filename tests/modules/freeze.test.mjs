import { deepFreeze } from '../../lib/index';

const obj = deepFreeze({
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
});

console.log(obj);
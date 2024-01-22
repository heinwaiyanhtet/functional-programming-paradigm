let arr = [1,2,3,4,5,6];
let fn = (num) => num % 2 === 0;

const result = arr.reduce(
    (x,y) => (  x === undefined && fn(y) ? y : x),
    undefined
)
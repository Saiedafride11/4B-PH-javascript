const athem = 'Amar Sonar Bangla Ami Tomai Valobasi';
// split
const space = athem.split(' ');
console.log('split', space);
const withOutA = athem.split('a');
console.log('split', withOutA);
//splice
var numbers = [12, 14, 16, 17, 19, 20, 7, 8, 9]
var splice = numbers.splice(1, 4, 188, 666, 888, 3333) // start, koita katbo, kata jaigai baki gulu dukbe
console.log('splice', splice);
// slice
const smallSlice = athem.slice(5, 9); // start, end
console.log('slice', smallSlice);
// substring
const subString = athem.substring(8, 15); // start, end
console.log('substring', subString);
// substr
const subStr = athem.substr(7, 5); // start, koita lagbe
console.log('substr', subStr);

//concat
const first = 'amader';
const second = ' City';
// const result = first + second;
const result = first.concat(second);
console.log('concat', result);

//join
const name = ['kamal', 'jamal', 'tamal']
const join = name.join(', ');
console.log('join', join);

// var numbers = [12, 14, 16, 20];
// numbers.push(6);
// console.log(numbers);

// var numbers = [12, 14, 16, 20];
// var result = numbers.push(17, 19, 20, 6);
// console.log(result);

var numbers = [12, 14, 16, 20];
var sum = numbers.reduce((prevValue, currtValue, currtIndex, arr) => {
    return prevValue + currtValue
}, 0);

console.log(sum)

// React ema john simple cart.js
 // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
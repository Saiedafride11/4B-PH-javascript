/*Data type
----------- Primitive Data type-------------------------
string
number
boolean
undefined
null
symbol
---------- Non Primitive Data type-------------------------
object
*/


// -------------- Primitive Data type------------------------
let a = 'hello';
let b = a;
console.log(a, b);
a = 'gello';
console.log(a, b);
// --------- Non Primitive Data type-------------------------
const x = {job: 'web developer'}
const y = x;
console.log(x, y);
x.job = 'Front end developer';
console.log(x, y);
// 1. varriabe value not assigned
// 2. function, but didnot write return anything
// 3. just wrote return, but didn't return anything
// 4. parameter that isnt pass
// 5. Property that doesnot exist is an object
// 6. accessing array element out of range
// 7. accessing deleted array element
// 8. explicitly set value to undefined
//---------------------------------------------------------------
let first;
console.log(first);
//---------------------------------------------------------------
function second(x, y){
    const sum = x + y;
}
console.log(second(5, 7));
//---------------------------------------------------------------
function third(x, y){
    const sum = x + y;
    if(y < 10){
        return
    }
    const fun = x * y;
    return sum
}
console.log(third(5, 7))
//---------------------------------------------------------------
function fourth(x, y){
    const sum = x + y;
    console.log(y)
    return sum
}
fourth(12)
//---------------------------------------------------------------
const fifth = {id: 12, name: "saied", job:'army'};
console.log(fifth.phone)
//---------------------------------------------------------------
const sixth = [12, 13, 15];
console.log(sixth[4])
//---------------------------------------------------------------
const seven = [12, 13, 15];
delete seven[2]
console.log(seven[2])
//---------------------------------------------------------------
const eight = undefined
console.log(eight)
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------

const obj = {id: 12, name:null};
// function add(num1, num2){
//     const result = num1 + num2;
//     return result;
// }
// console.log(add(12, 5))


// function add(num1, num2){
//     if(num2 == undefined){
//         num2 = 0;
//     }
//     const total = num1 + num2;
//     return total;
// }
// console.log(add(12))



// function add(num1, num2 = 0){
//     num2 = num2 || 0;
//     const total = num1 + num2;
//     return total;
// }
// console.log(add(12))



function add(num1, num2){
    num2 = num2 || 0;
    const total = num1 + num2;
    return total;
}
console.log(add(12))
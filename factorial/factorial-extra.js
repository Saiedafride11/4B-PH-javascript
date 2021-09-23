// let sum = 0;
// for (var i = 1; i <= 6; i++){
//     sum = sum + i;
// }
// console.log(sum);


// let sum = 0;
// for (var i = 6; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);


// function sum(i){
//     if(i == 1){
//         return 1;
//     }
//     return sum(i - 1) + i;
// }
// console.log(sum(6));


// function sum(i){
//     if(i == 1){
//         return 1;
//     }
//     return i + sum(i - 1);
// }
// console.log(sum(6));

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

// 6! = 6 * 5 * 4 * 3 * 2 * 1

// let factorial = 1
// for (var i = 1; i <= 6; i++) {
//     factorial = factorial * i
// }
// console.log(factorial);

// let factorial = 1
// for (var i = 6; i >=1; i--) {
//     factorial = factorial * i
// }
// console.log(factorial)

// function factorial(i){
//     if(i == 1){
//         return 1;
//     }
//     return factorial(i -1) * i;
// }
// console.log(factorial(6))


// function factorial(i){
//     if(i == 1){
//         return 1;
//     }
//     return i * factorial(i -1);
// }
// console.log(factorial(6))

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
// const fibo = [0, 1];
// for (let i = 2; i <= 6; i++){
//     // fibo[2] = fibo[1] + fibo[0];
//     // fibo[3] = fibo[2] + fibo[1];
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);


function fibo(i) {
    if(i == 0){
        return 0;
    }
    if(i == 1){
        return 1;
    }
    return fibo(i - 1) + fibo(i - 2);
}
console.log(fibo(6));
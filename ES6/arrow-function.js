

// Normal function

function add(num1, num2){
    const result =num1 + num2;
    return result;
}
console.log(add(5,6));

// function expression
const add2 = function add2(num1, num2){
    const result =num1 + num2;
    return result;
}
console.log(add2(7,8));

// function expression (anonymous)
const add3 = function (num1, num2){
    const result =num1 + num2;
    return result;
}
console.log(add3(9,1));



// function expression (anonymous)
const add4 = (num1, num2) =>{
    const result = num1 + num2;
    return result;
}
console.log(add4(12,1));
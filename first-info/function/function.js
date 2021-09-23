function turnfan(){
    console.log("Turn Your fan")
}
turnfan();


function bingSingara(taka){
    console.log("Singara kabo", taka);
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 500;
var singara = bingSingara(money);
console.log("Total singara", singara);



function sum(num1, num2){
    var num = num1 + num2;
    return num
}
var result = sum(5,5)
console.log("sum", result)
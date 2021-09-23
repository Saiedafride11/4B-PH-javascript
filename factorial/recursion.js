// !5 = 1*2*3*4*5


function factorialNumber(num){
    for(var i = 1; i<=num; i++){
        console.log(i)
    }
}
var result = factorialNumber(5);
console.log("result",result)



function factorialNumber(num){
    var fact = 1;
    for(var i = 1; i<=num; i++){
        var fact = fact * i;
        // console.log(i, fact)
    }
    return fact;
}
var result = factorialNumber(10);
console.log(result)




function factorialRecursive(num){
    if(num == 1){
        // console.log("num")
        return 1;
    }
    else{
        // console.log(num, num-1)
        return num * factorialRecursive(num-1);
    }
}
var result = factorialRecursive(5);
console.log(result)
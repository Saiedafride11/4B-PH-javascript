var i = 0;
while(i <= 10){
    console.log(i);
    i++;
}



var i = 1;
var factorial = 1;
while(i <=10){
    factorial = factorial * i;
    console.log(i, factorial);
    i++;
}



var i = 1;
var factorial = 1;
while(i<= 10){
    factorial = factorial * i;
    i++;
}
console.log(factorial);



function factorialCheck(n){
    var i = 1;
    var factorial = 1;
    while(i<= n ){
        factorial = factorial * i;
        i++;
    }
    return factorial
}
var result = factorialCheck(5);
console.log(result);
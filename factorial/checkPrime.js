var n = 18;
for(var i = 2; i< n; i++){
    console.log(i, n % i  );
    if(n % i == 0){
        console.log("it is not prime");
        break;
    }
}


var n = 79;
for(var i =2; i < n; i++){
    if(n%i==0){
        console.log("Not prime");
        break;
    }
}
console.log("prime number");


function isPrime(n){
    for(var i = 2; i< n; i++){
        if(n % i == 0){
            return 'is Not prime****************************'
        }
    }
    return ' Prime Number*******************************'
}
var result = isPrime(128);
console.log(result);
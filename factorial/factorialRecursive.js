// 10! = 1*2*3*4*5*6*7*8*9*10
//0! = 1
//2! = 1*2
//5! = 4!*5
// 6!= 5!*6
//8! = (8-1)! * 8;
//9! = (9-1)! * 9;
//n! = (n-1)! * n;
//n! = n * (n-1)!

// for( var i =10; i>=1; i-- ){

// }


function factorialCheck(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorialCheck(n-1)
    }
}
var result = factorialCheck(10);
console.log(result)
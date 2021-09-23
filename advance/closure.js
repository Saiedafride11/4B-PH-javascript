function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
    
}

const result = stopWatch();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());

const result1 = stopWatch();
console.log(result1());
console.log(result1());
console.log(result1());
console.log(result1());
console.log(result1());
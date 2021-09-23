var business = 350;
var minister = 250;
if(business < minister){
    console.log("Minister is bigger")
}
else{
    console.log("Minister is smaller")
}

var max = Math.max(business, minister);
console.log("Max", max)


function findLargest(first, second, third){
    if(first > second && first > third){
        return first;
    }
    else if(second > first && second > third){
        return second;
    }
    else{
        return third;
    }
}
const result = findLargest(210, 520, 110);
console.log("Result", result)
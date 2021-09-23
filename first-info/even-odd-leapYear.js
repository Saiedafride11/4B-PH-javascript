const number = 8;
var reminder = number % 2;
console.log(reminder == 0);
// console.log(number % 2 == 0);


function isEven(number) {
    if(number % 2 == 0) {
        return true
    }
    return false;
}

var myNumber = 1245;
console.log('evenNumber', isEven(myNumber))



function isOdd(number) {
    if(number % 2 != 0) {
        return true
    }
    // if(number % 2 == 1) {
    //     return true
    // }
    return false;
}
var myNumber2 = 1244;
console.log('oddNumber', isOdd(myNumber2))



function isLeapYear(year){
    if(year % 4 == 0) {
        return true
    }
    else{
        return false;
    }
}
var myYear = 2011;
console.log('Leapyear', isLeapYear(myYear))
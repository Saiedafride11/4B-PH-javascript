// var inch = 132;
// var feet = inch / 12;
// console.log(feet);


function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}
var myFeet = inchToFeet(132)
console.log('myFeet', myFeet)


function mileToKm(miles){
    var km = miles  * 1.699;
    return km;
}
console.log(mileToKm(26.2))
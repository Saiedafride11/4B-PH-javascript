const myNumber = -5;
const result1 = Math.abs(myNumber);
console.log('Math.abs', result1);


const myNumberRound = 6.455;
const result2 = Math.round(myNumberRound);
console.log('Math.round', result2);

const myNumberCeil = 6.4334;
const result3 = Math.ceil(myNumberCeil);
console.log('Math.ceil', result3);


const myNumberFloor = 6.889;
const result4 = Math.floor(myNumberFloor);
console.log('Math.floor', result4);


const myNumberRandom = Math.random() * 10;
const randomOutput = Math.floor(myNumberRandom)
console.log('Math.random', randomOutput);



for (let i = 0; i <= 20; i++) {
    const myNumberRandom = Math.random() * 10;
    const randomOutput = Math.floor(myNumberRandom)
    console.log('Math.random Loop', randomOutput);
    
}


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
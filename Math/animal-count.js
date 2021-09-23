// 10 mile = 50 animal, 20 mile = 100 animal, 20+ mile = 300 animal;

var depth = 17;
var animal = 0;
if(depth <= 10){
    var animal = depth * 50;
}
else if(depth <= 20){
    var firstPart = 10 * 50;  //10 mile er jnno 50 kore
    var remaining = depth - 10; 
    var secondPart = remaining * 100; // 20 mile er jnno 100 kore
    var animal = firstPart + secondPart;
}
else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300; // 20+ mile e 300 kore
    var animal = firstPart + secondPart + thirdPart;
}
console.log(animal);



function animalCalculator(depth){
    var animal = 0;
    if(depth <= 10){
        var animal = depth * 50;
    }
    else if(depth <= 20){
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        var animal = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        var animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}
var count = animalCalculator(22);
console.log(count);




//3. Brick Calculator
// every feet 1000 it, 10 tola 15 feet, 20 tola 12 feet, 20+ tola 10 feet

function brickCalculator(floor){
    var forTenFloor = 150000;
    var forTwentyFloor=270000;
    if(floor<=0){
        console.log("This floor is not possible");
    }
    else if (floor<=10){
        var totalBricks = floor*15000;
    }
    else if (floor >=11 && floor<=20){
        var floorCount = floor-10;
        var forUpToTen=floorCount*12000;
        var totalBricks = forUpToTen+forTenFloor;
    }
    else{
        var floorCount = floor-20;
        var forUpToTwenty = floorCount*10000;
        var totalBricks = forUpToTwenty+forTwentyFloor;
    }
    return totalBricks;
}
var needBricks = brickCalculator(11);
console.log(needBricks);








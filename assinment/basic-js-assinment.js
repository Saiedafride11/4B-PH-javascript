// Problem (1):- seerToMon

function seerToMon(seer){
    if(typeof(seer) != 'number'){
        return 'Please give me a number';
    }
    else if(seer <= 0){
        return 'Please give me a positive number';
    }
    else{
        var mon = seer / 40 ;
        return mon;
    }
}
const resultMon = seerToMon(40);
console.log(resultMon);





// Problem (2):- totalSales  

function totalSales(shirt, pant, shoes){
    if(typeof(shirt) != 'number' || typeof(pant) != 'number' || typeof(shoes) != 'number'){
        return 'Please give me a number';
    }
    else if(shirt < 0 || pant < 0 || shoes < 0){
        return 'Please give me a positive number';
    }
    else{
        var shirtPrice = shirt * 100;
        var pantPrice = pant * 200;
        var shoesPrice = shoes * 500;
        var totalPrice = shirtPrice + pantPrice + shoesPrice;
        return totalPrice;
    }
}
const resultTotalSales = totalSales(1, 1, 1);
console.log(resultTotalSales);





//3. Problem (3):- deliveryCost
// every 100 t-shirt = 100 delivery Charge, every 100-200 t-shirt = 80 delivery Charge, every 200 up t-shirt = 50 delivery Charge

function deliveryCost(quantity){
    if(typeof(quantity) != 'number'){
        return 'Please give me a number';
    }
    if(quantity <= 0){
        return 'Plese any T-shirt Selected';
    }
    
    var totalCost = 0;
    if(quantity <= 100){
        var totalCost = quantity * 100;
    }
    else if(quantity > 100 && quantity <= 200){
        var oneHundredCost = 100 * 100;
        var quantityCount = quantity - 100;
        var twoHundredCost = quantityCount * 80;
        var totalCost = oneHundredCost + twoHundredCost;
    }
    else{
        var oneHundredCost = 100 * 100;
        var twoHundredCost = 100 * 80;
        var quantityCount = quantity - 200;
        var twoHundredUpCost = quantityCount * 50;
        var totalCost = oneHundredCost + twoHundredCost + twoHundredUpCost;
    }
    return totalCost;
}
const totalDeliveryCost= deliveryCost(700);
console.log(totalDeliveryCost);





// Problem (4):- perfectFriend

function perfectFriend(names){
    const friend = [];
    for (const element of names){
        if(typeof(element) != 'string'){
            return 'Please Type Of Any Character';
        }
        if(element.length >= 5){
            friend.push(element);
            break;
        }  
    }
    return friend;
}

const friendNames = ['joy', 'Ety', 'Janker', 'Mahbub', 'Mustafiz', 'Akash'];
const uniqueNames = perfectFriend(friendNames);
console.log(uniqueNames)
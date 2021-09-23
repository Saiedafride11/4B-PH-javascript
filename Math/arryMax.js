var marks = [47, 56, 56, 74, 34, 65];
let sum = 0;
for (var i = 0; i < marks.length; i++) {
    const element = marks[i];
    sum = sum + element;
}
console.log(sum);


function arraySum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const resultArraySum = arraySum([12, 45, 78])
console.log(resultArraySum);




var marks = [47, 56, 56, 74, 34, 65];
var max = marks[0];
for(var i = 0; i< marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("The most value is", max);



function largestNumber(numbers){
    // var largest = numbers[0];
    var largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const largestAge = [12, 14, 60, 80, 90, 23];
console.log(largestNumber(largestAge))


function tinyFriend(name){
    var smallestName =name[0];
    for (var i=0;i<name.length;i++){
        var currentName = name[i];
        if(currentName.length > smallestName.length){
            smallestName=currentName;
        }
    }
    return smallestName;
}
var name = ["Arafat", "Mahin", "Araf", "Hujaifa", "Rudro"];
var tinyFriendName = tinyFriend(name);
console.log(tinyFriendName);



function megaFriend(friends){
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend
        }
    }
    return mega;
}

const friends = ['jamal', 'kamal', 'tamal', 'janker'];
const myBiggBuddy = megaFriend(friends);
console.log(myBiggBuddy)
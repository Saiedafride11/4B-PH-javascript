// function reverseString(str){
//     var reverse = "";
//     for(var i= 0; i< str.length; i++){
//         var char = str[i];
//         reverse = char + reverse
//     }
//     return reverse
// }
// var statement = "Hello Alien VAi Brother";
// var result = reverseString(statement);
// console.log(result)



const greetings = 'Hello How Are You?';

function reverseString(text){
    let reverse = "";
    for (const letter of text){
        console.log(letter);
        // reverse = reverse + letter;
        reverse = letter + reverse;
    }
    return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed)


const name = ['apple', 'cat', 'doll', 'ball', 'zoo', 'moon'];
const sortedName = name.sort();
console.log('sortedName', sortedName);


const name1 = ['apple', 'cat', 'doll', 'ball', 'zoo', 'moon'];
const reverseName = name1.reverse();
console.log('reverseName', reverseName);


const name12 = ['apple', 'cat', 'doll', 'ball', 'zoo', 'moon'];
const sortReverseName = name1.sort().reverse();
console.log('sortReverseName', sortReverseName);


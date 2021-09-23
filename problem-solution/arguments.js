// function getFullName(fristName, lastName) {
//     const name = fristName + lastName;
//     return name;
// }
// var result = getFullName('Saied', 'Afride');
// console.log(result);


// function getArguments(fristName, lastName) {
//     let fullname = '';
//     for(let i = 0; i < arguments.length; i++) {
//         var newName =  arguments[i];
//         fullname = fullname + ' ' + newName;
//     }
//     return fullname;
// }
// var result = getArguments('Saied', 'Afride', 'Kamal', 'mia');
// console.log(result)


function getArguments(fristName, lastName) {
    let fullname = '';
    for(let newName of arguments) {
        fullname = fullname + ' ' + newName;
    }
    return fullname;
}
var result = getArguments('Saied', 'Afride', 'Kamal', 'mia');
console.log(result)


// function addNumbers(num1, num2){
//     let result = 0
//     for(const num of arguments){
//         result = result + num
//     }
//    return result;
// }

// const sum = addNumbers(12, 3, 5, 6, 7, 8,)
// console.log(sum)
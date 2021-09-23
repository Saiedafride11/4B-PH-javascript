// var name = ["kamal", "jamal", "samal", "tamal", "gamal","kamal", "jamal", "samal"];
// var uniqueName = [];
// for(var i = 0; i< name.length; i++){
//     var element = name[i];
//     var index = uniqueName.indexOf(element);
//     if(index == -1){
//         uniqueName.push(element);
//     }
// }
// console.log(uniqueName)




const names = ["kamal", "jamal", "samal", "tamal", "gamal","kamal", "jamal", "samal"];

function removeDuplicateItems(names){
    const unique = [];
    // for(var i = 0; i< names.length; i++){
    //     var element = names[i];
    //     console.log(element);
    //     if(unique.indexOf(element) == -1){
    //         unique.push(element)
    //     }
    // }


    for (const element of names){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
    }
    return unique;
}

const uniqueNames = removeDuplicateItems(names);
console.log(uniqueNames);




function secondLargest(nums){
    const unique = [];
    for(const element of nums){
        if(unique.indexOf(element) == -1){
            unique.push(element)
        }
    }

    const sortedArr = unique.sort();
    const secondLargestIndex = sortedArr.length - 2;
    const secondLargestElement = sortedArr[secondLargestIndex];

    return secondLargestElement;
}

const arr = [2, 5, 7, 9, 9, 7, 7, 6];
console.log(secondLargest(arr))
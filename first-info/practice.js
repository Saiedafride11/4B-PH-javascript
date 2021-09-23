var studentName = ['kamal', 'jamal', 'tamal'];
console.log(studentName);
var studentIndex = studentName.indexOf('kamal');
console.log(studentIndex);
studentName.push('akash');
console.log(studentName);
studentName.pop();
console.log(studentName);

if(studentName[0] == 'kamal'){
    console.log('studentName Kamal')
}
else if(studentName[1] == 'jamal'){
    console.log('studentName jamal')
}
else{
    console.log('studentName No need')
}
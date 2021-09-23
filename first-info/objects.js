// var student = {
//     id: 01,
//     name: 'Saied Afride',
//     marks: 81,
//     phone: 01721612
// }

// console.log(student);
// console.log(student.name);
// student.marks = 90;
// console.log(student)
// student["marks"] = 95;
// console.log(student);
// var studentMarks = "marks";
// student[studentMarks] = 98;
// console.log(student)



var student = {id:121, phone: 01712, name:'saied'};
var student2 ={id:131, phone:01834, name:'Afride'};

console.log(student);
console.log(student2);


// 11111111111111111111111
var student3 = {id:131, phone:146, name:'kamal'};
var phoneNumber = student3.phone;
console.log(phoneNumber);


//222222222222
var student4 = {id:131, phone:666, name:'jamal'};
var phoneNumber = student4['phone'];
console.log(phoneNumber);


// 33333333333333
var student5 = {id:131, phone:777, name:'tomal'};
var phoneNumber = "phone";
var phoneNumberMain = student5[phoneNumber];
console.log(phoneNumberMain);

// Update student 11111
var student = {id:121, phone:888, name:"jamal"};
student.phone=999;
console.log(student)

// Update student 2222
var student = {id:121, phone:9101, name:'saied'};
student["phone"]= 6666;
console.log(student)

// Update student 333
var student = {id:121, phone:6666, name:'saied'};
var studentPhone = "phone";
student[studentPhone] = 33333;
console.log(student)

// Update student 4444
var student = {id:121, phone:666};
student.name = "saied";
student.cinema = "Ogni";
console.log(student)
// class-constructor-this-new-extends-super.js

// class Student {
//     constructor(){
//         this.id = 12;
//         this.name = "Saied";
//     }
// }

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);


// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "Jay Hary Spry";
//     }
// }
// const student1 = new Student(12, "Saied");
// const student2 = new Student(15, "Afride");
// console.log(student1, student2);



// class Student{
//     constructor(sId, sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "Jay Hary Spry";
//     }
// }
// const student1 = new Student(12, "Saied");
// const student2 = new Student(22, "Afride");
// const student3 = new Student(33, "Hridoy");
// console.log(student1.id, student2.id, student3.id);



/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------   extends + super();   ------------------------------------------------------------------------------ */
/* -------------------------------------------------------------------------------------------------------------------------- */

// class Child{
//     constructor(name){
//         this.name = name;
//     }
// }
// const baby = new Child("Saied");
// console.log(baby);
// const baby2 = new Child("Afride");
// console.log(baby2);




// class Parent{
//     constructor(){
//         this.fatherName = "Jon Cena";
//     }
// }


// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }
// const baby = new Child("Saied");
// console.log(baby);
// const baby2 = new Child("Afride");
// console.log(baby2);



// class Parent{
//     constructor(){
//         this.fatherName = "Jon Cena";
//     }
// }


// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
//     getFullName(){
//         return this.name + " " + this.fatherName;
//     }
// }
// const baby = new Child("Saied");
// console.log(baby.getFullName());

/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */

// class Support {
//     name;
//     designation = 'Support Web Dev';
//     address = 'BD';
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
//     startSession(){
//         console.log('start a support session')
//     }
// }

// const amir = new Support('Amir Khan', 'dk');
// const salman = new Support('salman Khan', 'ak');
// const aks = new Support('aks Khan', 'pk');
// const priya = new Support('priya Khan', 'abc');
// console.log(amir, salman, aks, priya)


// class Support {
//     name;
//     designation = 'Support Web Dev';
//     address = 'BD';
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
//     startSession(){
//         console.log('start a support session')
//     }
// }

// const amir = new Support('Amir Khan', 'Bangladesh');
// amir.startSession();


// class Support {
//     name;
//     designation = 'Support Web Dev';
//     address = 'BD';
//     constructor(name, address){
//         this.name = name;
//         this.address = address;
//     }
//     startSession(){
//         console.log(this.name, 'start a support session')
//     }
// }

// const amir = new Support('Amir Khan', 'Bangladesh');
// console.log(amir)

/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------   extends + super();   ------------------------------------------------------------------------------ */
/* -------------------------------------------------------------------------------------------------------------------------- */

// class TeamMember {
//     name;
//     address = 'BD';
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;
//     }
// }

// class Support extends TeamMember {
//     groupSupportTime;
//     designation = 'Support Web Dev';
//     constructor(name, address, time) {
//         super(name, address)
//         this.groupSupportTime = time;
//     }
//     startSession() {
//         console.log(this.name, 'start a support session');
//     }
// }

// class StudentCare extends TeamMember {
//     designation = 'Care Web Dev';
//     buildARoutine(student) {
//         console.log(this.name, 'Build a routine for', student);
//     }
// }

// class NeptuneDev extends TeamMember {
//     codeEditor;
//     designation = 'Neptune App Dev';
//     constructor(name, address, editor) {
//         super(name, address);
//         this.codeEditor = editor;
//     }
//     releaseApp(version) {
//         console.log(this.name, 'release app version', version);
//     }
// }

// const aamir = new Support('Aamir Khan', 'BD', 11);
// const salman = new Support('Solaiman Khan', 'Dubai', 4);
// const sharuk = new Support('SRK Khan', 'Dubai', 9);
// const akshay = new Support('Akshay Kumar', 'Dubai', 11);

// const alia = new StudentCare('Alia Bhatt', 'Mumbai');
// const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');
// ash.releaseApp('1.4.5');
// console.log(ash.name);
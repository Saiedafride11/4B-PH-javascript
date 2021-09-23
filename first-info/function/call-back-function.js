// function welComeMessage(name){
//     console.log(name)
// }
// const name = "kamal";
// welComeMessage(name)

// ---------------------------------------------------
// function welComeMessage(name){
//     console.log(name)
// }
// const myObj = {name:'kamal', age:15}
// welComeMessage(myObj)
// ---------------------------------------------------
// function welComeMessage(name){
//     console.log(name);
//     name()
// }
// function greetMorning(){
//     console.log('Good Morning')
// }
// welComeMessage(greetMorning)
// ---------------------------------------------------
// function welComeMessage(name, greetHandler){
//     console.log(name);
//     greetHandler()
// }
// function greetMorning(){
//     console.log('Good Morning')
// }
// welComeMessage('afride', greetMorning)
// ---------------------------------------------------
// function welComeMessage(name, greetHandler){
//     greetHandler(name)
// }
// function greetMorning(name){
//     console.log('Good Morning', name)
// }
// welComeMessage('afride', greetMorning)
// ---------------------------------------------------
function welComeMessage(name, greetHandler){
    greetHandler(name)
}
function greetMorning(name){
    console.log('Good Morning', name)
}
function greetAfternoon(name){
    console.log('Good Afternoon', name)
}
function greetEvening(name){
    console.log('Good Evening', name)
}
welComeMessage('saied', greetMorning)
welComeMessage('afride', greetAfternoon)
welComeMessage('hridoy', greetEvening)

// ---------------------------------------------------

// ---------------------------------------------------
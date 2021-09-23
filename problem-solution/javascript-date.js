// google search - moment.js

// {new Date()}
// {new Date().toDateString()}
// {new Date().toDateString('dd/MM/yyyy')}
// {(new Date()).getFullYear()}

// let date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();


const myFavDate = new Date('1971-11-20');
console.log(myFavDate);

const myFavDate2 = new Date(1971, 3, 26, 11, 50, 40, 80);
console.log(myFavDate2);

if(myFavDate.getTime() < myFavDate2.getTime()) {
    console.log('myFavDate')
}
else{
    console.log('Uffs sorry, myFavDate')
}
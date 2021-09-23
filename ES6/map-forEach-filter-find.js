// const numbers = [6, 8, 5];
// const output = [];
// for(const number of numbers){
//     const result = number * 2;
//     output.push(result);
// }
// console.log(output);


// const numbers = [6, 8, 5];
// const output = [];
// const doubleIt = number => number * 2;
// for(const number of numbers){
//     const result = doubleIt(number);
//     output.push(result);
// }
// console.log(output);

/* -----------------------------    map   -----------------------------------------------*/ 
// const numbers = [6, 8, 5];
// const output = numbers.map(number => number * 2);
// console.log(output);

// const square = numbers.map(x => x * 2);
// console.log(square);


// const friends = ['kamal','janker', 'tamal', 'akash'];
// const result = friends.map(friend => friend.length);
// console.log(result);


// const products = [
//     {id: 01, name: 'pk', job: 'abc'},
//     {id: 02, name: 'ak', job: 'mno'},
//     {id: 03, name: 'zk', job: 'zyz'},
// ];
// const result1 = products.map(product => product.name);
// // const result1 = products.map(product => product.name.length);
// console.log(result1);

/* ------------------------------------------------------------------------------------------*/ 
/* -----------------------------    foreach   -----------------------------------------------*/ 
/* ---------  map r forEach same. just map return kore, for Each return kore na  ------------*/ 

// const products = [
//     {id: 01, name: 'pk', job: 'abc'},
//     {id: 02, name: 'ak', job: 'mno'},
//     {id: 03, name: 'zk', job: 'zyz'},
// ];
// products.forEach(product => console.log(product.name));

/* ------------------------------------------------------------------------------------------*/ 
/* -----------------------------    filter   -----------------------------------------------*/ 
/* ---------  filter condition, sob kisu dibe  ------------*/ 
/* ---------  filter, array + object ta dibe, find just object  ------------*/ 

// const numbers = [12, 13, 44, 21, 87, 44];
// const biggNumber = numbers.filter(number => number > 20);
// console.log(biggNumber);
// const smallNumber = numbers.filter(number => number < 20);
// console.log(smallNumber);


// const products = [
//     { name: "Nokia phone", price: 35 },
//     { name: "LG phone", price: 40 },
//     { name: "Xiaomi phone", price: 50 },
//     { name: "Oppo phone", price: 60 },
//     { name: "Oppo phone", price: 80 },
//     { name: "Samsung phone", price: 90 },
//     { name: "Iphone phone", price: 64 },
//   ];

//   const productsPrice = products.filter(pd => pd.price > 50 );
//   console.log(productsPrice);
//   const productsName = products.filter(pd => pd.name ==  'Iphone phone' );
//   console.log(productsName);

/* ------------------------------------------------------------------------------------------*/ 
/* -----------------------------    find   -----------------------------------------------*/ 
/* ---------  find condition, first element dibe  ------------*/ 
/* ---------  filter, array + object ta dibe, find just object  ------------*/ 

const numbers1 = [12, 13,22, 44, 21, 87, 44];
const biggNumber1 = numbers1.find(number => number > 12);
console.log(biggNumber1);


// const products = [
//     { name: "Nokia phone", price: 35 },
//     { name: "LG phone", price: 40 },
//     { name: "Xiaomi phone", price: 50 },
//     { name: "Oppo phone", price: 60 },
//     { name: "Oppo phone", price: 80 },
//     { name: "Samsung phone", price: 90 },
//     { name: "Iphone phone", price: 64 },
//   ];

//   const result = products.find(pd => pd.price > 50 );
//   console.log(result);
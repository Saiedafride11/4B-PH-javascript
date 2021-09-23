// const products = [
//     'Dell hardcore i29 200GB laptop',
//     'iphone 1TB camera flashlight phone',
//     'yellow laptop with black camera',
//     '1X59 Lenevo commercial yoga laptop',
//     'LG supernove Laptop',
//     'HTC low price Phone',
//     'purple color phone with Laptop'
// ];

// const searching = 'laptop';

// const output = [];
// for(const product of products) {
//     if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//         output.push(product);
//     }
// }

// console.log(output);



// const products = [
//     'Dell hardcore i29 200GB laptop',
//     'iphone 1TB camera flashlight phone',
//     'yellow laptop with black camera',
//     'Dell 1X59 Lenevo commercial yoga laptop',
//     'LG supernove Laptop',
//     'HTC low price Phone',
//     'Dell purple color phone with Laptop'
// ];

// const searching = 'laptop';

// const output = [];
// for(const product of products) {
//     if(product.toLowerCase().includes(searching.toLowerCase())) {
//         output.push(product);
//     }
// }

// console.log(output);


// const products = [
//     'Dell hardcore i29 200GB laptop',
//     'iphone 1TB camera flashlight phone',
//     'yellow laptop with black camera',
//     'Dell 1X59 Lenevo commercial yoga laptop',
//     'LG supernove Laptop',
//     'HTC low price Phone',
//     'Dell purple color phone with Laptop'
// ];

// const searching = 'dell';

// const output = [];
// for(const product of products) {
//     if(product.toLowerCase().startsWith(searching.toLowerCase())) {
//         output.push(product);
//     }
// }

// console.log(output);


const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenevo commercial yoga laptop',
    'LG supernove Lenevo',
    'HTC low price Lenevo',
    'Dell purple color phone with Laptop'
];

const searching = 'Lenevo';

const output = [];
for(const product of products) {
    if(product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);
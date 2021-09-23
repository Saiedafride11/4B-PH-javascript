const phones = [
    { name: 'Xiomi', price: 4500, cemara: 10, stroge: 32},
    { name: 'Iphone', price: 2200, cemara: 10, stroge: 32},
    { name: 'Vivo', price: 3300, cemara: 10, stroge: 32},
    { name: 'Realme', price: 5500, cemara: 10, stroge: 32}
];

let cheapest = phones[0];
for(const phone of phones){
    // console.log(phone);
    if(phone.price < cheapest.price){
        cheapest = phone
    }
}

console.log(cheapest);






const products = [
    { name: 'lenevo', price: 55},
    { name: 'Hp', price: 35},
    { name: 'Asus', price: 25},
    { name: 'Toshiba', price: 15},
];

let totalPrice = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log("totalPrice", totalPrice);






const cart = [
    { name: 'lenevo', price: 55, quantity: 1},
    { name: 'Hp', price: 35, quantity: 5},
    { name: 'Asus', price: 25, quantity: 1},
    { name: 'Toshiba', price: 15, quantity: 1},
];

let cartTotal = 0;
for(const product of cart){
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal
}
console.log('cartTotal', cartTotal);
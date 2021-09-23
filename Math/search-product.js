// const products = [
//     { name: "Nokia phone", price: 35300 },
//     { name: "LG phone", price: 35300 },
//     { name: "Xiaomi phone", price: 35300 },
//     { name: "Oppo phone", price: 35300 },
//     { name: "Samsung phone", price: 35300 },
//     { name: "Iphone phone", price: 35300 }
//   ];
  
//   function productMathing(products, searchText) {
//     let match = [];
//     for (let product of products) {
//         let name = product.name.toLowerCase();
//         let search = searchText.toLowerCase();
//       if (name.indexOf(search) != -1) {
//         match.push(product);
//       }
//     }
//     return match;
//   }
//   const result = productMathing(products, "NOKIA");
//   console.log(result);




// duplicate result

// const products = [
//     { name: "Nokia phone", price: 35300 },
//     { name: "LG phone", price: 35300 },
//     { name: "Xiaomi phone", price: 35300 },
//     { name: "Oppo phone", price: 35300 },
//     { name: "Oppo phone", price: 35300 },
//     { name: "Samsung phone", price: 35300 },
//     { name: "Iphone phone", price: 35300 },
//     { name: "Iphone phone", price: 35300 },
//   ];
//   function productMathing(products) {
//     let match = [];
//     for (let product of products) {
//         let name = product.name;
//       if (match.indexOf(name) == -1) {
//         match.push(name);
//       }
//     }
//     return match;
//   }
//   const result = productMathing(products);
//   console.log(result);




// const products = [
//     { name: "Nokia phone", price: 35300 },
//     { name: "LG phone", price: 35300 },
//     { name: "Xiaomi phone", price: 35300 },
//     { name: "Oppo phone", price: 35300 },
//     { name: "Oppo phone", price: 35300 },
//     { name: "Samsung phone", price: 35300 },
//     { name: "Iphone phone", price: 35300 },
//   ];

  // function productMathing(products) {
  //     const restProduct = [];
  //     for(let i = 0; i< products.length;i++){
  //       const element = products[i];
  //       for(let value in element){
  //         // if(value == 'name' && element[value] != 'products'){
  //         if(value == 'name'){
  //           restProduct.push(element);
  //         }
  //       }
  //     }
  //     return restProduct;
  // }
  // console.log(productMathing(products))



  const products = [
    { name: "Nokia phone", price: 35300 },
    { name: "LG phone", price: 35300 },
    { name: "Xiaomi phone", price: 35300 },
    { name: "Oppo phone", price: 35300 },
    { name: "Oppo phone", price: 35300 },
    { name: "Samsung phone", price: 35300 },
    { name: "Iphone phone", price: 35300 },
  ];

  function productMathing(products) {
      const restProduct = [];
        for(let value of products){
          if(value.name == 'Nokia phone'){
            // restProduct.push(products[0]);
            restProduct.push(value.price);
          }
        }
      return restProduct;
  }
  console.log(productMathing(products))
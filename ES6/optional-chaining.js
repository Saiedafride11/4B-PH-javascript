// Optional chaining
const options = { a:'akash', b:'batas', c:'katas'};
console.log(options?.x)

const options1 = { 
    a:'akash',
    b:'batas',
    c:'katas',
    another: {
        x: 'hi',
        y: 'hello'
    }
};
console.log(options?.d?.z)


// kunu error kabe na.. just samne ? dile. code break korbe na.... undifined dekabe just
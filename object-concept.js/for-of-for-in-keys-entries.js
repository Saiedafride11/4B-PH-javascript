const bottle = {color: 'yellow', hold:'water', price:'50', isCleaned:'true'};

// for (let index = 0; index < array.length; index++) {}
// for(const num of numbers){} arry
// for(const prop in student){} object

for(const prop in bottle){
    console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
console.log(keys);

for(const prop of keys){
    console.log(prop, bottle[prop]);
}

// -------------------------------------------------------------------------
const entries = Object.entries(bottle);
console.log(entries);
const [key, value] = ['color', 'yellow'];
// uporer tai shortcut korte chaile, niser moto hbe
for(const [key, value] of Object.entries(bottle)) {
    console.log(key, value)
}

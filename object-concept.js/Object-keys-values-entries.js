const bottle = {color: 'yellow', hold:'water', price:'50', isCleaned:'true'};
// getting all properties name
const keys = Object.keys(bottle);
console.log(keys);
// get all values
const values = Object.values(bottle);
console.log(values);
// arry type output
const entries = Object.entries(bottle);
console.log(entries);
// seal kore rakle kunu kisu delete kora jabe na, some change hbe
Object.seal(bottle)
console.log(bottle)
// freeze kore rakle kunu kisu delete kora jabe na
Object.freeze(bottle)
console.log(bottle)
//delete
delete bottle.isCleaned;
console.log(bottle)
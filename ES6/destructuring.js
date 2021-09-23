// const student = {id: 1, name: 'kamal', job:'army'};
// const id = student.id;
// const name = student.name;
// const job = student.job;
// console.log(id);
// console.log(name);
// console.log(job);


const student = {id: 1, name: 'kamal', job:'army'};
const {id, name, job} = student;
console.log(id, name, job);


const student2 = {
    id: 2,
    name: 'jamal',
    job:'rab', 
    tech: {
        tech: 5555, 
        techPost: 'React'
    }
};
const {tech, techPost} = student2.tech;
console.log(tech, techPost);

// Optional chaining
const options = { a:'akash', b:'batas', c:'katas'};
console.log(options?.x)
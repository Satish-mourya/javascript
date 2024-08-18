var person='rohit';

{
    var person='rahul';
    console.log(person);
}
console.log(person);
// var function is globally scoped 
// let function is block scope
let age=17;
// let age=18;   let cannot be redeclared but can be updated with same,or different datatype 
// note: var canbe redeclared
{
    let age=20;
    console.log(age);
}
console.log(age);


const author='satish';// const cannot be update,redeclared 
//const name;            const must be initialized


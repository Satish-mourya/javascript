// there are 7  primitive datatypes present in javascript
let a=null;       //NULL    note: return tyoe of null is object
let b=345;        //number
let c=true;       //boolean
let d=BigInt(345);//bigint
let e=Symbol("hii");//symbol
let f="satish";   //string
let g;            // undefined


console.log(typeof a); // typeof  is used to return the type 
console.log(typeof b);  
console.log(typeof c);  
console.log(typeof d);  
console.log(typeof e);   
console.log(typeof f);   
console.log(typeof g);  
 

// objects is non primitivr data type

const std = {
    "rahul":3,
    "rohit":4
}

console.log(std["rahul"]);

let today=new Date();

let day=today.getDay();
let daylist=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

console.log("today is :"+ daylist[day]+".");

let hour= today.getHours();
let minute=today.getMinutes();
let second=today.getSeconds();
console.log( "Time is "+hour+":"+minute+":"+second);
 
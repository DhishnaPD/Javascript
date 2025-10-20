// 1
console.log("Hello, World!");
document.getElementById("new").style.color = "red";
document.getElementById("ptag").textContent = "The text content is changing when i use dom in javascript";
let x;//declaration
let y;
x=123;//assignment
console.log(x);

// 2
let age=24;
let name1="Dhishna";
console.log("My name is"+name1+" and my age is"+age);
// This method is called string concatenation.
// You manually join (concatenate) multiple strings and variables using the + operator.
// It’s the older way of combining strings and variables in JavaScript.
console.log(`My name is ${name1} and my age is ${age}`);
console.log(typeof name1);
// This method is called Template Literals (introduced in ES6 / ECMAScript 2015).

// You use backticks `

// Variables are inserted directly using ${variable}

// It’s easier to read and allows multi-line strings too.

// 3(typeof,boolean,document.getElementById(DOM Manipulation))
let online =true;
let offline = false;
console.log(typeof online);
console.log(`bro is ${online}`);

let fullName="Dhishna PD";
let age1=25;
let isStudent=false;
document.getElementById("p1").textContent=`my full name is ${fullName}`;
document.getElementById("p2").textContent=age;

// 4(Arithmetic Operations)
let students=30;
// students=students+1;
// students=students-1;
students=students*3;
console.log(students);
// 5 augmented assigned operators
students+=1; // students=students+5
console.log(students);
students-=1; // students=students-5
console.log(students);
students*=2;
console.log(students);
students++;//increment operator
console.log(students);
students--;//decrement operator
console.log(students);
//6 operators precedence
// 1. Parentheses ()
// 2. Exponents **
// 3. Multiplication * , Division / , and Modulus % (from left to right)
// 4. Addition + and Subtraction - (from left to right)
let result= 3 + 5 * 2 - (4 / 2) ** 2;
console.log(result);
// 7 modulus operator
let remainder=10 % 3;
console.log(remainder);
document.getElementById("p3").textContent=`the remainder is ${remainder}`;
// 8 how to accept user input
// 1.easy way: prompt();
// 2.hard way: document.getElementById().value;(dom manipulation)
// let userName=window.prompt("Enter your name:");
// console.log(`hello ${userName}`);
 let uname;
 document.getElementById("myBtton").onclick=function(){
    uname=document.getElementById("myText").value;
    document.getElementById("myh").textContent=`Hey ${uname}`;

 }
//  9. type conversion
let r=0;
let s=0;
let q=0;
r=Number(r);
s=String(s);
q=Boolean(q);
console.log(typeof r);
console.log(typeof s);
console.log(typeof q);
//const  is a variable that cannot be changed
// let pi=3.14159;
// let radius;
// let circumference;
// radius=window.prompt("Enter the radius:");
// radius=Number(radius);
// circumference=2*pi*radius;
// console.log(circumference);
let circ;
const pi=3.14;
let radius;
document.getElementById("myBtn").onclick=function(){
radius=document.getElementById("radius").value;
circ=2*pi*radius;
console.log(circ);

};

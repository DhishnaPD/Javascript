let randomNum=Math.random();
console.log(randomNum);
let randomNum1=Math.floor(Math.random()*6);
console.log(randomNum1);
const min =50;
const max=100;
let randomNum2=Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum2);
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
// Range: 0 <= randomNum < 1 eg: 0.123, 0.456, 0.789
// Math.random() → gives number between 0-0.999...
// * 6 → scales it to 0-5.999...
// Math.floor() → removes decimal part, gives integer
const myButton=document.getElementById("myButton");
const lab1=document.getElementById("lab1");
const lab2=document.getElementById("lab2");
const lab3=document.getElementById("lab3");
const min1=1;
const max1=100;
let rndmNm1;
let rndmNm2;
let rndmNm3;
myButton.onclick=function(){
    rndmNm1=Math.floor(Math.random()*max1)+min1;
    rndmNm2=Math.floor(Math.random()*max1)+min1;
    rndmNm3=Math.floor(Math.random()*max1)+min1;
    lab1.textContent=rndmNm1;
    lab2.textContent=rndmNm2;
    lab3.textContent=rndmNm3
}
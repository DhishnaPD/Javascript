const myCheck=document.getElementById("myCheckBox");
const myVisa=document.getElementById("visabtn");
const myMstr=document.getElementById("masterbtn");
const myPypl=document.getElementById("paypalbtn");
const myBtn=document.getElementById("mySubmit");
const mySr=document.getElementById("submitResult");
const myPr=document.getElementById("PaymentResult");
mySubmit.onclick=function(){
    if(myCheck.checked){
        mySr.textContent="you are subscribed Successfully!";
    }else{
        mySr.textContent="you are not subscribed Successfully!";
    }
    if(myVisa.checked){
       myPr.textContent="You have selected Visa as your payment method."; 
    }else if(myMstr.checked){
        myPr.textContent="You have selected MasterCard as your payment method.";
    }else if(myPypl.checked){
        myPr.textContent="You have selected PayPal as your payment method.";
    }
}

//Ternary Operator
// condition ? expr1 : expr2
// condition is true → expr1
// condition is false → expr2
let time=13;
let greeting=time<12?"Good morning":"Good afternoon";
console.log(greeting);
 //purchase amount discount
 let pm=170;
 let discount=pm>=150?10:0;
    console.log(`Your discount is: ${pm*(discount/100)}`);
    console.log(`your purchase amount is$ ${pm} and total amount is $${pm-pm*(discount/100)}`);

const pmbtn = document.getElementById("pmbtn");
    const result = document.getElementById("result");
 pmbtn.onclick=function(){
    let pm3=Number(document.getElementById("pm1").value);
    let discount2=pm3>=150?10:0;
    discountedamnt=pm3*(discount2/100);
    let total=pm3-discountedamnt;
    result.textContent=`Your purchase amount is: ${pm3} and discount amount is ${discountedamnt}total amount is ${total}`;
    console.log(`your purchase amount is$ ${pm3} and total amount is $${total}`);
 }
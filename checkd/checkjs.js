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
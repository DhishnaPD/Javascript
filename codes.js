// let age=24;
// if(age<=24){
//     console.log("Adult");
// }
// else{
//     console.log("child");
// }
// // License program
// let ag=21;
// let hasLicense=false;;
// if(ag>20){
//     console.log("You are eligible for license");
//       if(hasLicense){
//         console.log("You have your license");

//       }
//       else{
//         console.log("You dont have your license");
//      }
//      }
// else{
//     console.log("You arent eligible for license");
   

// } 
// // elseif
// let score=30;
// if(score<30){
//     console.log("you failed the exam");
// }
// else if(score>=20 && score<40){
//     console.log("you got grade D");
// }
// else if(score>=40 && score<60){
//     console.log("you got grade C");
// }
// else{
//     console.log("you passed the exam");
// }

const mytext=document.getElementById("mytxt");
const mybtn=document.getElementById("btn1");
const result=document.getElementById("result");
let age;
btn1.onclick=function(){
    age=document.getElementById("mytxt").value;
    
    if(age>=18){
      result.textContent="You are eligible to vote";  
    }
    else if(age==0){
        result.textContent="Invalid age";
    }
    else if(age<0){
        result.textContent="Invalid age";
    }
     else{
      result.textContent="You are not eligible to vote";
}
}

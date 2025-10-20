let cntid= document.getElementById("cntid");
let increId=document.getElementById("increId");
let discr= document.getElementById("decreId");
let reset=document.getElementById("resetId");
let count=0;
increId.onclick=function(){
    count++;
    cntid.textContent=count;
}
discr.onclick=function(){
    count--;
    cntid.textContent=count;
}
reset.onclick=function(){
    count=0;
    cntid.textContent=count;
}      
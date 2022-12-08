var input =document.querySelector(".sketchy");
var btn=document.querySelector(".btn");
var result=document.querySelector(".result");
var list=[];


const showResult=()=>{
    var number=input.value;
    for (let i = 1; i < 11; i++) {
       list.push(`${number} X ${i} =${number*i}`);
    }


    result.innerHTML=list.join('<br>');
}
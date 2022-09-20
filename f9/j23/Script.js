const element=document.getElementById("myBtn");
// element.addEventListener('click',function(){
//     document.getElementById('test').innerHTML=Date();
// });

function displayDate(){
    document.getElementById('test').innerHTML=Date();
}

function myFunction(){
    alert("First Function alert!");
}

function otherfunction(){
    alert("second Function alert!")
}


function result(){
    var num1=document.getElementById("input1").value;
    var num2=document.getElementById("input2").value;
    document.getElementById('lbl').innerHTML="result : "+num1*num2;
}

let p1=5;
let p2=8;
function number(a,b){
    document.getElementById('number').innerHTML=a*b;
}


//یکی از ویژگی های اد ایونت لیسنر این هستش که به عنوان مثال یک ایونت کلیک رو چندین عملیات مختلف میشه روش زد 
element.addEventListener('click',displayDate);
element.addEventListener('click',myFunction);
element.addEventListener('click',otherfunction);
element.addEventListener('click',result);
element.addEventListener('click',function(){
    number(p1,p2);
});

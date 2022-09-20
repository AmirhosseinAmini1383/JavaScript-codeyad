var a,b;
a=5;
b=5;
var text=document.getElementById("txt");
var isEqual;
if(a===b){
    isEqual=true;
    text.style.color="green";
}else{
    isEqual=false;
    text.style.color="red";
}

// yek nahve dige dastorat sharti neveshtan(if/else)
// a==b ? isEqual=true : isEqual=false

text.innerHTML="the Equal match is : "+isEqual;

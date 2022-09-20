var lbl=document.querySelector(".h1-test").innerHTML="AmirHo3ein - Amini";
//
var out=document.querySelector(".h1-test").outerHTML;
console.log(out);
//
var element=document.querySelector("#header").className="Class_header";
console.log(element);
//
var Class=document.querySelector("#myId").classList;
document.querySelector("#myId").classList.add("add-class");
document.querySelector("#myId").classList.remove("test");
//toggle:یک بار ریمو میکنه بار بعدش میاد اد میکنه یک بار ریمو میکنه بار بعدش دوباره اد میکنه
document.querySelector("#myId").classList.toggle("j17");//ریمو
document.querySelector("#myId").classList.toggle("j17");//اد
document.querySelector("#myId").classList.toggle("j17");//ریمو
var Class1=document.querySelector("#myId").classList[0];
var Class2=document.querySelector("#myId").classList[1];
var Class3=document.querySelector("#myId").classList[2];
console.log(Class);
console.log(Class1);
console.log(Class2);
console.log(Class3);
//
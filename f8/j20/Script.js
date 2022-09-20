var element=document.querySelector(".my-Class").style;
console.log("Style Css :=)");
console.log(element);

//CSS
document.querySelector(".my-Class").innerHTML="AmirHo3in-Amini-83"
// document.querySelector(".my-Class").style.color="yellow";
// document.querySelector(".my-Class").style.backgroundColor="red";
// document.querySelector(".my-Class").style.fontSize="40px";
// document.querySelector(".my-Class").style.border="4px solid green";
// document.querySelector(".my-Class").style.padding="10px";

//cssText میتونیم با این قابلیت تمام کد های سی اس اس این لاین خودمون رو بصورت یکجا بنویسیم
//document.querySelector(".my-Class").style.cssText="color:yellow;background-color:red;font-size:40px;border:4px solid green;padding:10px;";

//با استفاده از ست اتریبیوت هم میتونم یک اتریبیوت استایل بدم و در بخش دوم پرانتز سی اس اس هاشو بنویسم
document.querySelector(".my-Class").setAttribute("style","color:yellow;background-color:red;font-size:40px;border:4px solid green;padding:10px;");
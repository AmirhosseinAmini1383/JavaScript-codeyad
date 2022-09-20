//hasAttribute: !با توجه به اون مقداری که ما بهش میدیم میره چک میکنه که آیا اون تگ اون اتریبیوتی که ما بهش دادیم رو داره یا نه
//!اگر داشت ترو بر میگردونه اگر نداشت فالس بر میگردونه
var element=document.querySelector("#header").hasAttribute("class");
var href=document.querySelector("#header").hasAttribute("href");
console.log(element);
// console.log("This Tag Is class Attribute : "+href);
console.log("This Tag Is Not href Attribute : "+href);

////////////////////
//setAttribute: !کاربردش به این صورته که اگر در قسمت اول پرانتز اون اتریبیوت رو داشته باشه میاد اون رو تغییر میده و اگر اون اتریبوت رو نداشته باشه میاد یک اتریبیوت برای ما ایجاد میکنه با نامی که در قسمت دوم پرانتز دادیم
var lbl1=document.querySelector(".content").setAttribute("id","test-content-setAttribute");
//document.querySelector(".content") توی کنسول لاگ بزنم

////////////////////
//removeAttribute: ! کاربردش به این صورته که اگر اتریبیوت (در اینحا آیدی) رو داشته باشه میاد اون اتریبیوت رو ریمو میکنه
var lbl2=document.querySelector(".logo").removeAttribute("id");
//document.querySelector(".logo") id="#logo-id" وجود داره که بعد از کد بالا اون اتریبیوت ریمو میشه

////////////////////
var biography=document.querySelector(".biography-p");
if(biography.hasAttribute("target")){//چک کن ببین تگ موردنظر اتریبیوت تارگت داره یا ن
    console.log(biography.getAttribute("target"));//اگه داره بیا مقدار اون اتریبیوت رو بگیر و لاگ بزن
}else{
    //اگر نداره بیا یک اتریبیوت جدید بساز
    //که ما در اینجا قبلا اتریبیوت استایل داشتیم و الان استایل قبلی مون رو تغییر میدیم
    console.log(biography.setAttribute("style","border:2px red solid; color:red;padding:10px;"));
}
console.log(biography);
//بصورت آرایه کل اتریبیوت های اون تگی که سلکت کردیم رو نمایش میده
console.log(biography.attributes);
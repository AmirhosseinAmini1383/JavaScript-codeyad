//Id:تگی که آیدی هدر داره رو سلکت میکنه
var Id=document.getElementById("header");
//ClassName:تمام تگ هایی که کلاس تکست دارن رو سلکت میکنه
var ClassName=document.getElementsByClassName("txt");
//TagName:همه تگ های اچ تی ام ال که تگ پی دارن رو سلکت میکنه
var TagName=document.getElementsByTagName("p");
//QuerySelector:وقتی که ما یک مقدار ورودی بهش میدیم میتونه اسم کلاس اون تگ باشه یا اسم آیدی | میره اولین مقدار اون تگ رو پیدا میکنه و اون رو سلکتش میکنه حتی اگر چندین نوع تگ با یک کلاس داشته باشیم اوین تگ و کلاس رو برای ما سلکتش میکنه
var QuerySelector1=document.querySelector(".album");
//اولین تگ پی که داخل تگ دیو قرار داره رو واکشی میکنه
var QuerySelector2=document.querySelector("div > p");
//QuerySelectorAll:همه تگ هایی که با کلاس آلبوم هستش رو برامون سلکت میکنه و در یک نودلیست نگهداری میکنه و نمایش میده
var QuerySelectorAll1=document.querySelectorAll(".album");
//همه تگ های پی که داخل تگ دیو قرار دارن رو واکشی میکنه
var QuerySelectorAll2=document.querySelectorAll("div > p");

console.log(Id);
console.log(ClassName);
console.log(TagName);
console.log(QuerySelector1);
console.log(QuerySelector2);
console.log(QuerySelectorAll1);
console.log(QuerySelectorAll2);

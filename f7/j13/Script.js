// Array
const mobile=["iphone 13ProMax","S22 Ultra","A51","Poco X3Pro","Nokia 6.1"];

for(key in mobile){
    //تو یک آرایه ایندکس و خونه اون آرایه میشه کلیدش
    console.log("For in | "+key+" : "+mobile[key]);
}
console.log("/////////////////////////");

for(value of mobile){
    //فقط مقدار ولیو اون آرایه مون رو نمایش میده
    console.log("For of | "+value);
}

console.log("/////////////////////////");

// Object
const car={name:"BMW X3",productYear:2010,color:"Blue",isABS:true}

for(key in car){
    //تو یک آبجکت نام اون مقدار میشه کلیدش
    console.log("For in | "+key+" : "+car[key]);
}


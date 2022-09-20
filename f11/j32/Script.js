//Range Error
const array=[90,45];
//** رو تا ضربدر به معنی توان است
//نود به توان هشتادوهشت حاصلش عددی خیلی بزرگ میشه
array.length=90**88;

/////////////////////////////////////

//Reference Error
const blue="blue";
blue;
red;

/////////////////////////////////////

//Syntax Error
let nam    e="Amirho3ein";

/////////////////////////////////////

//Type Error
const number=123;
number.toUpperCase();

//toUpperCase:یک تابعی هستش که کارکتر های یک رشته رو از حروف کوچیک تبدیلش میکنه به حروف بزرگ
// var hello="hello";
// hello=hello.toUpperCase();
// console.log(hello);

/////////////////////////////////////

//Internal Error
function foo(){
    foo();
}
foo();
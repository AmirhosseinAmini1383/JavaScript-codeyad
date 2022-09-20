document.write("console.log()");
//Named Functions  فانکشن هایی که نام دارند
function findBiggestFraction(a,b){
    var result;
    a>b ? result=["firstFraction",a] : result=["secondFraction",b];
    return result;
}
// var newResult=findBiggestFraction(7/16,13/25);
// console.log(newResult);
// console.log(findBiggestFraction(7/16,13/25));
var fractionResult=findBiggestFraction(7/16,13/25);
console.log("Fraction "+fractionResult[0]+" With a Value "+fractionResult[1]+" Is The Biggest");

///////////////////////////////

//Anonymous Functions  به فانکشن هایی میگیم که یه چیزی رو برای ما برمیگردونه
var theBiggest1=function(a,b){
    var result;
    a>b ? result=["a",a] : result=["b",b];
    return result;
}
console.log(theBiggest1(7/9,13/25));

////////////////////////////////

//immediately invoked function
//همون لحظه ای که اون فانکشن رو تعریف کردیم همونجا هم اجرا میشن
var theBiggest2=(function(a,b){
    var result;
    a>b ? result=["a",a] : result=["b",b];
    return result;
})(7/9,13/25);
console.log(theBiggest2);


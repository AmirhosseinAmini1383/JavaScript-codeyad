document.write("console.log()");
// Globally Variable
var Variable1="Variable1";

function myfunction(){
    //Locally Variable  فقط داخل همون بدنه میتونیم استفاده کنیم 
    var Variable2="Variable2";
    console.log(Variable2);
}
myfunction()
console.log(Variable1);

///////////////////////
var Result="Amirho3ein"
Result=18;
console.log(Result);

//const !متغییری هست که یک فقط مقدار ثابتی رو برای ما نگه میداره 
const Name="Amirho3ein"
// Name=18;error
console.log(Name);

//let
function logScope(){
    // var localVar=2;
    // if(localVar=2){
    //     var localVar="diferent Variable";
    //     console.log("nested localVar : "+localVar);

    // }
    // console.log("LogScope localVar : "+localVar);
    let localVar=18;
    if(localVar=18){
        let localVar="diferent Variable";
        console.log("nested localVar : "+localVar);

    }
    console.log("LogScope localVar : "+localVar);
}
logScope();
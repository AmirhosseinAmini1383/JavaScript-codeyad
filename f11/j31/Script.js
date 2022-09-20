try {
    console.log("Start of Try");
    myFunction();
    console.log("End of My Try --- Never Run");
} catch (error) {
    console.log("Error name is: "+error.name);    
    console.log("Error message is: "+error.message);    
    console.log("Error is: "+error);    
}finally{
    console.log("Finally Always run");
}


console.log("////////////////////////");


/////

//مثلا یک فایل جیسان از سمت سرور دریافت کردیم ولی در حقیقت خودمون بصورت دستی نوشتیم
let json='{"age":30}';

try{
    //JSON.parse:میاد فایل جیسان مارو تبدیل به آبجکت در جاوااسکریپت میکنه
    let user=JSON.parse(json);
    //اگر جیسان اسم فرد رو نداشت
    if(!json.name){
        throw new Error("The json data is incomplete");
    }
}catch(err){
    console.log(err);
}finally{
    console.log("ba throw mitonim payam error ro khodemon tarifesh konim!");
}
const myBtn=document.getElementById("myBtn");
const txtDiv=document.getElementById("text");

function loadText(){
    //اومدیم با شی ایکس ام ال اچ تی تی پی ریکوست یک نمونه ازش ساختیم
    var xhr=new XMLHttpRequest();
    // console.log(xhr);

    //و اومدیم یک اتصالی رو ایجاد کردیم
    //نوع ریکوس رو دادیم
    //مقصدمون رو گفتیم که کجاس
    //و ای سینک رو نوس و غیرهم زمانه که اومدیم ترو گذاشتیمش
    xhr.open("GET","test.txt",true);

    //readyState:یک پراپرتی هستش که یک مقداری رو به ما میده که اون مقدار نشون دهنده وضعیت ریکوست ما هستش که هر کردوم از اون مقدار ها یک معنی داره
    //Meghdar 1:کلاینت ایجاد شده ولی تابع اوپن فراخوانی نشده
    //Meghdar 2:تابع اوپن فراخوانی شده ولی ارسال نشده
    //Meghdar 3:درحال لود کردن هستش و منتظره ریسپانس برگرده
    //Meghdar 4:کارشو کامل انجام داده 
    console.log("READYSTATE in Open: "+xhr.readyState);

    //onprogress:زمانی هستش که منتظر این هستیم که سرور یک ریسپانس رو به ما برگردونه معمولا برای ساخت لوودر ازش استفاده میشه و زمانی که بره برگرده یک لوورد بیاد رو صفحه و نمایش داده بشه تا کاربر بدونه در حال لوود کردن عملیات هستش
    xhr.onprogress=function(){
    console.log("READYSTATE in Onprogress: "+xhr.readyState);
    };

    //و گفتیم که هر موقع شما لوود شدی بیا این کارو برای ما انجام بده
    // xhr.onload=function(){
    //     //اگر اوکی برگردونده بود و درخواستم موفقیت آمیز بود
    //     if(xhr.status==200){

    //         console.log("READYSTATE in Load: "+xhr.readyState);
            
    //         //بیا اون متنی که برگردونده رو توی اینر اچ تی ام ال قرار بده
    //         txtDiv.innerHTML=this.response;
    //     }
    // }


    //onreadystatechange:این ایونت همون کاره آنلوود رو برامون میکنه
    xhr.onreadystatechange=function(){
        if(this.readyState==4 && xhr.status==200){
            txtDiv.innerHTML=this.responseText;
            console.log("READYSTATE in readystatechange (Finally): "+xhr.readyState);
        }
    };

    //و در اخر هم ریکوست رو ارسالش کردیم
    xhr.send();
}

myBtn.addEventListener("click",loadText);

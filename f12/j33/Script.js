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

    //و گفتیم که هر موقع شما لوود شدی بیا این کارو برای ما انجام بده
    xhr.onload=function(){
        //اگر اوکی برگردونده بود و درخواستم موفقیت آمیز بود
        if(xhr.status==200){
            //بیا اون متنی که برگردونده رو توی اینر اچ تی ام ال قرار بده
            txtDiv.innerHTML=this.response;
        }
    }
    //و در اخر هم ریکوست رو ارسالش کردیم
    xhr.send();
}

myBtn.addEventListener("click",loadText);

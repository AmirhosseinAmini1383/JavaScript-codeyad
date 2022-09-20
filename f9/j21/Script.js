var doc=document.querySelector(".footer-biography").style.cssText="border:10px solid red;padding:20px"


var bio=document.querySelector("#myId");
var divbio=document.querySelector(".divbio");

bio.classList.remove("hide");
divbio.classList.add("hide");

function reveal(event){
    //با استفاده از این ویژگی میتونیم کاری که بصورت دیفالت انجام میشه رو غیرفعالش کنیم
    event.preventDefault();
    bio.classList.toggle("hide");
    divbio.classList.toggle("hide");
}
bio.onclick=reveal;
divbio.onclick=reveal;
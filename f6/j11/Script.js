document.write("console.log();");
// var Course={
//     titel:"JavaScript",
//     teacher:"Mohammad Hashemi",
//     level:1,
//     isActive:true,
//     views:0,
//     updateView:function(){
//         return ++Course.views;
//     }
// }

// object constructor 
function Course(titel,teacher,level,isActive,views,updateView){
    this.titel=titel,
    this.teacher=teacher,
    this.level=level,
    this.isActive=isActive,
    this.views=views,
    this.updateView=function(){
        return ++this.views;
    }
}
var Course1=new Course("JavaScript","Mohammad Hashemi",1,true,150);
var Course2=new Course("Html Css","Milad Dehyami",2,true,250);
var Course3=new Course("Php","Amirhossein Amini",2,true,550);
console.log(Course1);
console.log(Course2);
console.log(Course3);
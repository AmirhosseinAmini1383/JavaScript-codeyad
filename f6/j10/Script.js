document.write("console.log();");
var Person={
    firstName:"Amirho3ein",
    lastName:"Amini"
}
console.log(Person);
//////////////////////////////
var Person2=new Object();
Person2.phoneNumber=09904369464;
Person2.age=18;
console.log(Person2);
//////////////////////////////
var Course={
    titel:"JavaScript",
    teacher:"Mohammad Hashemi",
    level:1,
    isActive:true,
    views:0,
    updateView:function(){
        return ++Course.views;
    }
}
console.log(Course);
console.log(Course.views);
Course.updateView();
console.log(Course.views);
Course.updateView();

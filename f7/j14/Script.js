for(let x=0;x<=15;x++){
    if(x==10 || x==5){
        //فقط از همون مقداری که ما میگیم میگذره و رد میشه
        continue;
    }
    if(x==13){
        //اگر شرط ایف درست باشه کلا از حلقه خارج میشه
        break;
    }
    console.log(x);
}
console.log("///////////////////");
var i=0;
while(i<=10){
    console.log("i = "+i);
    i++;
}
console.log("///////////////////");
//اول عملیات انجام میشه 
do{
    console.log("i :=> "+i);
    i++;
}while(i>20) //بعدش شرط حلقه چک میشه
//////////////
console.log("///////////////////");

const cars=["Benz","BMW","Pride","Peykan","Ford","Optima","Santafe","Samand"];
var a=0;
while(cars[a]){
    console.log(cars[a]);
    a++;
}

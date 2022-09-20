var today=new Date().getDay();
// var today=18; //default
var day;
var weather=["Sunny","Cloudy","Rainy","Snowy"];
var x;
switch(today){

case 0:
    day="Sunday";
    x=weather[0];
    break;
case 1:
    day="Monday";
    break;
case 2:
    day="Tuesday";
    x=weather[1];
    break;
case 3:
    day="Wendsday";
    x=weather[2];
    break;
case 4:
    day="Thursday";
    x=weather[2];
    break;
case 5:
    day="Friday";
    x=weather[3];
    break;
case 6:
    day="Saturday";
    x=weather[0];
    break;
default:
    day="Your Value Not Found";
}
console.log("Today is : "+day+" | "+"The Weather Is : "+x);
document.write("Today is : "+day+" | "+"The Weather Is : "+x);

/////////////////////////////////////////////////////////////////

var Name="Mahdi";
var message;
switch(Name){
    case "Amirho3ein":
        message="Hello Amirho3ein !";
        break;
    case "Mahdi":
    case "Baran":
        message="Hello my friends";
        break;
    default:
        message="Hello"
}
document.write("<br>")
document.write(message);
console.log(message);
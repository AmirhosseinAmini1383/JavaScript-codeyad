const DIV1=document.getElementById('myDiv');

const pElement=document.getElementById('myP1');

const BTNremove=document.getElementById('btn-Remove-event');
//حالت بابلینگ هستش که اول داخلی ترین ایونت اجرا میشه یعدش ایونت بیرونی
// DIV1.addEventListener('click',function(){
//     alert('You Clicked on DIV'); 
// });


// pElement.addEventListener('click',function(){
//     alert('You Clicked on p'); 
// });

//////////////////////////////////////////////////

//یوز کپچرینگ دقیقا برعکس همین بابلینگ هستش
// DIV1.addEventListener('click',function(){
//     alert('You Clicked on DIV'); 
// },true);


// pElement.addEventListener('click',function(){
//     alert('You Clicked on p'); 
// },true);


/////////////////////////////////////////////////////
BTNremove.addEventListener('click',RemoveEventFromDiv);

function RemoveEventFromDiv(){
    DIV1.removeEventListener('mousemove',RandomeNumber);
}

DIV1.addEventListener('mousemove',RandomeNumber);

function RandomeNumber(){
    document.getElementById('test').innerHTML=Math.random();
}

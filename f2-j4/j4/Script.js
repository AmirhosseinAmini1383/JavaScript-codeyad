document.write("console.log()");
            //  0      1      2       3         4
var colors = ["red","blue","black","yellow","orange"];
console.log(colors[1]);
console.log(colors);
var arrayStringcolors=colors.join("  -  ");
console.log(arrayStringcolors);
///////////////////////////////////////////////////
var names =new Array("Amir","Ho3ein","Mahdi","Ali","Mobina");
// names.reverse(); //index array mon ro barax mikone!az akhar minivise be aval!Mobina index=0!

/////////////////////////

//avalin
// names.shift(); //hazf avalin index khone array mon!
// names.shift();

// names.unshift("Mohammad"); //azafe kardan yek index be avalin index(khone) array!

/////////////////////////

//akhrin
// names.pop(); //hazf akharin index khone array mon!

names.push("Baran"); //azafe kardan yek index be akharin index(khone) array!

/////////////////////////

// var result=names.indexOf("Mahdi",0); //ba estefade az indexof mitonim toye array mon donbal yek index(khone)begardim(search konim) bebinim ke index vojod dare ke toosh "Mahdi" dashte bash!var dar fild2 adad midim ke az index chandom array shoro kone be search kardan!
// console.log(result);

console.log(names);
var arrayStringnames=names.join("  |  "); //ba estefade az join mitonim dade haye array mon ro be sorat string chop konim!
console.log(arrayStringnames);
// var NewNames=names.slice(); //ba estefade az slice mitonim ye "COPY" az array mon dashte bashim va oon "COPY" ro bayaim to yak array jadidi estefade konim!
// console.log(NewNames);


/////////////////////////////////////////////////////
var MyArray=["Amirho3ein",18,true,"Amini",85.85858585];
console.log(MyArray);
var arrayStringMyArray=MyArray.join("  /  ");
console.log(arrayStringMyArray);
//1
//esm website ro mide behemon
//www.codeyad.com
// var portName = location.host;
// alert(portName);


//2
//kamel harchi to url hast ro namayesh mide
//http://127.0.0.1:5501/f21/j61/index.html
// var portHref = location.href;
// alert(portHref);


//3
//protocol ro bema namayesh mide
//http: --- https:
// var portProtocol = location.protocol;
// alert(portProtocol);


//4
//pathname miad on masiri ke tosh hastim ro bema neshon mide badaz nameh host
///f21/j61/index.html
// var portPathname = location.pathname;
// alert(portPathname);


//5
//replace miad url site roo taghir mide va mire be site codeyad
// location.replace("https://www.codeyad.com");

//6
const btnReload = document.querySelector("button");
btnReload.addEventListener("click", () => {
    //reload miad safaro dobare load mikone 
    location.reload();
});
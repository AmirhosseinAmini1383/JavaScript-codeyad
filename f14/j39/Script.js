//Promise:مقدار برگشتی در کنسول است که به طور خلاصه به ما یه قولی میده که ارتباطی رو بین اون یو آر ال به دست بیاره,ممکنه کمی طول بکشه و زمان ببره , یا کلا ارتباط برقرار نشه
//fetch():کلا این تابع درخواست های مارو به صورت ای سینک رونوس انجام میده
// console.log(fetch("sample.txt"));

const myBtn = document.getElementById("getText");
const myP = document.getElementById("lbl");
// function getText() {
//     fetch("sample.txt").then(
//         function (result) {
//             return result.text();
//         }).then(
//         function (data) {
//             console.log(data);
//         }
//     );
// }


let getText = () => {
    fetch("sample.txt")
        .then((result) => result.text())
        .then((data) => myP.innerHTML = data)
};

myBtn.addEventListener("click", getText);
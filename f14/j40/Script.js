// const numbers = [65, 44, 32, 4];
// //forEach:به ازای هر یک | هر کدام
// numbers.forEach(function (item, index, arr) {
//     // console.log("item = " + item + " index = " + index);
//     console.log(`item = ${item} index = ${index}`);
//     console.log(arr);
// });
const myBtn = document.getElementById("btnGetUsers");
const myDiv = document.getElementById("output");

function getUsers() {
    fetch("users.json")
        //first then:ریسپانس رو برمیگردونه
        //return
        .then((result) => result.json())
        //second then:ریسپانس رو میگیریم و عملیات مدنظر خودمون رو پیداسازی میکنیم
        .then((json) => {
            let output = "";
            json.forEach(
                (user) => {
                    // var ul = document.createElement("ul");
                    // var li1 = document.createElement("li");
                    // var li2 = document.createElement("li");
                    // var li3 = document.createElement("li");
                    // myDiv.append(ul);
                    // ul.appendChild(li1);
                    // ul.appendChild(li2);
                    // ul.appendChild(li3);
                    // li1.innerHTML = user.id;
                    // li2.innerHTML = user.name;
                    // li3.innerHTML = user.email;

                    output += `<ul>
                    <li>${user.id}</li>
                    <li>${user.name}</li>
                    <li>${user.email}</li>
                </ul>`
                });
            myDiv.innerHTML = output;
        })
}
myBtn.addEventListener("click", getUsers);
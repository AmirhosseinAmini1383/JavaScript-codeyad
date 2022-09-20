const h1 = document.getElementById("title");
localStorage.setItem("firstName", "Amirho3ein");
localStorage.setItem("lastName", "Amini");
const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");

// firstName ? h1.innerText = `Welcome ${firstName} ${lastName}` : h1.innerText = "Nobody To Welcome";
if (firstName.length != 0 || firstName.length != 0) {
    h1.innerText = `Welcome ${firstName} ${lastName}`;
} else {
    h1.innerText = "Nobody To Welcome";
}

/////////////////////////////////

const tag_h1 = document.getElementById("localStorage");
let InputValue = document.getElementById("fullname");
const btnSend = document.getElementById("btn");

const Info = () => {
    localStorage.setItem("FullName", InputValue.value);
    const data = localStorage.getItem("FullName");
    tag_h1.innerHTML = data;
}
btnSend.addEventListener("click", Info);
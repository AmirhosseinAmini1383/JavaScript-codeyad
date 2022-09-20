var ul = document.querySelector("ul");
var existingLi = document.getElementById("coffee");

var li = document.createElement("li");
li.textContent = "Tea";

ul.insertBefore(li, existingLi);
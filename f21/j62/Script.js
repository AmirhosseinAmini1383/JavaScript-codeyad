const forwardBtn = document.getElementById("forward");
const backBtn = document.getElementById("back");

forwardBtn.addEventListener("click", () => {
    window.history.forward();
})

backBtn.addEventListener("click", () => {
    window.history.back();
})
const btnSave = document.getElementById("btnSave");

btnSave.addEventListener("click", () => {
    const myObject = {
        firstName: "Amirho3ein",
        lastName: "Amini",
        isMale: true
    };
    const myArray = [{
        firstName: "Mohadese",
        lastName: "Rad",
        isMale: false
    }, {
        firstName: "Baran",
        lastName: "Ahmadi",
        isMale: false
    }, {
        firstName: "Kimia",
        lastName: "Hadimanesh",
        isMale: false
    }, {
        firstName: "Mohammad",
        lastName: "Hashemi",
        isMale: true
    }]
    localStorage.setItem("PersonInfo", JSON.stringify(myObject))
    localStorage.setItem("PersonsAPI", JSON.stringify(myArray))
});
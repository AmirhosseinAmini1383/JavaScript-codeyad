let DB;
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("lastName");
const form = document.querySelector("form");

window.onload = () => {
    let Request = window.indexedDB.open("contacts", 1);
    Request.onerror = () => {
        console.log("Database Failed To Open");
    }
    Request.onsuccess = () => {
        console.log("Database Opened Successfully");
    }
    DB = Request.result;
}
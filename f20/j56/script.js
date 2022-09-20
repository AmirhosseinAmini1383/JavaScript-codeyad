let db;
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const from = document.querySelector("form");

window.onload = () => {
    let request = window.indexedDB.open("contacts", 1);

    request.onerror = () => {
        console.log("Database Failed To Open");
    }


    request.onsuccess = () => {
        console.log("Database Opened Successfully");
        db = request.result;
        console.log(db);
    }


    request.onupgradeneeded = (e) => {
        let db = e.target.result;
        console.log(db);

        let objectStore = db.createObjectStore('contacts', {
            keyPath: 'id',
            //autoIncrement:khodesh miad besorat khodkar id haro mishmore va ezafe mikone va niazi be id dasti vared kardan nist!
            autoIncrement: true
        });

        objectStore.createIndex('firstName', 'firstName', {
            //unique:yani agar to 2ta index 2meghdar yeksan bood hich iradi nagir (unique vaghti ke false bood)!
            unique: false
        });

        objectStore.createIndex('lastName', 'lastName', {
            unique: false
        });


        console.log("Database Setup Successfully...");

    }








}
let db;

window.onload = () => {

    let request = window.indexedDB.open("StoreAmir", 1);

    request.onerror = () => {
        console.log("Database Failed To Open");
    }

    request.onsuccess = () => {
        console.log("Database Opened Successfully");
        db = request.result;
        console.log(db);
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result;

        let ObjectStore = db.createObjectStore("StoreAmir", {
            keyPath: 'id',
            autoIncrement: true
        })
        ObjectStore.createIndex("FirstNamePerson", "FirstName", {
            unique: false
        })
        ObjectStore.createIndex("LastNamePerson", "LastName", {
            unique: false
        })
        ObjectStore.createIndex("AgePerson", "AgePerson", {
            unique: false
        })
    }

}
const firstName = document.getElementById("FirstName");

const lastName = document.getElementById("LastName");

const jobTitle = document.getElementById("jobTitle");

const frmSend = document.getElementById("frmSend");

function SendData() {
  var xhr = new XMLHttpRequest();

  var params =
    "firstName=" +
    firstName.value +
    "&" +
    "lastName=" +
    lastName.value +
    "&" +
    "jobTitle=" +
    jobTitle.value;

  xhr.open("POST", "http://localhost:7006/api/persons/adduser", true);

  //اطلاعات مون از نوع پارامتر های ارسال شده رمزگذاری شده از یک فرم هستش
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.send(params);
}

frmSend.addEventListener('submit', SendData);
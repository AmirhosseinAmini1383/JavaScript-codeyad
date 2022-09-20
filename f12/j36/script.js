const btnLoad = document.getElementById("btnLoad");

function LoadDoc() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "cd-collection.xml", true);

  xhr.onload = function () {
    loadXML(this);
  };

  xhr.send();
}

function loadXML(xml) {
  const xmlDoc = xml.responseXML;
  const cd = xmlDoc.getElementsByTagName("CD");
  let table = "<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < cd.length; i++) {
    table += "<tr><td>" +
      cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("tableXml").innerHTML = table;
}

btnLoad.addEventListener("click", LoadDoc);
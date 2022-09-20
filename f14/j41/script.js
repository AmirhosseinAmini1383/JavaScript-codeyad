function addPost(event) {
  //رفتار های پیش فرض خودتو از بین ببر-سابمیت و رفرش رو نداشته باش
  event.preventDefault();

  let TitleValue = document.getElementById("title").value;
  let BodyValue = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        // Accept:نوع ریسپانسی هستش که من میخوام برگرده
        //*/*:ریسپانس از هر نوع دیگه ای میتونه باشه
        Accept: "application/json, text/plain, */*",
        //Content-Type:نوع محتوایی هستش که من میخوام ارسال بکنم
        "Content-Type": "application/json",
      },
      //JSON.stringify:مقدار ورودی که ما بهش دادیم رو تبدیل به یک استرینگ از نوع جی سان میکنه
      body: JSON.stringify({
        title: TitleValue,
        body: BodyValue
      }),
    })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

//وقتی فرم سابمیت شد
document.getElementById("addPost").addEventListener("submit", addPost);
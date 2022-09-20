//*setTimeout:با استفاده از این تابع به صورت ای سینک رونوس ایجاد میشه و متن کافی رو بعد از 3 ثانیه در کنسول لاگ میزنه
// setTimeout(() => {
//     console.log("Coffee")
// }, 3000)
// console.log("Toast");
// console.log("Tea");

//////////////////////////////////

// let Name = (name) => {
//     console.log(`Hello ${name}`)
// }
// Name("Amirho3ein");

// callback:فانکشن های وابسته بهم دیگه
// const userInfo = (firstName, lastName, callback) => {
//     const Fullname = `${ firstName} ${lastName}`;
//     callback(Fullname);
// }
// userInfo("Amirho3ein", "Amini", Name);

//////////////////////////////////

const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
    //  if(hasMeeting==true)
    if (!hasMeeting) {
        const meetingdetails = {
            name: "Codeyad Meeting",
            location: "Tehran",
            time: "16:00 PM"
        };
        resolve(meetingdetails);
    } else {
        reject(new Error("Meeting Canceled..."));
    }
});
meeting
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej))


//TEST
// var x = false
// const test = new Promise((n1, n2) => {
//     if (!x) {
//         const shoghl = {
//             shoghl: 'barnamenevisi',
//             mahalkar: 'janatabad',
//             vaziat: 'awli'
//         }
//         n1(shoghl);
//     } else {
//         n2(new Error("hey zendegi"));
//     }
// });
// test.then((n1) => console.log(n1)).catch((n2) => console.log(n2))
// const hasMeeting = false;
// const meeting = new Promise((resolve, reject) => {
//   if (!hasMeeting) {
//     const meetingdetails = {
//       name: "Codeyad Meeting",
//       location: "Tehran",
//       time: "1:00 PM",
//     };
//     resolve(meetingdetails);
//   } else {
//     reject(new Error("Meeting Canceled..."));
//   }
// });

// const addToCalendar = meetingDetails => {

//   const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on
//      ${meetingDetails.location}`;
//   return Promise.resolve(calendar);

// };

// meeting
//   .then(addToCalendar)
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

// async function myMeeting() {
//   const meetingDetails = await meeting;
//   const message = await addToCalendar(meetingDetails);
//   console.log(message);
// }
// myMeeting();

//////////////////////////////////////////////////////////////////

const FirstFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First Function Executed");
      resolve("Resolved After 3 Sec");
    }, 3000);
  });
};

// const SecondFunction = () => {
const SecondFunction = async () => {
  console.log("Calling FirstFunction");
  // const FirstFunctionResult = FirstFunction();
  const FirstFunctionResult = await FirstFunction();
  console.log(FirstFunctionResult);
}
SecondFunction();

console.log("End");



// Promise ha 3ta halat daran

//این حالت میگه کاری که تو گفتی رو دارم انجام میدم و در حال پردازشم و در انتظار باش که این کارو انجام بدم
//Pending

//این حالت موقعیه که برآورده شده خواسته ما و به قولی که داده عمل کرده 
//FullFilled

//این حالت هم زمانیه که نتونسته خواسته مارو انحام بده و اون قولی که به ما داده رو برآورده بکنه
//Rejected
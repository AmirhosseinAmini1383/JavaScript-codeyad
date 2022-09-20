// #region Spreed Operator

///////////////////////Spread Operator///////////////////////

// const Cars = ["BMW", "Benz", "Ferrari", "Peykan", "Pride"];

// const Names = ["Mohammad", "Amir", "Ali", "Hossein", "Reza", "Milad", "Iman", ...Cars];

// console.log(Names);

// console.log(...Names);

/////////////////////////////////////

// function sum(x, y, z) {
//     console.log(x + y + z);
// }

// var args = [10, 51, 24];

// // sum(args[0], args[1], args[2]);
// sum(...args);

/////////////////////////////////////

// var array1 = [1, 2, 3];

// var array2 = [...array1];

// array2.push(4);

// console.log(array1);
// console.log(array2);

// #endregion


// #region Method filter in Array

// const array = [10, 85, 5, 18, 20, 7, 425, 9, 130];

// console.log(array.filter((value) => {
//     return value >= 10
// }));

// #endregion


// #region Method included in Array

// const fruits = ["Banana", "Orange", "Apple", "watermelon"]
// console.log(fruits.includes("watermelon"));

// #endregion


// #region Method indexOf in Array

// const fruits = ["Banana", "Orange", "Apple", "watermelon"]
// console.log(fruits.indexOf("watermelon"));

// #endregion


// #region Method splice in Array

// const fruits = ["Banana", "Orange", "Apple", "watermelon"]
//az position 1 (Banana) 2ta khone be badesh ro hazf kon
// fruits.splice(1, 2);
// console.log(fruits);

//az position 2 (Orange) be bad 3 ta meghdar zir ro be array ezafe kon
// fruits.splice(2, 0, "cucumber", "mango", "Peach");
// console.log(fruits);

// #endregion
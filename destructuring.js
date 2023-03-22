/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);


// Destructuring subsets of arrays and objects
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);


let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);


let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);



// Using rest parameter syntax with arrays and objects
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);


let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);




// // Example 1:

// let students = [
//     {
//         name: 'Emily',
//         subjects: ['science', 'english', 'art'],
//         teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//         results: {science: 93, english: 80, art: 95},
//     },
//     {
//         name: 'John',
//         subjects: ['art', 'cad', 'english', 'maths', 'science'],
//         teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
//         results: {maths: 90, english: 75, cad: 87},
//     },
//     {
//         name: 'Adam',
//         subjects: ['science', 'maths', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
//         results: {science: 93, maths: 77, art: 95},
//     },
//     {
//         name: 'Fran',
//         subjects: ['science', 'english', 'art'],
//         teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//         results: {science: 93, english: 87, art: 95},
//     }
// ];

// // write code here:

// const makeList = (arr, student) => {
//     for(let itm of arr) {
//         if(itm.name == student) {
//           return itm.subjects;
//         }
//     }
// };

// let [first, second, ...rest] = makeList(students, 'John');
// console.log(first, second, rest);


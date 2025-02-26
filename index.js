// const emp = {
//     "name": 'Pranjal',
//     "age": 25,
//     "city": 'Delhi',
//     "collage": 'DTU',
//     "marks": [10, 20, 30],
//     "isActive": true
// }

// // object is mutable data type

// console.log(emp);

// // we have 2 methods to access the object 
// // 1. dot notation

// emp.name = 'Pranjal Singh';
// // emp.gender = 'Male';
// console.log(emp);

// // 2. bracket notation

// emp['age'] = 21;
// emp['gender'] = "male";
// emp['roll'] = 123456;
// console.log(emp);

// delete emp['gender'];
// delete emp.roll;
// console.log(emp);



// let student = {
//     "name": 'rahul',
//     "age": 10,
//     "status": true,
//     "marks": [10, 20, {a: 1, b: {c: 2, d: 3, e: {z: 34}, g: "10b01", x: {h: 67}}}, 30],
//     "add": {
//         "pin": 123,
//         "code": 456
//     },
// }

// // console.log(student.name);

// console.log(student.marks[2].b.g[2]);
// console.log(student.marks[2]['b']['g'][2]);

// creating an object using existing object
// let obj = {a: 1};
// let obj1 = {...obj};
// console.log(obj1);

// copy of an object in another object

// let obj2 = {a: 1, b: 2, c: 3};
// let obj3 = {...obj2, 'd': 25};
// console.log(obj3);

// Joining two objects

// let obj4 = {a: 1, b: 2};
// let obj5 = {c: 3, d: 4};
// let obj6 = {...obj4, ...obj5};
// console.log(obj6);


// count the value occurence in string
// var str = "qwertyuiooiuytrewerthcdrfvcxsedfgbnjhgfdsasdxcfvbnhvcdsawaqwsdfgbhjkiuyfdfg";
// var obj = {};
// for(let i = 0; i < str.length; i++){
//     // console.log(str[i]);
//     if(obj[str[i]] == undefined){
//         obj[str[i]] = 1;
//     }else {
//         obj[str[i]]++;
//     }
// }
// console.log(obj);

// what is the frequency of each element in the array



// find the sum of elements whose elements is 2

// let arr = [1,4,5,1,3,2,1,6,3,5,8,4,1,2,1,3,5,4,3,5,1,3];
// let obj = {};

// for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]] == undefined){
//         obj[arr[i]] = 1;
//     }else {
//         obj[arr[i]]++;
//     }
// }
// console.log(obj);


// obj = {
//     1:1,
//     2:2,
//     3:3,    
//     4:4,
// }
// let sum = 0;
// for(let key in obj){
//     if(key == 2){
//         sum += key * obj[key];
//     }
//     if (obj[key] == 1) {
//         console.log(key, obj[key]);
//     }
//     console.log(key, obj[key]);
// }
// console.log(sum);

///////////////////////////////////////////////////////////////////////


// falsy values in javascript

// 0, '', null, undefined, NaN, false

// if(""){
//     console.log('y');
// } else console.log('n');

///////////////////////////////////////////////////////////////////////

// treinary operator

// syntax: condition ? true : false

// let ans1 = 0 ? 'yes' : 'no';
// console.log(ans1);
// let ans = 1 ? 'yes' : 'no';
// console.log(ans);
///////////////////////////////////////////////////////////////////////

// nullish operator replaces the falsy values with the value provided
// user to compaer two values using ?? and if the value is null or undefined then it will replace it with the value provided

// let ans = null ?? "iron man"
// let ans1 = "null" ?? "iron man"
// let ans2 = undefined ?? "iron man"
// let ans3 = "hello" ?? "iron man"
// console.log(ans, ans1, ans2, ans3);
///////////////////////////////////////////////////////////////////////

// Rest operator / Spread operator


//Spread operator
// let arr = [1, 2];
// let arr1 = [...arr];
// console.log(arr1);
///////////////////////////////////////////////////////////////////////

// Rest operator
// function check(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// check(1,2,3,4,5,6,7,8,9,10);
///////////////////////////////////////////////////////////////////////

// Default Parameter
// function check(a = 10, b, c = 20){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// check(1,2);


///////////////////////////////////////////////////////////////////////
// inbulit functions in javascript

// number --> string
// let num = 5;
// console.log(num.toString());

// string --> number
// let str = "5";
// console.log(parseInt(str));
// console.log(+(str));
// console.log(Number(str));

//  indexOf() and lastIndexOf()

// let str = "hello world";
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));


//  slice and splice

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let ans = arr.slice(1, 3); // strarting index = 1 , ending index = 3 (end - 1 tak iterate)
// console.log(ans);
// console.log(arr);

// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let ans1 = arr1.splice(1, 3); // strating index = 1 , how many element to remove form th array = 3, it will edit the original array
// console.log(ans1);
// console.log(arr1);


// toUpperCase and toLowerCase
// let str = "hello world";
// console.log(str.toUpperCase());
// console.log(str);
// console.log(str.toLowerCase());
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// when a function is passed as an argument is known as callback function (higher order function)

// function check(callback){
//     console.log("higher order function");
//     callback();
//     console.log("bye from higher order function");
// }
// function greet() {
//     console.log("hello form call back function");
// }

// check(greet);

// Map

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let ans = arr.map( (a, b, c)=> { // a -> element, b -> index, c -> array
//     console.log(a, b, c);
//     return;
// });
//  it always return an array

// filter
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let y = arr.filter( (x) => {
//     return x % 2 == 1;
// })
// console.log(y);

// foreach
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((x) => {
//     console.log(x + 5);
// })

// console.log(arr);

// let arr = [1,2,3,4,5,6,7,8,9,10]; // a-b accending order, b-a descending order
// let y = arr.sort((a,b) => {
//     return b-a;
// })
// console.log(y);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let x = arr.reduce((acc, el) => {
//     return acc + el;
// }, 0);

// console.log(x);

let str = "hello world";

console.log(str.split("").reverse().join(""));
console.log(str.split(" ").reverse().join(" "));
console.log(str.split(" ").reverse().join(" ").split("").reverse().join(""))

// console.log("Ankit");
// "use strict"; // This is how we enable strict mode in JS
// strict mode helps us to write better code and avoid common errors
// alert("hello world") // this will throw an error in strict mode
// types of variables
// null -> empty value
// undefined -> variable declared but not assigned
// let a;
// console.log(typeof a); // undefined 
// console.log(typeof null); // objectN
// console.log();
// let myObj = {
//     name: "ankit",
//     age: 22,
//
// const myFu = function(){
//     console.log("Calling my function");
// }
// myFu();
// let myname = "ankit"
// let anothername = myname;
// console.log(anothername);
// anothername = "mohit"
// console.log(anothername);
// console.log(myname);
// let user1 = {
//     email: "user@gmail.com",
//     upiId: "user@upi"
// }
// let user2 = user1;
// console.log(user2);
// user2.email = "newUser@gmail.com";
// console.log(user2);
// console.log(user1);
// let con = "hello" + "world"
// console.log(con);
// let a = 10;
// let name = "ankit";
// console.log(`Hello my name is ${name} and my age is ${a}`);   
// console.log(name[0]);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(0));
// const newString = name.substring(1, 3);
// console.log(newString);
// const user = "     ankit     ";
// console.log(user);
// console.log(user.trim()); // this will remove all the white spaces from the string
// const url = "https://hitesh.com/hitesh%20name";
// console.log(url.replace("%20", "-")); // replace methods returns a new string it does not modify the original string
// that's why we will not see any change in the url
// console.log(url);
// numbers and maths
// const num1 = 10;
// const num2 = new Number(10);
// console.log(num1);
// console.log(num2);
// console.log(num2.toString().length);
// console.log(num2);
// const num3 = 10.123456789;
// console.log(num3.toFixed(2));
// console.log(num3.toPrecision(7));
// const numbers = 10203919131;
// console.log(numbers.toLocaleString('en-IN'));
// console.log(numbers.toLocaleString());
// Math object
// console.log(Math);
// console.log(Math.PI);
// const val = -131;
// console.log(Math.abs(val));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.round((Math.random()*10+1)));
// const min = 10
// const max = 20
// in case we want the number in a specified range we can use this formula
// console.log(Math.floor(Math.random() * (max - min + 1) + min));
// Date object
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// let myCreatedDate = new Date('2021-09-01');
// console.log(myCreatedDate.toDateString());
// const myarr = [0, 1, 2, 3, 4, 5];
// const myHeros = ["Ankit", "Mohit", "Rohit"];
// console.log(myHeros);
// console.log(myarr);
// array methods
// myarr.push(6);
// myarr.reverse();
// console.log(myarr);
// const newarray = [1,2,3, [4,5], 6, [7,8,9, [10,11,12]]];
// console.log(newarray);
// console.log(newarray.flat(2));
// Objects
// two ways of declaring objects - object literal and constructor
// object literals
// Object.create() - constructor
// const user = {
//     name: "Ankit",
//     age: 22,
//     "last name": "Mishra",
//     email: "ankit@gmail.com",
//     blogs: ["why mac and cheese rules", "10 things to make with marmite"],
// }
// user.age = 23;
// console.log(user);
// in order to access last name we cannot do it with dot notation
// so we will use square brackets notation
// console.log(user["last name"]);
// to freeze any object we can use Object.freeze() method
// Object.freeze(user);
// const regularUser = {
//     email: "ankitmisrha@gmail.com",
//     age: 22,
//     username:{
//         twitter: "ankit",
//         instagram: "ankit",
//     },
//     blogs: ["why mac and cheese rules", "10 things to make with marmite"],
// }
// console.log(regularUser);
// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(regularUser.username);
// console.log(regularUser.blogs[1]);
// array of objects
// const blogs = [
//     {title: "why mac and cheese rules", likes: 30},
//     {title: "10 things to make with marmite", likes: 50},
//     {title: "why mac and cheese rules", likes: 30},
//     {title: "10 things to make with marmite", likes: 50},
//     {title: "why mac and cheese rules", likes: 30},
// ]
// blogs.map((it)=>{
//     console.log(it);
// })
// const course = {
//     title: "JavaScript",
//     price: 1000,
//     description: "This is a course on javascript",
// }
// object destructuring
// const {title, description} = course;
// console.log(title);
// console.log(description);
// api 
// {
//     "name": "Ankit",
//     "age": 22,
//     "email": "ankit@gmail.com",
// }
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(10, null));
// in case we dont knwo the number of arguments we can use rest operator
// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7,8,9,10);
// FUN
// Arrow functions and this keyword 
// const user = {
//     username: "Ankit",
//     price: 999,
// this refers to current context in the object
//     welcomeMessage: function(){
//         console.log(`Welcome ${this.username}`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username = "Rahul";
// user.welcomeMessage();
// const chai = () => {
//     console.log("Hello");
// }
// chai();
// arrqow functions
// const addTwo = (num1, num2) => {
//     console.log(num1 + num2);
// }
// addTwo(1,2);
// ()() // this is an IIFE - Immediately Invoked Function Expression
// (function fun(){
//     console.log("Hello");
// })();
// we need to add a semicolon at the end of the function to avoid any errors
// (function get(){
//     console.log("wow");
// })();
// (function printName(name){
//     console.log(`Hello my name is ${name}`);
// })("Ankit Mishra")
// iterators
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// Asynchronous Javascript fundamentals
// by default JS is synchronous also it is single threaded language
// thread in programming language is a sequence of instructions that can be executed
// by the cpu. Multi threading is the ability of a cpu to execute multiple threads or processes concurrently
// examples of multi threaded languages are python, java, c++


// learning about promises - the promise object represetrnts the eventual completion it gets stacked up in the event loop
// in modern programmintg we use promises to handle async code
// we can also use async await to handle async code
// promises has 3 states - pending, fulfilled, rejected

// learning to create a promsie
// promsie 1 _-
// const promiseOne = new Promise(function(resolve, reject){
// d0 ann async task 
// db calls, cryptography, file system, network calls
// setTimeout(function(){
//     console.log("Async task is completed");
//     resolve();
// }, 1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })
// same thing with diferebt syntax
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Promise 2 consumed");
// })

// promise 3
// resolve is directly connnected to then and reject is connected to catch
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // we can pass the value to the resolve function
//         resolve({username: "Ankit", email: "ankitmishra6604", age: 22});
//     },1000)
// })
// we have to pass the value to the resolve function as we will do the opeation in the setTimeout function
// now we have to pass the value to the then function
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false; // Set this to true or false to test both paths
//         if(!error){
//             resolve({message: "User logged in", username: "Ankit"});
//         }else{
//             reject("Error: Something went wrong");
//         }
//     }, 1000); // Set delay to 1000 milliseconds (1 second)
// });
// promiseFour.then((user)=>{
//     console.log(user);
//     // we can further chain the promises
//     // here this return will be passed to the next then block
//     return user.username
// }).then((username)=>{
//     // here we will get the value returned from the previous then block
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally(()=>{
//     // finally block will run no matter what it will run in both cases
//     console.log("This will run no matter what");
// })

// promise 5
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true; // Set this to true or false to test both paths
//         if(!error){
//             resolve({message: "User logged in", username: "JavaScript"});
//         }else{
//             reject("Error: JS went wrong");
//         }
//     }, 1000); // Set delay to 1000 milliseconds (1 second)
// })
// async function consumePromiseFive(){
//     try {
//     const response = await promiseFive;
//     console.log(response);
//     } catch (err) {
//         console.log(err);    
//     }
// }
// consumePromiseFive();
// it is necessary to use async await with try catch block to handle the errors
// if we dont use try catch block the error will not be handled and the code will break

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         console.log(response);
//         // parsing the response will take some time so we will use await here
//         const data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log("Error: ", err);
//     }
// }
// getAllUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("data fetched");
// })

// oop IN JAVA SCRIPT
// here we will be learning about classees and objets in the javascript
// class is a blueprint for creating objects
// class is a template for creating objects
// class is a reference data type
// class is a user defined data type
// does javascript have classes? - no, javascript does not have classes
// javascript has objects
// we dont have classes in javascript but we have prototypes in jacascript
// it is just a programming style or a way to write code
// OOP -> it is a programming paradigm based on the concept of objects
// objects are collections of properties and methods that have a particular behaviour
// constructor function - it is a special function that is used to create objects
// const user = {
//     name: "Ankit",
//     age: 22,
//     email: "ankit@mail.com",
//     getEmailId: function(){
//         return this.email;
        // prefer using backticks here (`$ place the value here to use later `)
        // here it is used for tyhe current context of the email
//     }
// }
// console.log(user);
// console.log(user.getEmailId());

// here we have created user now suppose we want to create user2 we have to rewrite this code
// again that is why we use constructor functions
// constructor function - it is a special function that is used to create objects

// constructor function

// const promiseOne = new Promise(function(resolve, reject)
// new keyword is used to create a new object it is a constructor function

// function User(username, loginCount, isLoggedIn){
    // left side username is our property and right side username is the value that we are passing
    // this.username = username;
    // this.loginCount = loginCount;
    // this.isLoggedIn = isLoggedIn;

    // this.greetings = function(name){
    //     return `Hello ${name} your username is ${this.username}`;
    // }
    // return this is not necessary in the constructor function it does returns it by default
    // return this;
// }
// here new will create a new object and the constructor function will be called
// new will create an empty object and then it will call the constructor function and then it will return the object

// const userOne = new User("ankit", 12, true);
// const userTwo = new User("mohit", 12, true);
// console.log(userOne.greetings("Ankit"));
// console.log(userOne);
// console.log(userTwo);
// console.log(userOne);
// console.log(userTwo);

//Prototype in javascript
// prototype is a property of a javascript object
// prototype is an object itself
// prototype is a parent object of the object

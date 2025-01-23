// GOD LEVEL JAVASCRIPT

// Objects using {} or new Object()
// let obj = {
//     name : "aryan",
//     age: 19,
// }
// let newObj = new Object();
// newObj.name = "anil";
// newObj.age = 20;
// console.log(obj);
// console.log(newObj);

// This keyword
// console.log(this);
// function hello() { console.log(this);}
// let obj = {
//     sayHello: function() {
//         console.log(this);
//     }
// }

// call apply bind
// function makeHuman(a) {
//     console.log(this);
//     console.log(a);
// }
// makeHuman.call('aryan');
// makeHuman.apply({name: "anil"}, [1]);
// let bindedFunc = makeHuman.bind({name: "aryan"}, [12]);
// bindedFunc();

// Prototypal inheritance
// function makeHuman(name, age) {
//     this.name = name;
//     this.age = age;
// }
// makeHuman.prototype.sayHello = function() {
//     return "Hello " + this.name;    
// }
// const humane1 = new makeHuman("aryan", 12);
// const humane2 = new makeHuman("anil", 13);
// const humane3 = new makeHuman("sandhya", 19);
// const humane4 = new makeHuman("abhay", 20);
// console.log(humane1.sayHello());

// constructor function
// function construct() {
//     this.name;
//     this.age;
// }
// const c = new construct();

// closures
// function a() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }
// let inner = a();
// inner();
// inner();

// Event delegation
// const app = document.querySelector("#app")
// app.addEventListener("click", (e) => {
//     if(e.target.id === "play") {
//         console.log("play");
//     }else if(e.target.id == "pause") console.log("pause");
// });

// Higher order functions
// let arr = [1,2,3,4,5];
// arr.forEach((e) => {
//     console.log(e);
// })

// Error Handling
// function divide(a, b) {
//     try{
//         if(b == 0) throw Error("Divide by zero error");
//         return a/b;
//     }
//     catch(err) {
//         console.error(err);
//     }
// }
// console.log(divide(4, 2));

// Custom Events
// const ev = new Event("chalega");
// const app = document.querySelector("#app");
// app.addEventListener("chalega", () => {
//     alert("chalega");
// })
// app.dispatchEvent(ev);
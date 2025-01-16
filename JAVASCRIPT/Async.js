// Asyncronous JavaScript

// SetTimeout
// setTimeout(() => {
//     console.log("Hello World");
// }, 2000);

// setInterval
// let count = 0;
// const a = setInterval(()=>{
//     count++;
//     console.log(count);
//     if(count === 5){
//         clearInterval(a);
//     }
// }, 1000);

// Fetch API
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data));

// Axios api
// axios.get(`https://jsonplaceholder.typicode.com/posts`)
//     .then(data => console.log(data.data));

// Promises
// const promise = new Promise((res, rej) => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         if(data) res(data);
//         else rej("Error");
//     });
// })
// promise.then(data => console.log(data))
//     .catch(err => console.log(err));

// callback
// function abcd(url, callback) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => callback(data));
// }
// abcd('https://jsonplaceholder.typicode.com/posts', (data) => {
//     console.log(data);
// });

// Async Await
// async function fetchData(url) {
//     const res = await fetch(url);
//     const result = await res.json();
//     console.log(result);
// }
// fetchData('https://randomuser.me/api/');

// Generators
// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     yield 6;
// }
// const gen = generator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().done);
// console.log(gen.next().done);

// Web workers
const worker = new Worker("worker.js");
const arr = Array.from({length: 100}, (_, b) => b + 1);
worker.postMessage(arr);
worker.onmessage = data => {
    console.log(data);
}
console.log('hello');

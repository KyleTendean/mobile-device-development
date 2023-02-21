// Asynchronous (non-bloking) = lebih efesien karena dapat mengerjakan hal lain dulu dibandingkan dengan Synchoronous (bloking)
// dimana kita harus menunggu suatu proses selesai dulu baru bisa mengerjakan hal lain.
// Example JS

// Asynchronous dibagi 2 yaitu : Parallel & Concurent
// 1. Parallel

// setTimeout(()=>{
//     console.log("Proses 1");
// }, 3000);
// setTimeout(()=>{
//     console.log("Proses 2");
// }, 5000);
// console.log("Proses 3");
// Coding tidak cocok dengan kelas ini karena prosesnya berjalan bersamaan 


// 2. Concurent
// setTimeout(()=>{
//     console.log("proses 1");
//     setTimeout(()=>{
//          console.log("Proses 2");
//          setTimeout(()=>{
//             console.log("proses 3");
//          },5000);          
//         },5000);
//        },3000);
// coding diatas dapat mnenyebabkan callback hell karena susah untuk di edit jika coding sudah banyak 
// Nah untuk mengatasi hal tersebut ES6 dapat mepermudah yaitu menggunakan fungsi Promise
// Promise

let condision = true;
let newPromise = new Promise((resolve, reject) => {
    if (condision){
        resolve('Berhasil')
    }else {
        reject('Gagal')
    }
});
// untuk menggunkana promise ada 2 cara :
// 1. then-catch 
newPromise
.then((result)=>  `${result}!!!`)
.then((result2) => console.log(result2))
.catch((error)=>console.log(error))
.finally(()=> console.log("Akan dijalankan diakhir "))

// 2. Asyc-Await

const getData = async () => {
    let output = await newPromise;
    console.log(output);
}; 
getData();


const getJson = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response);
};
getJson();
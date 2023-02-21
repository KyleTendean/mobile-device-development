// // // // konsepnya setiap array dapat disesuaikan dalam index sesuai urutannya.
// // // let john = ['john', 'doe', 35, true, [80,90,100]];

// // // console.log (john.length)
// // // john[2] = 40;
// // // console.log(john[john.length -1]);

// // // let array = [1,2,3, "halo", false, true];
// // // console.log(array.toString());
// // // console.log (array.join());
// // // console.log (array.join());

// // const numbers = [1,2,3,4,5];
// // numbers

// let john = {
//     firstname: 'John',
//     lastname: "Doe",
//     age: 35,
//     isMarried: true,
//     grade: [80,90,100]
//     greetings: function()
// };
// console.log (john["grade"]);
// console.log(john);
// john.job = "pengedar sabu";
// console.log(john);

//Array built-in method
// old school -> cara lama
// let numbers = [1,2,3,4,5]
// for(let i=0; i<numbers.length ; i++){
//     console.log(numbers[i]);
// }

// let numbers = [1,2,3,4,5,9,0]
// numbers.forEach(function(tampilan, urutan ){
//     console.log(tampilan + " urutan: " + urutan);
// })

let student = [
    {
        fullName: "John",
        age: 25,
        address: "Manado",
    },
    {
        fullName: "Robert",
        age: 23,
        address: "Kema",
    },
    {
        fullName: "Seba",
        age: 27,
        address: "Maluku",
    },  
];
student.forEach(function(tampilkan){
    console.log(tampilkan.address);
});
let studentName1 = student.map(function(tampilkan){
    return tampilkan.age;
});
console.log(studentName1);
  student.filter(function(tampilkan){
    return tampilkan > 24;
});
console.log(kyle.age);

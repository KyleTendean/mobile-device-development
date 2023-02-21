// index.js
import { name, orang, sayHello } from "./export.js ";


// Menggunakan hasil import
console.log(name); // Output: Thoriq
console.log(orang); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
sayHello(orang.nama); // Output: Hello, Thoriq!

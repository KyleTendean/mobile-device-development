let name = "Thoriq";


let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};


function sayHello(user) {
  console.log(`Hello, ${user}!`);
}


// Mengexport variable name, object orang dan function sayHello sekaligus
export { name, orang, sayHello };

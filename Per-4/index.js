//For each of the exercises below, assume you are starting with the following people array.

let people = ["Greg", "Mary", "Devon", "James"];

//Using a loop, iterate through this array and console.log all of the people.

console.log("Nomor 1");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
//using a for Each(), iterate through this array and console.lof all of the people.

console.log("\n Nomor 2")
people.forEach(function(people){
    console.log(people);
});

//Write the command to remove "Greg" from the array. 

console.log("\n Nomor 3")
people.shift();
console.log(people);

//Write the command to remove "James" from the array.

console.log("\n Nomor 4")
people.pop();
console.log(people);

// write the command to add "Matt" to the front of the array.

console.log("\n Nomor 5")
people.unshift("Matt");
console.log(people);

// Write the command to add your name to the end of the arrat.

console.log("\n Nomor 6")
people.push("Helsinki");
console.log(people);

// Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

console.log("\n Nomor 7")
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
};

// Write the command to make a copy of the array using slice. The copy should not include "Mary" or "Matt"

console.log("\n Nomor 8")
let copy = people.slice(1);
console.log(copy);

// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].

console.log("\n Nomor 9")
people.splice(1,2,"Elizabeth","Artie");
console.log(people);

// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
 
console.log("\n Nomor 10")
const withBob = people.concat ("Bob");
console.log(withBob);
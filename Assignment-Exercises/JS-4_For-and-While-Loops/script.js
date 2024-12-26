// scripts.js

// Using a for loop to print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

// Using a while loop to print a list of hobbies
let hobbies = [
  "Reading", // Example hobby
  "Writing", // Example hobby
  "Cycling", // Example hobby
  "Hiking", // Example hobby
  "Cooking", // Example hobby
  "Drawing", // Example hobby
  "Gaming", // Example hobby
  "Gardening", // Example hobby
  "Photography", // Example hobby
  "Traveling", // Example hobby
];

let index = 0;
while (index < hobbies.length) {
  console.log(`Hobby ${index + 1}: ${hobbies[index]}`);
  index++;
}

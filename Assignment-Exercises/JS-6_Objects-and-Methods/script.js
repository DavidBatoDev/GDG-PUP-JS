// Step 1: Create a car object
const car = {
  // Properties of the car
  make: "Toyota", // The brand of the car
  model: "Corolla", // The model of the car
  year: 2021, // The manufacturing year of the car
};

// Step 2: Create a function to describe the car
function getDescription(car) {
  // Returns a description of the car
  return `This car is a ${car.year} ${car.make} ${car.model}.`;
}

// Step 3: Call the function and display the result
console.log(getDescription(car));

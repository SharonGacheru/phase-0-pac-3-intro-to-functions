// Basic function
function sayHello() {
    console.log("Hello!");
  }
  
  sayHello();
  
  // Function with parameters
  function sayHelloTo(name) {
    console.log(`Hello, ${name}!`);
  }
  
  sayHelloTo("Guadalupe");
  
  // Function with multiple parameters
  function say(greeting, name) {
    console.log(`${greeting}, ${name}!`);
  }
  
  say("Goodbye", "Julio");
  
  // Function with return value
  function add(x, y) {
    return x + y;
  }
  
  console.log(add(1, 2)); 
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  console.log(multiply(3, 4)); 
  
  // Function to calculate the area of a rectangle
  function calculateArea(length, width) {
    return length * width;
  }
  
  console.log(calculateArea(5, 10));
  
  // Function to greet a user
  function greetUser(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
  }
  
  console.log(greetUser("John", "Doe"));
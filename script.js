console.log("Hello, World!");

let myString ="a2b3c";
console.log(myString);

let myNumber = 123;
console.log(typeof myNumber);

console.log(10 + "eggs");
console.log(10 + 7 + "eggs");
console.log("eggs" + 10 + 7);

console.log(10==10);
//Both Conditions Need to be true
console.log(7>3)&& (5<10);

//One condition must be true
console.log(10>3) || (10>12);

//If the staement is logical or not
console.log(!5.3)

function introduction(name, age) {
    console.log("Hello my name is " + name + " and I am " + age + " years old.");
}

introduction("Luz", 15);

const hour= new Date().getHours();
let greeting = "";

if (hour < 12) {
    greeting = "Good morning!☀️";
}else if (hour < 18) {
    greeting = "Good afternoon!🌤️";
}else {
    greeting = "Good evening!🌙";
}
document.getElementById("greeting").innerText = greeting;
const reviews= [
{
    id: 1,
    name:'Jeff Palmere',
    job: 'Teacher and Dance Coach',
    img:'jeff.jpg',
    text: 'Watching Luz grow throughout middle school and highschool has been incredibly rewarding. Their dedication, curiosity, and positive attitude made them a standout participant, and they showed great promise in everything they tackled',
},
{
    id: 2,
    name:'Mr.Broad',
    job: 'Teacher',
    img:'Broad.png',
    text: 'Luz demonstrated exceptional growth and a strong work ethic during highschool. They were always eager to learn, ask thoughtful questions, and contribute positively to every task they took.',
},
{
    id: 3,
    name:'Emma Garcia',
    job: 'Math Teacher',
    img:'Garcia.png',
    text: 'Luz is an incredibly dedicated and focused student who always strives to do their best. Their enthusiasm for learning and willingness to ask questions and engage deeply in class discussions made them a standout in my classroom.',
}

]

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
 
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});


function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});










// console.log("Hello, World!");

// let myString ="a2b3c";
// console.log(myString);

// let myNumber = 123;
// console.log(typeof myNumber);

// console.log(10 + "eggs");
// console.log(10 + 7 + "eggs");
// console.log("eggs" + 10 + 7);

// console.log(10==10);
// //Both Conditions Need to be true
// console.log(7>3)&& (5<10);

// //One condition must be true
// console.log(10>3) || (10>12);

// //If the staement is logical or not
// console.log(!5.3)

// function introduction(name, age) {
//     console.log("Hello my name is " + name + " and I am " + age + " years old.");
// }

// introduction("Luz", 15);

// const hour= new Date().getHours();
// let greeting = "";

// if (hour < 12) {
//     greeting = "Good morning!☀️";
// }else if (hour < 18) {
//     greeting = "Good afternoon!🌤️";
// }else {
//     greeting = "Good evening!🌙";
// }
// document.getElementById("greeting").innerText = greeting;
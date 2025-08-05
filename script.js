const reviews= [
{
    id: 1,
    name:'Susan Smith',
    job: 'Web Developer',
    img:'myimage.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',
},
{
    id: 2,
    name:'Anna Johnson',
    job: 'Web designer',
    img:'#',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',
},
{
    id: 3,
    name:'Peter Jones',
    job: 'Intern',
    img:'#',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?',
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
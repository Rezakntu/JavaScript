const reviews = [
  {
    id: 1,
    name: "Mike Tyson",
    job: "Web Developer",
    img: "./profile_pics/person-1.jpg",
    text: "Full-stack developer\nProgramming languages: Java, PHP, Python, JavaScript"
  },
  {
    id: 2,
    name: "Gemma Atkinson",
    job: "Web Designer",
    img: "./profile_pics/person-2.jpg",
    text: "UI/UX designer\nPhotoshop graphics"
  },
  {
    id: 3,
    name: "Jessica Alba",
    job: "Business Manager",
    img: "./profile_pics/person-3.jpg",
    text: "A short-tempered manager who can't stand declining sales"
  },
  {
    id: 4,
    name: "Megan Fox",
    job: "Accountant",
    img: "./profile_pics/person-4.jpg",
    text: "If you want to get your salary on time,\nyou should respect me!"
  },
  {
    id: 5,
    name: "Lisa White",
    job: "Intern",
    img: "./profile_pics/person-5.jpg",
    text: "Software engineering student\nPython programmer"
  },
  {
    id: 6,
    name: "Elizabeth Ocaner",
    job: "Intern",
    img: "./profile_pics/person-6.jpg",
    text: "Backend developer"
  },
  {
    id: 7,
    name: "John Smith",
    job: "Manager",
    img: "./profile_pics/person-7.jpg",
    text: "Company manager"
  },
  {
    id: 8,
    name: "Barak Ford",
    job: "Manager's right-hand man",
    img: "./profile_pics/person-8.jpg",
    text: "I do everything for the company's success"
  },
  {
    id: 9,
    name: "Brad Pitt",
    job: "Intern",
    img: "./profile_pics/person-9.jpg",
    text: "Frontend developer"
  }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// show person function

function showPerson(id){
    const item = reviews[id];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// load initial item
window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItem);
});

// show next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// show preview person

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// show random person

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})
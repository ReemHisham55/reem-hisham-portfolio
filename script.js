let counter = document.getElementById("counter");
let word = "scale efficiently.";
let i = 0;

let typing = setInterval(() => {
  counter.innerText += word[i];
  i++;

  if (i === word.length) {
    clearInterval(typing);
  }
}, 100);

// Mobile Menu 

let nav = document.getElementById("nav");
let menu = document.getElementById("menu");
let menuIcon = menu.querySelector("i");
let navLinks = document.querySelectorAll("nav a");

function closeMenu() {
  nav.classList.remove("open");
  menuIcon.classList.replace("fa-xmark", "fa-bars");
  menu.setAttribute("aria-expanded", "false");
}

menu.onclick = () => {
  if (nav.classList.contains("open")) {
    closeMenu();
  } else {
    nav.classList.add("open");
    menuIcon.classList.replace("fa-bars", "fa-xmark");
    menu.setAttribute("aria-expanded", "true");
  }
};

//  Dark.Light 
let themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    themeToggle.classList.replace("fa-moon", "fa-sun");
  } else {
    themeToggle.classList.replace("fa-sun", "fa-moon");
  }
};

// Scroll Reveal
let scroll = document.getElementById("scroll");
let reveals = document.querySelectorAll(".reveal");

function onScroll() {

  if (window.scrollY > 200) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }

  for (let i = 0; i < reveals.length; i++) {
    if (reveals[i].getBoundingClientRect().top < window.innerHeight - 50) {
      reveals[i].classList.add("show");
    }
  }
}

window.addEventListener("scroll", onScroll);
onScroll();

scroll.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

//Form Validation 
let inputs = document.getElementsByClassName("inputs");
let messages = document.getElementsByClassName("messages");
let success = document.getElementById("success");

function Validationform(event) {
  event.preventDefault();
  let valid = true;
  success.innerText = "";

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      messages[i].innerText = `${inputs[i].name} is required`;
      valid = false;
    } else {
      messages[i].innerText = "";
    }
  }

  if (valid) {
    success.innerText = "Message submitted successfully";
    for (let input of inputs) {
      input.value = "";
    }
  }
}
let counts = document.querySelectorAll(".count");
let stats = document.querySelector(".stats");
let counted = false;

for (let i = 0; i < counts.length; i++) {
  counts[i].innerText = "0" + counts[i].dataset.suffix;
}

function countUp(element) {
  let target = Number(element.dataset.target);
  let suffix = element.dataset.suffix;
  let current = 0;
  let timer = setInterval(() => {
    current += target / 60;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.innerText = Math.round(current) + suffix;
  }, 25);
}

function startCounters() {
  if (counted) return;
  if (stats.getBoundingClientRect().top < window.innerHeight - 60) {
    counted = true;
    for (let i = 0; i < counts.length; i++) {
      countUp(counts[i]);
    }
  }
}
window.addEventListener("scroll", startCounters);
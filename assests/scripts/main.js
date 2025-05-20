const words = [
  "I build full-stack solutions 💻",
  "I bring data to life 📊",
  "I automate workflows ⚙️",
  "I craft user experiences 🌟"
];

let i = 0;
let j = 0;
let isDeleting = false;
let speed = 100;
const element = document.getElementById("typewriter");

function typeEffect() {
  const word = words[i];
  if (isDeleting) {
    element.textContent = word.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(typeEffect, speed / 2);
    }
  } else {
    element.textContent = word.substring(0, j++);
    if (j > word.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      setTimeout(typeEffect, speed);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

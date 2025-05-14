// 💬 Typing animation
const words = [
  "I decode patterns in data ",
  "I design intelligent ML systems ",
  "I automate decisions with algorithms ",
  "I bring full-stack solutions to life ",
  "I make data-driven apps intuitive and fast ",
  "I connect insights to impact "
];

let currentWord = 0;
let currentChar = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 40;
const pauseDelay = 1500;

function type() {
  const el = document.getElementById("typewriter");
  if (!el) return; // Exit on pages without typewriter section

  const word = words[currentWord];
  el.textContent = isDeleting
    ? word.substring(0, currentChar--)
    : word.substring(0, currentChar++);

  if (!isDeleting && currentChar === word.length) {
    isDeleting = true;
    setTimeout(type, pauseDelay);
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentWord = (currentWord + 1) % words.length;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();

  // 🎯 Animate on Scroll
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }
});

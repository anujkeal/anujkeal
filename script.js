// DARK MODE TOGGLE
const darkToggle = document.getElementById("darkToggle");
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// FORM SUBMISSION "THANK YOU" POPUP
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for submitting!");
    form.reset(); // clear the form
  });
}

// SCROLL PROGRESS BAR
const scrollBar = document.getElementById("scroll-bar");
window.addEventListener("scroll", () => {
  if (scrollBar) {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollBar.style.width = scrollPercent + "%";
  }
});

// HERO TYPEWRITER EFFECT
const typeTarget = document.querySelector(".hero h1");
if (typeTarget) {
  const text = "Welcome to the Portfolio of Anuj Keal";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      typeTarget.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeTarget.textContent = "";
  typeWriter();
}

// INIT AOS
AOS.init();

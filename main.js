/* LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    if (loader) loader.style.display = "none";
  }, 1600);
});

/* CURSOR */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("active");
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* LANGUAGE SWITCH */
function setLang(lang) {
  const title = document.querySelector(".glitch");
  const sub = document.querySelector(".subtitle");

  if (!title || !sub) return;

  if (lang === "en") {
    title.innerText = "Engineer Hamdy";
    sub.innerHTML =
      "Full-Stack Engineer<br>Designing scalable systems & premium digital solutions";
  } else {
    title.innerText = "المهندس حمدي";
    sub.innerHTML =
      "مهندس برمجيات متكامل<br>تصميم أنظمة قوية وحلول رقمية فاخرة";
  }
}

/* PARTICLES BACKGROUND */
const canvas = document.getElementById("particles");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#3b82f6";

    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}



/* IMAGE PARALLAX */
const heroImg = document.querySelector(".hero-image img");

if (heroImg) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });

  document.addEventListener("mouseleave", () => {
    heroImg.style.transform = "translate(0,0) scale(1)";
  });
}


setInterval(() => {
  if (heroImg) {
    heroImg.style.transform += " scale(1.01)";
    setTimeout(() => {
      heroImg.style.transform = heroImg.style.transform.replace(" scale(1.01)", "");
    }, 400);
  }
}, 4000);




/* SHOW CONTACT BAR AFTER SCROLL */
const contactBar = document.querySelector(".contact-bar");

window.addEventListener("scroll", () => {
  if (!contactBar) return;

  if (window.scrollY > 300) {
    contactBar.classList.add("show");
  } else {
    contactBar.classList.remove("show");
  }
});
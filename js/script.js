const cursor = document.querySelector('.cursor');
const bigCursorElments = document.querySelectorAll(".big-cursor, a, button");

let mouseX = 0, mouseY = 0;
let isMouseMoving = false;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  isMouseMoving = true;
});

function updateCursor() {
  if (isMouseMoving) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    isMouseMoving = false;
  }
  requestAnimationFrame(updateCursor);
}

requestAnimationFrame(updateCursor);

bigCursorElments.forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursor.style.height = "40px";
    cursor.style.width = "40px";
  });

  element.addEventListener("mouseleave", () => {
    cursor.style.height = "15px";
    cursor.style.width = "15px";
  });
});

document.addEventListener('scroll', function() {
  const mainInfoSection = document.querySelector('.main-info');
  const navLinks = document.querySelectorAll('nav a');
  const mainInfoPosition = mainInfoSection.getBoundingClientRect();
  const offset = 280;

  navLinks.forEach(link => {
    if (mainInfoPosition.bottom <= offset) {
      link.classList.add('white');
    } else {
      link.classList.remove('white');
    }
  });
});

// Initialize Lenis
const lenis = new Lenis({
  duration: 2,
  smooth: true
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
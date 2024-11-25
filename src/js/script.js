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
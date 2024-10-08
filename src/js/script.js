const cursor = document.querySelector('.cursor');
// Getting all the elments where the cursor should be bigger
const bigCursorElments = document.querySelectorAll(".big-cursor, a, button")


document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

bigCursorElments.forEach((element) => {
  element.addEventListener("mouseover", e => {
    cursor.style.height = "40px"
    cursor.style.width = "40px" 
  })

  element.addEventListener("mouseleave", e => {
    cursor.style.height = "15px"
    cursor.style.width = "15px"
  })
})
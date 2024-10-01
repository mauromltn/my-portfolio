const cursor = document.querySelector('.cursor');
// Getting all the elments where the cursor should be bigger
const bigCursorElments = document.querySelectorAll(".big-cursor, a, button")


document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

bigCursorElments.forEach((element) => {
  element.addEventListener("mouseover", e => {
    cursor.style.height = "50px"
    cursor.style.width = "50px" 
  })

  element.addEventListener("mouseleave", e => {
    cursor.style.height = "20px"
    cursor.style.width = "20px" 
  })
})
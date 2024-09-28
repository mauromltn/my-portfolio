const cursor = document.querySelector('.cursor');
// Getting all the elments where the cursor should be bigger
const bigCursorElments = document.querySelectorAll(".big-cursor, p, a, h1, h2, h3, button")


document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

bigCursorElments.forEach((element) => {
  element.addEventListener("mouseover", e => {
    cursor.style.height = "100px"
    cursor.style.width = "100px" 
  })

  element.addEventListener("mouseleave", e => {
    cursor.style.height = "20px"
    cursor.style.width = "20px" 
  })
})
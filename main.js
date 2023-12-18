window.addEventListener('scroll', function() {
var backToTop = document.querySelector('.back-to-top');
if (window.scrollY > 0) {
  backToTop.classList.add('active');
} else {
  backToTop.classList.remove('active');
}
});

var backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', function(e) {
e.preventDefault();
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
});
//hamburger
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeBtn = document.createElement('div');
closeBtn.classList.add('close-btn');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    hamburger.style.display = 'none'; // Hide the hamburger menu
    menu.appendChild(closeBtn); // Append the close button to the menu
  } else {
    hamburger.style.display = 'flex'; // Show the hamburger menu
    closeBtn.remove(); // Remove the close button from the DOM
  }
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.style.display = 'flex'; // Show the hamburger menu
  closeBtn.remove(); // Remove the close button from the DOM
});


  console.log("hey stink! Myname is Patty. I am a web designer text me on +263785296988 on whatsapp")

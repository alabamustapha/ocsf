// beginning of toggle
const toggleBtn = document.querySelector(".nav__menu");
const links = document.querySelector(".nav__list");

toggleBtn.addEventListener("click", function(){
    links.classList.toggle("show-links");
});

// Carousel Part
// var span = document.getElementsByTagName('span');
// var modal = document.getElementsByTagName("div");
// var l = 0;
// span[1].onclick = ()=> {
//     l++;
//     for(var i of modal) {
//         if (l==0) {
//             i.style.left = "0px";
//         }
//         if (l==1) {
//             i.style.left = "-740px";
//         }
//         if (l==2) {
//             i.style.left = "-1480px";
//         }
//         if (l==3) {
//             i.style.left = "-2220px";
//         }
//         if (l==4) {
//             i.style.left = "-2960px";
//         }
//         if (l>4) {
//             l = 4;
//         }
//     }
// }

// span[0].onclick = ()=> {
//     l--;
//     for(var i of modal) {
//         if (l==0) {
//             i.style.left = "0px";
//         }
//         if (l==1) {
//             i.style.left = "-740px";
//         }
//         if (l==2) {
//             i.style.left = "-1480px";
//         }
//         if (l==3) {
//             i.style.left = "-2220px";
//         }
//         if (l<0) {
//             l = 0;
//         }
//     }
// }
// End of Carousel


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("featured__slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
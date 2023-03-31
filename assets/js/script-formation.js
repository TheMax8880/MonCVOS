let brkScreen=1200;
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
if (window.screen.width > brkScreen){
  window.onscroll = function() {scrollFunction()};
}

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector('nav').style.padding = '2%';
      document.querySelector('nav').style.height = '10vh';
      document.querySelector('nav ul').style.fontSize = '1rem';
      document.getElementById("myBtn").style.display = "block";
      
    } else {
        document.querySelector('nav').style.padding = '3%';
        document.querySelector('nav').style.height = '18vh';
        document.querySelector('nav ul').style.fontSize = '1.4rem';
        document.getElementById("myBtn").style.display = "none";
    }
}

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function allFunctionsOnScroll() {
  scrollFunction();
}


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});



const pulses = gsap.timeline({
  defaults: {
    duration: 0.05, 
    autoAlpha: 1, 
    scale: 2, 
    transformOrigin: 'center', 
    ease: "elastic(2.5, 1)"
  }})
.to(".ball02, .text01", {}, 0.1) 
.to(".ball03, .text02", {}, 0.27)
.to(".ball04, .text03", {}, 0.45)
.to(".ball05, .text04", {}, 0.60)

const main = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }})
.to(".ball01", {duration: 0.01, autoAlpha: 1})
.from(".theLine", {drawSVG: 0}, 0)
.to(".ball01", {motionPath: {
  path: ".theLine", 
  align:".theLine",
  alignOrigin: [0.5, 0.5],
}}, 0)
.add(pulses, 0);

let current01 = document.querySelector('.text01');
let current02 = document.querySelector('.text02');
let current03 = document.querySelector('.text03');
let current04 = document.querySelector('.text04');
let prevSiblings01 = current01.nextElementSibling;
let prevSiblings02 = current02.nextElementSibling;
let prevSiblings03 = current03.nextElementSibling;
let prevSiblings04 = current04.nextElementSibling;



current01.addEventListener('click', function () {
  document.getElementById('cduiModal').style.display = 'block';
});
prevSiblings01.addEventListener('click', function () {
  document.getElementById('cduiModal').style.display = 'block';
});
current02.addEventListener('click', function () {
  document.getElementById('cmModal').style.display = 'block';
});
prevSiblings02.addEventListener('click', function () {
  document.getElementById('cduiModal').style.display = 'block';
});
current03.addEventListener('click', function () {
  document.getElementById('boulModal').style.display = 'block';
});
prevSiblings03.addEventListener('click', function () {
  document.getElementById('cduiModal').style.display = 'block';
});
current04.addEventListener('click', function () {
  document.getElementById('ingModal').style.display = 'block';
});
prevSiblings04.addEventListener('click', function () {
  document.getElementById('cduiModal').style.display = 'block';
});

document.querySelectorAll('button.closeModal').forEach((item) =>
item.addEventListener('click', closeModal));

document.querySelectorAll('.closeModal').forEach((item) =>
item.addEventListener('click', closeModal));



function closeModal(){
document.querySelectorAll('.modal').forEach(item =>item.style.display = 'none');

}








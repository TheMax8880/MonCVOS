
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { allFunctionsOnScroll() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('nav').style.padding = '1%';
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



function allFunctionsOnScroll() {
    scrollFunction();
}

console.clear();

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


document.querySelector('.text01').addEventListener('click', function () {
  document.getElementById('cduiModal').style.display = 'block';
});

document.querySelector('.text02').addEventListener('click', function () {
  document.getElementById('cmModal').style.display = 'block';
});
document.querySelector('.text03').addEventListener('click', function () {
  document.getElementById('boulModal').style.display = 'block';
});
document.querySelector('.text04').addEventListener('click', function () {
  document.getElementById('ingModal').style.display = 'block';
});

document.querySelectorAll('button.closeModal').forEach((item) =>
item.addEventListener('click', closeModal));

document.querySelectorAll('.closeModal').forEach((item) =>
item.addEventListener('click', closeModal));



function closeModal(){
document.querySelectorAll('.modal').forEach(item =>item.style.display = 'none');

}








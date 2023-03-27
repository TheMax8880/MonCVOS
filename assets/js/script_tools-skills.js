ScrollReveal().reveal('div.column img', {
    interval: 100,
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

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
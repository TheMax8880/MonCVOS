

window.onload = function () {
    try {
        // couleur du texte
        TagCanvas.textColour = '#ffffff';
        // couleur de l'arriere plan
        TagCanvas.outlineColour = '#00ace9';
        // police utilisée
        TagCanvas.textFont= 'Raleway, sans-serif';
        // taille du texte
        TagCanvas.textHeight=40;
        // etirement horizontale
        TagCanvas.stretchX=2;
        // Set to true to decelerate when highlighted tags freeze instead of stopping suddenly.
        TagCanvas.freezeDecel=true;
        // Set to true to pause movement when a tag is highlighted.
        TagCanvas.freezeActive=true;
        // Size of marching ants dash for outline/classic highlights, 0 for no dashes
        TagCanvas.outlineDash=150;
        // Speed of marching ants animation, 0 for no movement, negative for reverse
        TagCanvas.outlineDashSpeed=5;
        // Enables zooming the cloud in and out using the mouse wheel or scroll gesture.
        TagCanvas.wheelZoom=false;
        // Set to true to enable zooming in and out of the cloud by pinching on touchscreen devices.
        TagCanvas.pinchZoom=true;
        // Set to true to randomize the order of the tags.
        TagCanvas.shuffleTags=true;

        TagCanvas.Start('myCanvas');
    } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
    }
};


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       document.querySelector('nav').style.padding = '1%';
//       document.querySelector('nav').style.height = '10vh';
//       document.querySelector('nav ul').style.fontSize = '1rem';
      
//     } else {
//         document.querySelector('nav').style.padding = '3%';
//         document.querySelector('nav').style.height = '18vh';
//         document.querySelector('nav ul').style.fontSize = '1.4rem';
//     }

//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         document.querySelector('nav').style.display = 'none';
//         document.getElementById("myBtn").style.display = "block";
//         document.querySelector('.scroll-down').style.display='none'
        
//       } else {
//         document.querySelector('nav').style.display = 'inherit';
//         document.getElementById("myBtn").style.display = 'none';
//         document.querySelector('.scroll-down').style.display='block'
//       }
//   }

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});


ScrollTrigger.create({
  snap: 1 / 6 // snap whole page to the closest section!
});










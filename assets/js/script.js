

window.onload = function () {
    try {
        // couleur du texte
        TagCanvas.textColour = '#ffffff';
        // couleur de l'arriere plan
        TagCanvas.outlineColour = '#00ace9';
        // police utilisée
        TagCanvas.textFont= 'Raleway, sans-serif';
        // taille du texte
        TagCanvas.textHeight=60;
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
  snap: 1 / 7 // snap whole page to the closest section!
});


// for another helper function that calculates the exact progress value along a motion path where it'll hit the center of the provided target on the given axis ("y" by default), see https://codepen.io/GreenSock/pen/BaPdrKM
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
gsap.set("#tractor", {transformOrigin: "50% 50%"});
let rotateTo = gsap.quickTo("#tractor", "rotation"),
    prevDirection = 0;

gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top center",
    end: () => "+=" + document.querySelector("#motionPath").getBoundingClientRect().height,
    scrub: 0.5,
    markers: false,
    onUpdate: self => {
      if (prevDirection !== self.direction) { // only run this when we're changing direction
        rotateTo(self.direction === 1 ? 0 : -180);
        prevDirection = self.direction;
      }
    }
  },
  ease: pathEase("#motionPath"), // a custom ease that helps keep the tractor centered
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  }
});




// helper function that returns and ease that bends time to ensure the tractor stays relatively centered. Requires MotionPathPlugin of course
function pathEase(path, axis="y", precision=1) {
		let rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
			useX = axis === "x",
			start = rawPath[0][useX ? 0 : 1],
			end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)],
			range = end - start,
			l = Math.round(precision * 200),
			inc = 1 / l,
			positions = [0],
			a = [],
			minIndex = 0,
			getClosest = p => {
				while (positions[minIndex] <= p && minIndex++ < l) { }
				a.push((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
			},
			i = 1,
			p, v;
		for (; i < l; i++) {
			p = i / l;
			v = MotionPathPlugin.getPositionOnPath(rawPath, p)[axis];
			positions[i] = (v - start) / range;
		}
		positions[l] = 1;
		for (i = 0; i < l; i++) {
			getClosest(i / l);
		}
		a.push(1);
		return p => {
			let i = p * l,
				s = a[i | 0];
			return s + (a[Math.ceil(i)] - s) * (i % 1);
		}
	}








// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  
  // wait until external stylesheets, links, images, and other external assets are loaded in the window
  window.addEventListener("load", function(){

    function animateFrom(elem, direction) {
      direction = direction || 1;
      var x = 0,
          y = direction * 100;
      if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
      }
      elem.style.transform = "translate(" + x + "px, " + y + "px)";
      elem.style.opacity = "0";
      gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 1.25, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto",
        stagger: 0.15
      });
    }
    
    function hide(elem) {
      gsap.set(elem, {autoAlpha: 0});
    }
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });

//Hero section animations

    function pill() {
      var tl = new gsap.timeline();
  
      tl.delay(0)
        .to(".pill", 0, {opacity:1})
        .to(".pill", 0.3, {left:'100%'}, "+=0.2")
        .to(".pill", 0.3, {left:0})
        .to(".pill", 0.3, {width:'120%'})
      return tl;
    }

    function pill_texts() {
      var tl = new gsap.timeline({repeat:-1});
  
      tl.delay(0)
        .to(".pill_text_01", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_01", 0.5, {top:'-150%'}, "+=0.75")
        .to(".pill_text_02", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_02", 0.5, {top:'-150%'}, "+=0.75")
        .to(".pill_text_03", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_03", 0.5, {top:'-150%'}, "+=0.75")
        .to(".pill_text_04", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_04", 0.5, {top:'-150%'}, "+=0.75")
        .to(".pill_text_05", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_05", 0.5, {top:'-150%'}, "+=0.75")
        .to(".pill_text_06", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_06", 0.5, {top:'-150%'}, "+=0.75")
      return tl;
    }

    function grow_texts() {

      var tl = new gsap.timeline({repeat:0});
      
      if(window.innerWidth >= 768){
        tl.delay(0)
          .to(".grow_text_01", 1, {opacity:1})
          .to(".grow_text_02", 1, {opacity:1}, "-=0.75")
          .to(".grow_text_03", 1, {opacity:1}, "-=0.75", "grow_t")
          .to(".blobs", 1.75, {width:'130%', paddingBottom:'130%'}, "grow_t-=0.75")
          .to(".blobs", 0.5, {width:'125%', paddingBottom:'125%'})
          .to(".grow_text_01", 0.5, {opacity:0}, "-=0")
          .to(".grow_text_02", 0.5, {opacity:0}, "-=0")
          .to(".grow_text_03", 0.5, {opacity:0}, "-=0")
          .to(".grow_text_01", 0, {display:'none'})
          .to(".grow_text_02", 0, {display:'none'})
          .to(".grow_text_03", 0, {display:'none'})
          .to(".grow_text", 0, {lineHeight:0})
          .to(".blob_bkg", 1, {width: '100%', height: '100%'}, "-=1")
          .to("#contact_form", 0, {display:'block'})
          .to("#contact_form", 0, {height:'auto'})
          .to(".blob_bkg", 0.5, {height: '220%'})
          //.to(".blobs", 0.5, {height: '120%'})
          .to(".blob_01", 0.5, {top: '5%', left: '5%'}, "-=0.5")
          .to(".blob_02", 0.5, {top: '8%', left: '5%'}, "-=0.5")
          .to(".blob_03", 0.5, {top: '5%', left: '5%'}, "-=0.5")
          .to("#contact_form", 0.5, {opacity:1}, "-=0.5")
          
          /*.to(".blob_01", 0, {display: 'none'})
          .to(".blob_02", 0, {display: 'none'})
          .to(".blob_03", 0, {display: 'none'})*/
      } else {
        tl.delay(0)
          .to(".grow_text_01", 1, {opacity:1})
          .to(".grow_text_02", 1, {opacity:1}, "-=0.75")
          .to(".grow_text_03", 1, {opacity:1}, "-=0.75")
          .to("#contact_form", 0.5, {opacity:1})
      }
      
      return tl;
    }

    var master = gsap.timeline();
    master.defaultEase = Power1.easeInOut;
    
    master.addLabel("start")
          .add(pill())
          .add(pill_texts())
          
    master.add(grow_texts({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: "#contact",
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "bottom", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        snap: {
          //snapTo: "labels", // snap to the closest label in the timeline
          //duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
        }
      }
    }));


  }, false);
  
});






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
  
      tl.delay(0)
        .to(".grow_text_01", 1.2, {opacity:1})
        .to(".grow_text_02", 1.2, {opacity:1}, "-=0.75")
        .to(".grow_text_03", 1.2, {opacity:1}, "-=0.75")
        .to(".blobs", 3, {width:'125%', paddingBottom:'125%'}, "-=0.75")
        .to(".grow_text_01", 0.5, {opacity:0})
        .to(".blob_bkg", 2.5, {width: '100%', height: '100%'}, "-=0.5")
        .to(".grow_text_02", 0.5, {opacity:0})
        .to(".blob_01", 0.5, {top: '5%', left: '5%'})
        .to(".grow_text_03", 0.5, {opacity:0})
        .to(".blob_02", 1, {top: '8%', left: '5%'})
        .to(".blob_03", 0.5, {top: '5%', left: '5%'})
        .to(".blob_01", 0, {display: 'none'})
        .to(".blob_02", 0, {display: 'none'})
        .to(".blob_03", 0, {display: 'none'})
        .to(".grow_text_01", 0, {display:'none'})
        .to(".grow_text_02", 0, {display:'none'})
        .to(".grow_text_03", 0, {display:'none'})
        .to(".grow_text", 0, {lineHeight:0})
        .to("#contact_form", 0, {display:'block'})
        .to("#contact_form", 0, {height:'auto'})
        .to(".blobs", 0.75, {height: '120%'})


      return tl;
    }

    

    var master = gsap.timeline();
    master.defaultEase = Power1.easeInOut;
      
    master.addLabel("start")
          .add(pill())
          .add(pill_texts())
          .add(grow_texts())
          


  }, false);
  
});






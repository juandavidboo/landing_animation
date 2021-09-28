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
  // loading content on viewport
  window.addEventListener("load", function(){

    //function to determin scroll direction/animation for .gs_reveal
    function animateFrom(elem, direction) {
      //console.log(elem)
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
        //stagger: 0.15,
        ease: "expo", 
        overwrite: "auto",
      });
    }
    
    function hide(elem) {
      gsap.set(elem, {autoAlpha: 0});
    }
    
    //Array to assign animateFrom() function
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
      
    });

    //sequenced animations for same time loading elements
    ScrollTrigger.batch(".batch", {
      start: "top bottom-=25px",
      onEnter: batch => gsap.to(batch, {duration: 0.30, opacity: 1, y: 0, stagger: 0.15}),
      onLeaveBack:batch => gsap.to(batch, {opacity: 0, y: 100, stagger: 0.1})
    });

    //Hero section animation

    function pill() {
      var tl = new gsap.timeline();
  
      tl.to(".pill", 0, {opacity:1})
        .to(".pill", 0.3, {left:'100%'}, "+=0.2")
        .to(".pill", 0.3, {left:0})
        .to(".pill", 0.3, {width:'120%'})
      return tl;
    }

    function pill_texts() {
      var tl = new gsap.timeline({repeat:-1});
  
      tl.to(".pill_text_01", 0.5, {top:'50%'}, "-=0.5")
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
          //.to(".grow_text_01", 1, {opacity:1})
          //.to(".grow_text_02", 1, {opacity:1}, "-=0.75")
          //.to(".grow_text_03", 1, {opacity:1}, "-=0.75", "grow_t")
          //.to(".blobs", 1.75, {width:'130%', paddingBottom:'130%'}, "grow_t-=0.75")
          //.to(".blobs", 0.5, {width:'125%', paddingBottom:'125%'})
          .to(".blobs", 1.75, {width:'130%', paddingBottom:'130%'}, "-=0.75")
          .to(".blobs", 0.5, {width:'125%', paddingBottom:'125%'})
          .to(".grow_text_01", 1, {opacity:1})
          .to(".grow_text_02", 1, {opacity:1}, "-=0.75")
          .to(".grow_text_03", 1, {opacity:1}, "-=0.75")
          .to(".grow_text_01", 0.25, {opacity:0}, "-=0")
          .to(".grow_text_02", 0.25, {opacity:0}, "-=0")
          .to(".grow_text_03", 0.25, {opacity:0}, "-=0")
          .to(".grow_text_01", 0, {display:'none'})
          .to(".grow_text_02", 0, {display:'none'})
          .to(".grow_text_03", 0, {display:'none'})
          .to(".grow_text", 0, {lineHeight:0})
          .to(".blob_bkg", 1, {width: '100%', height: '100%'}, "-=1")
          .to("#contact_form", 0, {display:'block'})
          .to("#contact_form", 0, {height:'auto'})
          .to(".blob_bkg", 1, {height: '220%', ease: Elastic.easeOut.config( 1, 0.5)}, "full_bkg")
          //.to(".blobs", 0.5, {height: '120%'})
          .to(".f1", 0.25, {opacity:1}, "full_bkg-=0")
          .to(".f2", 0.25, {opacity:1})
          .to(".f3", 0.25, {opacity:1})
          .to(".f4", 0.25, {opacity:1})
          .to(".f5", 0.25, {opacity:1})
          .to(".blob_01", 0.5, {top: '5%', left: '5%'}, "-=2.5")
          .to(".blob_02", 0.5, {top: '8%', left: '5%'}, "-=2")
          .to(".blob_03", 0.5, {top: '5%', left: '5%'}, "-=2")
          
          /*.to(".blob_01", 0, {display: 'none'})
          .to(".blob_02", 0, {display: 'none'})
          .to(".blob_03", 0, {display: 'none'})*/
      } else {
        tl.to(".mobile_blob_bkg", 1, {height:'200%', width:'200%'})
          .to(".grow_text_01", 1, {opacity:1})
          .to(".grow_text_02", 1, {opacity:1}, "-=0.75")
          .to(".grow_text_03", 1, {opacity:1}, "-=0.75")
          .to("#contact_form", 0.5, {opacity:1})
          .to(".f1", 0.25, {opacity:1})
          .to(".f2", 0.25, {opacity:1})
          .to(".f3", 0.25, {opacity:1})
          .to(".f4", 0.25, {opacity:1})
          .to(".f5", 0.25, {opacity:1})
      }
      
      return tl;
    }

    //section_01 Section_03 orange pills

    function pill_orange() {
      var tl = new gsap.timeline({repeat:-1});
  
      tl.to(".pill_o", 0, {opacity:1})
        //.to(".pill_o", 0.3, {left:'100%'}, "+=0.2")
        //.to(".pill_o", 0.3, {left:0})
      return tl;
    }

    //gsap.utils.toArray(".pill_o_wrap").forEach(elem => {
    //  let hover = gsap.to(".pill_o", {left: "70%", backgroundColor: "#F8A30E", duration: 0.5, paused: true, ease: Back.easeInOut.config(2)});
    //  elem.addEventListener("mouseenter", () => hover.play());
    //  elem.addEventListener("mouseleave", () => hover.reverse());
    //});

    let pill_o1 = document.querySelector(".hover_01"),
      hover_01 = gsap.to(".pill_o_01", {left: "70%", backgroundColor: "#F8A30E", duration: 0.5, paused: true, ease: Back.easeInOut.config(2)});
  
      pill_o1.addEventListener("mouseenter", () => hover_01.play());
      pill_o1.addEventListener("mouseleave", () => hover_01.reverse());
    
    let pill_o2 = document.querySelector(".hover_02"),
      hover_02 = gsap.to(".pill_o_02", {left: "70%", backgroundColor: "#F8A30E", duration: 0.5, paused: true, ease: Back.easeInOut.config(2)});
  
      pill_o2.addEventListener("mouseenter", () => hover_02.play());
      pill_o2.addEventListener("mouseleave", () => hover_02.reverse());

    //MASTER timeline
    var master = gsap.timeline();
    master.defaultEase = Power1.easeInOut;
    
    master.addLabel("start")
          .add(pill())
          .add(pill_texts())
          
          .add(grow_texts({
            scrollTrigger: {
              trigger: "#contact",
              pin: true,   // pin the trigger element while active
              start: "top top", // when the top of the trigger hits the top of the viewport
              end: "bottom", // end after scrolling 500px beyond the start
              scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
          }), "start")

          .add(pill_orange({
            scrollTrigger: {
              trigger: "#section_01",
              pin: true,
              start: "top top",
              end: "bottom",
              scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
              snap: {
                
                ease: "power1.inOut" 
              }
            }
          }));


  }, false);
  
});
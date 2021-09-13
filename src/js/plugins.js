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

AOS.init({
  startEvent: 'DOMContentLoaded',
  throttleDelay: 99
});

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger);
  
  // wait until external stylesheets, links, images, and other external assets are loaded in the window
  window.addEventListener("load", function(){

    function intro() {
      var tl = new gsap.timeline({onComplete:function(){tl.play("start")}});
  
      var rule = CSSRulePlugin.getRule(".pill::before"); //get the rule
      //gsap.to(rule, {duration: 3, cssRule: {color: "blue"}});
    
      tl.defaultEase = Power1.easeInOut;
      tl.delay(0)
        .to(rule, {duration: 0, cssRule: {opacity: 1}})
        .to(rule, {duration: 0.5, cssRule: {width: "120%"}})
        .add("start")
        //.to(".pill_text_01", 0, {top:'150%'})
        .to(".pill_text_01", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_01", 0.5, {top:'-150%'}, "+=1")
        .to(".pill_text_02", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_02", 0.5, {top:'-150%'}, "+=1")
        .to(".pill_text_03", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_03", 0.5, {top:'-150%'}, "+=1")
        .to(".pill_text_04", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_04", 0.5, {top:'-150%'}, "+=1")
        .to(".pill_text_05", 0.5, {top:'50%'}, "-=0.5")
        .to(".pill_text_05", 0.5, {top:'-150%'}, "+=1")
        .to(".pill_text_06", 0.5, {top:'50%'}, "-=0.5")
      
      return tl;
    }

    var master = gsap.timeline();
    master.add(intro())
          //.add(middle(), "+=2")     //with a gap of 2 seconds
          
    
    
  }, false);
  
});






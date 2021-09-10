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

window.addEventListener("load", function(){

  var tl = new gsap.timeline({onComplete:function(){tl.play("start")}});

  tl.defaultEase = Power1.easeInOut;
  tl.delay(0.5)
    .add("start")
    .to(".ptext_01", 0.5, {top:'50%'}, "-=0.5")
    .to(".ptext_01", 0.5, {top:'-150%'}, "+=1")
    .to(".ptext_02", 0.5, {top:'50%'}, "-=0.5")
    .to(".ptext_02", 0.5, {top:'-150%'}, "+=1")
    .to(".ptext_03", 0.5, {top:'50%'}, "-=0.5")
    .to(".ptext_03", 0.5, {top:'-150%'}, "+=1")
    .to(".ptext_04", 0.5, {top:'50%'}, "-=0.5")
    .to(".ptext_04", 0.5, {top:'-150%'}, "+=1")
    .to(".ptext_05", 0.5, {top:'50%'}, "-=0.5")
    .to(".ptext_05", 0.5, {top:'-150%'}, "+=1")
    .to(".ptext_06", 0.5, {top:'50%'}, "-=0.5")
    .to(".ptext_06", 0.5, {top:'-150%'}, "+=1")
  
 });



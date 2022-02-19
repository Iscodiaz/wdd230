// // Set up an intersection observer with some options
// var observer = new IntersectionObserver(lazyLoad, {

//     // where in relation to the edge of the viewport, we are observing
//     rootMargin: "100px",
  
//     // how much of the element needs to have intersected 
//     // in order to fire our loading function
//     threshold: 1.0
  
//   });


//   function lazyLoad(elements) {
//     elements.forEach(image => {
//       if (image.intersectionRatio > 0) {
  
//         // set the src attribute to trigger a load
//         image.src = image.dataset.src;
  
//         // stop observing this element. Our work here is done!
//         observer.unobserve(item.target);
//       };
//     });
//   };


  // Tell our observer to observe all img elements with a "lazy" class
// var lazyImages = document.querySelectorAll('img.lazy');
// lazyImages.forEach(img => {
//   observer.observe(img);
// });

// const image = document.querySelector('img');

// const options = { threshold: [.5]}

// function preloadImage(img) {
//     const source = img.getAttribute('data-src');

// }

// const io = new IntersectionObserver(
//     (entries, io) => {
//         entries.forEach(entry =>{ 
//             if(entry.isIntersecting){
//                 return;
//             } else{
//                 preloadImage(entry.target)
//                 io.unobserve(entry.target);
//             }
//             ;})
//     }, options);


// image.forEach(image => {
//     io.observe(image);
// });
// javafor lazyloading

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.gallery-img");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('gallery-img');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });
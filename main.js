var LittleViewer = function(element) {
    var element = document.getElementById(element);

    var options = {
        root: document.getElementsByTagName('body')[0],
        rootMargin: '0px',
        threshold: 0.5
      }

    var callback = function(entries, observer) { 
        entries.forEach(entry => {
          // Each entry describes an intersection change for one observed
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting
          //   entry.rootBounds
          //   entry.target
          //   entry.time
          console.log(options.root);
          console.log(entry);
          console.log(entry.rootBounds);
          console.log(entry.boundingClientRect);
        });
    };

    var observer = new IntersectionObserver(callback, options);

    var start = function() {
        console.log(element);
        observer.observe(element);
    }

    return { start: start };
}
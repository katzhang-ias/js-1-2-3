var LittleViewer = function(id) {
    var ad = document.getElementById(id);
    if (!ad) {
        console.log('there is no such #' + id);
    }

    function checkIsInView() {
        var rect = ad.getBoundingClientRect();
        var isInView = rect.top >= 0
        && rect.left >= 0
        && rect.bottom <= window.innerHeight
        && rect.right <= window.innerWidth;
        console.log('is in view? ', isInView);
    }
    return {
        start: function() {
            window.addEventListener('scroll', checkIsInView);
        }
    }
}

// function throttle(func, wait) {
//     var now;
//     var previous = Date.now();
//     return function() {
//         var args = arguments;
//         var context = this;
//         now = Date.now();
//         var shouldFire = previous - now >= wait;
//         if (shouldFire) {
//             func.apply(context, args);
//         }
//     }
// }
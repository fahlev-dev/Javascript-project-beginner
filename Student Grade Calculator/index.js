<<<<<<< HEAD
function throttle(fn, delay) {
    let lastTime = 0;
    return function(...args) {
        let now = Date.now();
        if (now-lastime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

function printMessage() {
    console.log("function executed at", new Date().toLocaleTimeString());
}

const throttledPrint = throttle(printMessage, 1000);

setInterval(throttledPrint, 200);

=======
function throttle(fn, delay) {
    let lastTime = 0;
    return function(...args) {
        let now = Date.now();
        if (now-lastime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

function printMessage() {
    console.log("function executed at", new Date().toLocaleTimeString());
}

const throttledPrint = throttle(printMessage, 1000);

setInterval(throttledPrint, 200);

>>>>>>> 43cb3da (komit baru)

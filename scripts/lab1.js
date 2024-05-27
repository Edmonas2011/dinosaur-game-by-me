// setInterval 
function sayHi() {
    console.log('Hi Armen, Ani, Hayk');
}

// setInterval(sayHi, 1000);

// ==========================================================
// clear interval
let i = 0;

let interval = setInterval(function() {
    if (i === 100) {
        clearInterval(interval);
    }

    console.log(i++);
}, 10);
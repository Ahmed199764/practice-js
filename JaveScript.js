var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

let age = prompt('How old are you?', 22);

alert(`You are ${age} years old!`); // You are 22 years old!
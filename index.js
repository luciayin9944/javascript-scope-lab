// Write your solution in this file!

// Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function: addBurger
function addBurger() {
    // function-scoped variable
  const newBurger = 'Flatburger'; 
  burgers.push(newBurger);
}

// Always-true conditional block
if (true) {
    // block-scoped variable
  const anotherNewBurger = 'Maple Bacon Burger'; 
  burgers.push(anotherNewBurger);
}

// Function: changeFeaturedDrink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

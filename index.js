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



// my original code

// const burgers = ["Hamburger", "Cheeseburger"];
// const featuredDrink = "Strawberry Milkshake"; // 用 let 而不是 const

// function addBurger() {
//     const newBurger = "Flatburger";
//     burgers.push(newBurger);

//     if (order === "othernewBurger") {
//         const othernewBurger = "Maple Bacon Burger";
//         burgers.push(othernewBurger);
//     };
// }

// function changeFeaturedDrink() {
//     featuredDrink = "The JavaShake";
// };
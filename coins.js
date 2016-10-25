// Instructions

// Write a program that will convert a dollar amount to the number of 
// coins that make up the amount. Use the common American coins of quarters, 
// dimes, nickels, and pennies.


/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

var quarters = 25
var dimes = 10
var nickels = 5
var pennies = 1


function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = Math.floor(input / 0.25);
  input -= (coinPurse.quarter * 0.25);
  coinPurse.dimes = Math.floor(input / .10);
  input -= (coinPurse.dimes * 10);
  coinPurse.nickels = Math.floor(input / .05);
  input -= (coinPurse.nickels * .05);
  coinPurse.pennies = Math.floor(input / .01);
  input -= (coinPurse.pennies * .01);

  return coinPurse;
}

var coins = coinCounter(5)
console.log();
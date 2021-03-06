// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except 
// numbers with a 5 in it. The start and the end number are both inclusive!
function dontGiveMeFive(start, end){
  var result = [];
  for (var i = start; i <= end; i++) {
    if (!i.toString().includes('5')) result.push(i);
  }
  return result.length;
};

// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
  return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2) + 1);
};

// Find the next perfect square
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if (Math.sqrt(sq) % 1 = 0){
    var sqRoot = Math.sqrt(sq) + 1;
    return Math.pow(sqRoot,2)
  }
  else {
    return -1;
  }
};

// Best practice solution
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
};


// Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
  return "(" + numbers.slice(0,3).join("") + ") " + numbers.slice(3,6).join("") + "-" + numbers.slice(6,10).join("");
}
// refactored
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

// Test Code
Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
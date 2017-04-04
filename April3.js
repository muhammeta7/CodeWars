// Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is 
// '(' if that character appears only once in the original string, or ')' if that character appears more than 
// once in the original string. Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(word){
  word = word.toLowerCase();
  var result="";
  for (var i in word){
    var matchesCount = word.split(word[i]).length - 1;
    result+=(matchesCount ==1)? "(" : ")";
    }
  return result;
}

// Testing
Test.assertEquals(duplicateEncode("din"),"(((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");
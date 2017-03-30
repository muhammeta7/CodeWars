// Disemvowel
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Testing code
Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")
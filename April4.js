//  Good vs Evil
function goodVsEvil(good, evil){
    var goodArr = good.split(' '),
    evilArr = evil.split(' '),
    goodPoints = goodArr[0]*1 + goodArr[1]*2 + goodArr[2]*3 + goodArr[3]*3 + goodArr[4]*4 + goodArr[5]*10,
    evilPoints = evilArr[0]*1 + evilArr[1]*2 + evilArr[2]*2 + evilArr[3]*2 + evilArr[4]*3 + evilArr[5]*5 + evilArr[6]*10;
   if (goodPoints === evilPoints) return 'Battle Result: No victor on this battle field';
    return goodPoints < evilPoints ?  "Battle Result: Evil eradicates all trace of Good" :"Battle Result: Good triumphs over Evil";
}

// Testing Code
Test.expect( goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') === 'Battle Result: Evil eradicates all trace of Good', 'Evil should win' );
Test.expect( goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') === 'Battle Result: Good triumphs over Evil', 'Good should win' );
Test.expect( goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') === 'Battle Result: No victor on this battle field', 'Should be a tie' );

// -------------------------------------------------------------------------------------------------------------------------------------
// The SuperMarket Que
function queueTime(customers, n) {
  var ticks = 0;
  while(customers.length) {
    ticks++;
  
    for(var i = Math.min(customers.length, n) - 1; i >= 0; i--) {
      customers[i]--;
      if(!customers[i]) {
        customers.splice(i, 1)
      }
    }
  } 
  return ticks;
}

// Testing Code
Test.describe("example tests", function() {
Test.assertEquals(queueTime([], 1), 0);
Test.assertEquals(queueTime([1,2,3,4], 1), 10);
Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);
/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let score = 0
  aceFound = false

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      hand[i] = 10
    } else if (hand[i] === "A") {
      if (score < 11) {
        hand[i] = 11
        aceFound = true
      } else {
        hand[i] = 1
      }
    } else {
      hand[i] = parseInt(hand[i])
    }
    score += hand[i]
  }
  if (aceFound = true && score > 21) {
    score = score - 10

  }


  return score
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

let i = 3;

while (i) {
  alert( i-- );
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

 
// For each i in the interval {
//   check if i has a divisor from 1..i
//   if yes => the value is not a prime
//   if no => the value is a prime, show it
// }



let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}


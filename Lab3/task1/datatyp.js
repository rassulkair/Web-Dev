let str = "Hello";

str.test = 5; // (*)

alert(str.test);



let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );



alert( 6.35.toFixed(20) ); // 6.34999999999999964473


alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000




function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);



  function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );
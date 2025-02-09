let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}


let b = +prompt('a?', '');

if (b == 0) {
  alert( 0 );
}
if (b == 1) {
  alert( 1 );
}

if (b == 2 || b == 3) {
  alert( '2,3' );
}
import $ from 'jquery';
import 'bootstrap';

console.log ('Hello!');


$(document).ready(() => {
  for (let j=0; j<=4; j++) {
    let max = $('.score').eq(j).text();
    console.log ("MAX = " + max);

    for (let i=1; i<=max; i++) {
      setTimeout(() => {
        $('.score').eq(j).text(i);
      }, i*10 );
    };
  };
});


const targetURLs = [
  'https://screenplay.thinkific.com/enroll/219920',
  'https://screenplay.thinkific.com/cart/add_product/219920?price_id=225328'
]

const inboundURL = window.location.href;
// const $mkButtons = document.querySelectorAll(".mk-button");

// console.log('first mk: ' + $mkButtons[0]);
// console.log('mkButton count: ' + $mkButtons.length);

// const $as = $mkButtons.getElementsByTagName("a");
const $as = document.getElementsByTagName('a');

console.log('inbound URL: ' + inboundURL);
console.log('eleventh a element: ' + $as[10]);
console.log('a element count: ', $as.length);
// $as.forEach(function(a) {
//   console.log(a);
// });

Object.keys($as).forEach(function (key){
  console.log($as[key]);
});
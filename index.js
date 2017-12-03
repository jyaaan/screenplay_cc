const targetURLs = [
  'https://screenplay.thinkific.com/enroll/219920',
  'https://screenplay.thinkific.com/cart/add_product/219920?price_id=225328'
]

const inboundURL = window.location.href;
const $as = document.querySelectorAll("a[href]");

console.log('inbound URL: ' + inboundURL);
console.log('first a element: ' + $as[0]);
console.log('a element count: ', $as.length);
$as.forEach(function(a) {
  console.log('eggs');
});
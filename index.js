const targetURLs = [
  'https://screenplay.thinkific.com/enroll/219920',
  'https://screenplay.thinkific.com/cart/add_product/219920?price_id=225328'
]

const inboundURL = window.location.href;
const $as = document.querySelectorAll('a');

console.log('inbound URL: ' + inboundURL);
console.log('a elements: ' + $as);
$as.forEach(function(a) {
  console.log(a);
});
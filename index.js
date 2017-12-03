const targetURLs = [
  'https://screenplay.thinkific.com/enroll/219920',
  'https://screenplay.thinkific.com/cart/add_product/219920?price_id=225328'
]

const inboundURL = window.location.href;
const $a = document.querySelectorAll('a');

$a.map(a => {
  console.log(a.href);
  console.log('inbound URL: ' + inboundURL);
});
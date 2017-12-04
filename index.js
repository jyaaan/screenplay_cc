const targetURLs = [
  'https://screenplay.thinkific.com/enroll/219920',
  'https://screenplay.thinkific.com/cart/add_product/219920?price_id=225328'
]

const inboundURL = window.location.href;
const referencePos = inboundURL.indexOf('ref=') + 4;
const referenceEnd = inboundURL.indexOf('&', referencePos) > 0 ? inboundURL.indexOf('&', referencePos) : inboundURL.length;
var referenceID = referencePos > 4 ? inboundURL.substring(referencePos, referenceEnd) : false;

const $as = document.getElementsByTagName('a');

const verifyURL = (link, validURLs) => {
  var verified = false;
  validURLs.forEach(url => {
    if (link == url) {
      verified = true;
    }
  });
  return verified;
}

if (referenceID) {
  referenceID.replace('/', '');
  Object.keys($as).map(key => {
    const current = $as[key].href;
    if (verifyURL(current, targetURLs)) {
      $as[key].href = current + (current.indexOf('?') > 0 ? '&' : '?') + 'ref=' + referenceID;
    }
  });
}

import cipher from './cipher.js';

function click(event, callback) {
  event.preventDefault();
  const message = document.getElementById('message').value;
  const offset = Number(document.getElementById('key').value);
  document.getElementById('finalMessage').innerHTML = callback(offset, message);
}

function clickencode() {
  click(event, cipher.encode);
}

function clickdecode() {
  click(event, cipher.decode);
}

document.getElementById('encodeButton').addEventListener('click', clickencode);
document.getElementById('decodeButton').addEventListener('click', clickdecode);

import cipher from './cipher.js';

const encode = document.getElementById("encodeButton").addEventListener("click", clickencode);
const decode = document.getElementById("decodeButton").addEventListener("click", clickdecode);

function click(event, callback) {
    event.preventDefault();
    let message = document.getElementById("message").value;
    let offset = Number(document.getElementById("key").value);
    document.getElementById("finalMessage").innerHTML = callback(offset, message);
}
function clickencode() {
    click(event, cipher.encode);
} 
function clickdecode() {
    click(event, cipher.decode);
}
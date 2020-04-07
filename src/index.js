import cipher from './cipher.js';

const encode = document.getElementById("encodeButton");
const decode = document.getElementById("decodeButton");

encode.addEventListener("click", clickencode);
decode.addEventListener("click", clickdecode);

function clickencode() {
    event.preventDefault();
    let message = document.getElementById("message").value;
    let offset = Number(document.getElementById("key").value);
    document.getElementById("finalMessage").innerHTML = cipher.encode(offset, message);
} 

function clickdecode() {
    event.preventDefault();
    let message = document.getElementById("message").value;
    let offset = Number(document.getElementById("key").value);
    document.getElementById("finalMessage").innerHTML = cipher.decode(offset, message);
}

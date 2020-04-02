const cipher = {
  encode,
  decode
};

export default cipher;

function encode (offset, string) {
  let z = "";
  for (let i = 0; i < string.length; i++) {
    let x = string.charCodeAt([i]);
    let y = (((x - 65 + offset) % 26)+ 65);
    z += (String.fromCharCode(y));
  }
  return z;
}

function decode (offset, string) {
  let z = "";
  for (let i = 0; i < string.length; i++) {
    let x = string.charCodeAt([i]);
    let y = (((x + 65 - offset) % 26)+ 65);
    z += (String.fromCharCode(y));
  }
  return z;
}
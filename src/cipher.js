const cipher = {
  encode,
  decode,
};

//Função de cifragem
function encode (offset, message) {
  if (typeof mensagem !== "string") {
    throw new TypeError();
  }

  let messageEncode = "";

  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
      let upperCaseEncode = ((message.charCodeAt(i) - 65 + offset) % 26)+ 65;
      messageEncode += String.fromCharCode(upperCaseEncode);
    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let lowerCaseEncode = ((message.charCodeAt(i) - 97 + offset) % 26)+ 97;
      messageEncode += String.fromCharCode(lowerCaseEncode);
    } else { 
      messageEncode += String.fromCharCode(message.charCodeAt(i));
    }
  }
  return messageEncode;
}

//Função de decifragem
function decode (offset, message) {
  if (typeof mensagem !== "string"){
    throw new TypeError();
  }

  let messageDecode = "";

  for (let i = 0; i < string.length; i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) //parei aqui
    let x = string.charCodeAt([i]);
    let y = (((x + 65 - offset) % 26)+ 65);
    z += (String.fromCharCode(y));
  }
  return z;
}

export default cipher;
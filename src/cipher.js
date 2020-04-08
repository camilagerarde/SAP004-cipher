const cipher = {
  encode: encode,
  decode: decode
};

//Função de cifragem
function encode (offset, message) {
  if (typeof message !== "string") {
    throw new TypeError();
  }

  let messageEncode = "";

  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){
      let upperCase = ((message.charCodeAt(i) - 65 + offset) % 26)+ 65;
      messageEncode += String.fromCharCode(upperCase);
    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let lowerCase = ((message.charCodeAt(i) - 97 + offset) % 26)+ 97;
      messageEncode += String.fromCharCode(lowerCase);
    } else { 
      messageEncode += String.fromCharCode(message.charCodeAt(i));
    }
  }
  return messageEncode;
}

//Função de decifragem
function decode (offset, message) {
  
  let messageDecode = "";

  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      let upperCase = ((message.charCodeAt(i) - 90 - offset) % 26)+ 90;
      messageDecode += String.fromCharCode(upperCase);
    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let lowerCase = ((message.charCodeAt(i) - 122 - offset) %26)+ 122;
      messageDecode += String.fromCharCode(lowerCase);
    } else {
      messageDecode += String.fromCharCode(message.charCodeAt(i));
    }
  }
  return messageDecode;
}

export default cipher;
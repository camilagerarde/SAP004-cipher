const cipher = {
  encode,
  decode
};

function encode(offset, message) {
  if (typeof message !== "string") {
    throw new TypeError("message undefined");
  }

  let messageEncode = "";

  for (let i in message) {
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

function decode(offset, message) {
  if (typeof message !== "string") {
    throw new TypeError("message undefined");
  }
  
  let messageDecode = "";

  for (let i in message) {
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
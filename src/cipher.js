const cipher = {
  encodeOrDecode,
  encode,
  decode
};

function encodeOrDecode(offset, message, num) {
  if (typeof message !== "string") {
    throw new TypeError("message undefined");
  }

  let finalMessage = "";

  for (let i in message) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      let upperCase = ((message.charCodeAt(i) - (65 + num) + offset) % 26) + 65 + num;
      finalMessage += String.fromCharCode(upperCase);
    } else if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let lowerCase = ((message.charCodeAt(i) - (97 + num) + offset) % 26) + 97 + num;
      finalMessage += String.fromCharCode(lowerCase);
    } else {
      finalMessage += String.fromCharCode(message.charCodeAt(i));
    }
  }
  return finalMessage;
}

function encode(offset, message) {
  return encodeOrDecode(offset, message, 0)
}

function decode(offset, message) {
  return encodeOrDecode(-offset, message, 25)
}

export default cipher;
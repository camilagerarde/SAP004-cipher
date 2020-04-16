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

  for (let letter of message) {
    const letterCode = letter.charCodeAt()
    if (letterCode >= 65 && letterCode <= 90) {
      let upperCase = ((letterCode - (65 + num) + offset) % 26) + 65 + num;
      finalMessage += String.fromCharCode(upperCase);
    } else if (letterCode >= 97 && letterCode <= 122) {
      let lowerCase = ((letterCode - (97 + num) + offset) % 26) + 97 + num;
      finalMessage += String.fromCharCode(lowerCase);
    } else {
      finalMessage += String.fromCharCode(letterCode);
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
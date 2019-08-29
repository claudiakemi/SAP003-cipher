//funções de codificar e decodificar
window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, inputEncode) {
  let criptoPassword ="";
  for (let i = 0; i < inputEncode.length; i++) {
    if (inputEncode.charCodeAt(i) >= 65 && inputEncode.charCodeAt(i) <= 90) {
      criptoPassword+= String.fromCharCode(((inputEncode.charCodeAt(i)-65+offset)%26)+65);
    }
    if (inputEncode.charCodeAt(i) >= 97 && inputEncode.charCodeAt(i) <= 122) {
      criptoPassword+= String.fromCharCode(((inputEncode.charCodeAt(i)-97+offset)%26)+97);
    }
    if (inputEncode.charCodeAt(i) >= 32 && inputEncode.charCodeAt(i) <= 47) {
      criptoPassword+=String.fromCharCode(((inputEncode.charCodeAt(i)-32+offset)%26)+32);
    }
    if (inputEncode.charCodeAt(i) >= 48 && inputEncode.charCodeAt(i) <= 57) {
      criptoPassword+=String.fromCharCode(((inputEncode.charCodeAt(i)-48+offset)%26)+48);
    }
    if (inputEncode.charCodeAt(i) >= 58 && inputEncode.charCodeAt(i) <= 64) {
      criptoPassword+=String.fromCharCode(((inputEncode.charCodeAt(i)-58-offset)%26)+58);
    }
    if (inputEncode.charCodeAt(i) >= 91 && inputEncode.charCodeAt(i) <= 96) {
      criptoPassword+=String.fromCharCode(((inputEncode.charCodeAt(i)-91+offset)%26)+91);
    }
    if (inputEncode.charCodeAt(i) >= 123 && inputEncode.charCodeAt(i) <= 255) {
      criptoPassword+=String.fromCharCode(((inputEncode.charCodeAt(i)-123+offset)%26)+123);
    }
  }
  return criptoPassword;
}

function decode(offset, inputDecode) {
  let passwordRevealed="";
  for (let i = 0; i < inputDecode.length; i++) {
    if (inputDecode.charCodeAt(i) >= 65 && inputDecode.charCodeAt(i) <= 90) {
      passwordRevealed+= String.fromCharCode(((inputDecode.charCodeAt(i)-90-offset)%26)+90);
    }
    if (inputDecode.charCodeAt(i) >= 97 && inputDecode.charCodeAt(i) <= 122) {
      passwordRevealed+=String.fromCharCode(((inputDecode.charCodeAt(i)-122-offset)%26)+122);
    }
    if (inputDecode.charCodeAt(i) >= 32 && inputDecode.charCodeAt(i) <= 47) {
      passwordRevealed+=String.fromCharCode(((inputDecode.charCodeAt(i)-47-offset)%26)+47);
    }
    if (inputDecode.charCodeAt(i) >= 48 && inputDecode.charCodeAt(i) <= 57) {
      passwordRevealed+=String.fromCharCode(((inputDecode.charCodeAt(i)-57-offset)%26)+57);
    }
    if (inputDecode.charCodeAt(i) >= 58 && inputDecode.charCodeAt(i) <= 64) {
      passwordRevealed+=String.fromCharCode(((inputDecode.charCodeAt(i)-64-offset)%26)+64);
    }
    if (inputDecode.charCodeAt(i) >= 91 && inputDecode.charCodeAt(i) <= 96) {
      passwordRevealed+=String.fromCharCode(((inputDecode.charCodeAt(i)-96-offset)%26)+96);
    }
    if (inputDecode.charCodeAt(i) >= 123 && inputDecode.charCodeAt(i) <= 255) {
      passwordRevealed+=String.fromCharCode(((inputDecode.charCodeAt(i)-255-offset)%26)+255);
    }
  }
  return passwordRevealed;
}

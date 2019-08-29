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
    if (inputEncode.charCodeAt(i) >= 32 && inputEncode.charCodeAt(i) <= 64) {
      criptoPassword+=String.fromCharCode(((inputEncode.charCodeAt(i)-32+offset)%33)+32);
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
    if (inputDecode.charCodeAt(i) >= 32 && inputDecode.charCodeAt(i) <= 64) {
      passwordRevealed+=String.fromCharCode(((inputDecode.charCodeAt(i)-64-offset)%33)+64);
    }
  }
  return passwordRevealed;
}

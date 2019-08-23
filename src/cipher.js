//funções de codificar e decodificar
window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, inputEncode) {
  let calculusResult=[];
  for (let i = 0; i < inputEncode.length; i++) {
    calculusResult.push(((inputEncode.charCodeAt(i)-65+offset)%26)+65);
  }

  let password=[];
  for (let i = 0; i < calculusResult.length; i++) {
    password.push(String.fromCharCode(calculusResult[i]));
  }

  let criptoPassword = "";
  for (let i = 0; i < password.length; i++) {
    criptoPassword=criptoPassword+password[i];
  }

  return criptoPassword;

}

function decode(offset, inputDecode) {
  let calculusResult=[];
  for (let i = 0; i < inputDecode.length; i++) {
    calculusResult.push(((inputDecode.charCodeAt(i)-90-offset)%26)+90);
  }

  let password=[];
  for (let i = 0; i < calculusResult.length; i++) {
    password.push(String.fromCharCode(calculusResult[i]));
  }

  let passwordRevealed = "";
  for (let i = 0; i < password.length; i++) {
    passwordRevealed=passwordRevealed+password[i];
  }

  return passwordRevealed;

}

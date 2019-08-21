//funções de codificar e decodificar
window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, inputEncode){
  let calculusResult=[];
  for (let i = 0; i < inputEncode.length; i++) {
    calculusResult.push(((inputEncode.charCodeAt(i)-97+offset)%26)+97);
  }

  let password=[];
  for (let i = 0; i < calculusResult.length; i++) {
    password.push(String.fromCharCode(calculusResult[i]));
  }

  let criptoPassword = ""
  for (let i = 0; i < password.length; i++) {
    criptoPassword=criptoPassword+password[i];
  }

  return criptoPassword;
  //console.log(calculusResult);
  /*let password=String.fromCharCode(calculusResult); //não recebe array
  return password;*/

}


function decode(offset, inputDecode){
  //fórmula
  alert (offset + inputDecode);

}

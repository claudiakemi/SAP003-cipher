//funcionalidade dos botões
document.getElementById("clickCipher").addEventListener("click", onclickCipher);
document.getElementById("clickDecipher").addEventListener("click", onclickDecipher);

function onclickCipher() {
//offset: número de casas que vai andar
//inputEncode é uma string
  let inputEncode = document.getElementById("inputEncode").value;
  let offset = Number(document.getElementById("offset").value);
  let resultEncode = cipher.encode(offset, inputEncode);
  document.getElementById("resultEncode").innerHTML= `<p>Sua senha ocultada é: <strong>${resultEncode}</strong></p>`;
}

function onclickDecipher() {
//inputDecode é uma string
  let offset = Number(document.getElementById("offset").value);
  let inputDecode = document.getElementById("inputDecode").value;
  let resultDecode = cipher.decode(offset, inputDecode);
  document.getElementById("resultDecode").innerHTML= `<p>Sua senha desvendada é: <strong>${resultDecode}</strong></p>`;
}

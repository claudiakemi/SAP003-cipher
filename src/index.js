//funcionalidade dos botões
document.getElementById("clickCipher").addEventListener("click", onclickCipher);
document.getElementById("clickDecipher").addEventListener("click", onclickDecipher);

function onclickCipher() {
  //offset: número de casas que vai andar
  //inputEncode é uma string
  const inputEncode = document.getElementById("inputEncode").value;
  const offset = Number(document.getElementById("offset").value);
  const resultEncode = cipher.encode(offset, inputEncode);
  document.getElementById("resultEncode").innerHTML= `<p>Sua senha ocultada é: <strong>${resultEncode}</strong></p>`;
}

function onclickDecipher() {
  //inputDecode é uma string
  const offset = Number(document.getElementById("offset").value);
  const inputDecode = document.getElementById("inputDecode").value;
  const resultDecode = cipher.decode(offset, inputDecode);
  document.getElementById("resultDecode").innerHTML= `<p>Sua senha desvendada é: <strong>${resultDecode}</strong></p>`;
}

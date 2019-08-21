//funcionalidade dos botões

function onclickC1(){
//offset: número de casas que vai andar
//inputEncode é uma string
let offset = Number(document.getElementById('offset').value);
let inputEncode = document.getElementById('inputEncode').value;
let resultEncode = cipher.encode(offset, inputEncode);
document.getElementById("resultEncode").innerHTML= `<p>Sua senha ocultada é ${resultEncode}.</p>`;
}

function onclick2(){
//inputDecode é uma string
let offset = Number(document.getElementById('offset').value);
let inputDecode = document.getElementById('inputDecode').value;
let resultDecode = cipher.decode(offset, inputDecode);
document.getElementById("resultDecode").innerHTML= `<p>Sua senha desvendada é ${resultDecode}.</p>`;
}

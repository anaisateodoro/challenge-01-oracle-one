function criptografar(){
    let mensagemVazia = document.getElementById("mensagemVazia");
    let copiarBotao = document.getElementById("copiarBotao");
    mensagemVazia.classList.remove("mostrarMensagemVazia");
    mensagemVazia.classList.add("esconderMensagemVazia");
    copiarBotao.classList.remove("esconderCopiarBotao");
      
    let entradaUsuario = document.getElementById("entradaUsuario").value;
    let criptografado = entradaUsuario.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat').replace(/a/g, 'ai');
    document.getElementById("mostrarMessagem").innerHTML = criptografado;
  
  }
  
  function descriptografar(){
      let mensagemVazia = document.getElementById("mensagemVazia");
      let copiarBotao = document.getElementById("copiarBotao");
     
      mensagemVazia.classList.remove("mostrarMensagemVazia");
      mensagemVazia.classList.add("esconderMensagemVazia");
      copiarBotao.classList.remove("esconderCopiarBotao");
  
      let entradaUsuario = document.getElementById("entradaUsuario").value;
      let descriptografado = entradaUsuario.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ai/g, 'a').replace(/ufat/g, 'u');
      document.getElementById("mostrarMessagem").innerHTML = descriptografado;
  }
  

  function modoCopiar() {
    let copiarTexto = document.getElementById("mostrarMessagem");
    let textoTemporario = document.createElement("textarea");
    textoTemporario.value = copiarTexto.textContent;
    document.body.appendChild(textoTemporario);
    textoTemporario.select();
    textoTemporario.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoTemporario.value);
    document.body.removeChild(textoTemporario);
  }
  

  function limparTextarea() {
  let textarea = document.getElementById("entradaUsuario");
  textarea.value = '';
}

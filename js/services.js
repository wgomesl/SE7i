function mostrarConteudo(tipo) {
    // Oculta todos os conteúdos
    var conteudos = document.getElementsByClassName("conteudo");
    for (var i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = "none";
    }

    // Exibe o conteúdo selecionado
    var conteudo = document.getElementById("conteudo-" + tipo);
    conteudo.style.display = "block";
  }
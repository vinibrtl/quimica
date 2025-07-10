    function mostrarTudo() {
        let tudo = document.getElementById('tudo');
        let sair = document.getElementById('principal');
        let sumirHr = document.getElementById('sumirHr')

        if (tudo.style.display === "block"){
            tudo.style.display = "none";
            sair.style.display = "none";
            sumirHr.style.display = "none";
        } else {
            tudo.style.display = "block";
            sair.style.display = "none";
            sumirHr.style.display = "none";
        }
    }

    function tocar() {
        teste = document.getElementById("extra");

        if (teste.style.display === "block") {
        document.getElementById("musica").play();}
        else {document.getElementById("musica").pause();}
      }

      function tocar2() {
        document.getElementById("brainrot").play();
      }

    function mostrarBotao(id) {
        let mostrar = document.getElementById(id);

        let estavaVisivel = mostrar.style.display === "block";
        
        const ver = document.querySelectorAll(".divisoria");
        ver.forEach(v => v.style.display = "none");

        if(estavaVisivel){
            mostrar.style.display = "none";
        } else {
            mostrar.style.display = "block";
        }
    }

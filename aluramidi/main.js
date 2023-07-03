function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor Inválido');
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

//mode feito em wile
//let contador = 0;
/*
while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //abaixo template string
    const idAudio = `#som_${instrumento}`;//template string
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador++;    
    
}
*/
//modelo feio em for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

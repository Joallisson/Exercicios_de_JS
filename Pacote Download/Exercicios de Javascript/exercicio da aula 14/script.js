function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerText = `Agora são ${hora} horas`;

    //condição para aparecer fotos de manhã, de tarde e de noite
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manha.png';
        document.body.style.backgroundColor = '#0079d0';
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png';
        document.body.style.backgroundColor = '#60555f';
    } else {
        //Boa noite
        img.src = 'imagens/noite.png';
        document.body.style.backgroundColor = '#111e35';
    }
}
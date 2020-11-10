function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var nas = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (nas.value.length == 0 || Number(nas.value) > anoAtual) {
        alert("Error! Dados incorretos");
    } else {
        var resSex = document.getElementsByName('radsex');
        var idade = anoAtual - Number(nas.value);
        var genero = "";
        if (resSex[0].checked) {
            genero = "Homem";
            if (idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/homem_bebe.png');
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/homem_jovem.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem_adulto.png');
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem_idoso.png');
            }
        } else {
            genero = "Mulher";
            if (idade <= 10) {
                //criança
                img.setAttribute('src', 'imagens/mulher_bebe.png');
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens/mulher_jovem.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher_adulta.png');
            } else {
                //idoso 
                img.setAttribute('src', 'imagens/mulher_idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);

    }


}
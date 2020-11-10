function clicar() {
    let inicioStr = document.getElementById('inicio')
    let fimStr = document.getElementById('fim')
    let passoStr = document.getElementById('passo')
    let cont = document.getElementById('res')

    if (inicioStr.value.length == 0 || fimStr.value.length == 0 || passoStr.value.length == 0) {
        alert("Campo(s) em branco")
        cont.innerHTML = `Impossível Contar...`
    } else {
        let inicio = Number(inicioStr.value)
        let fim = Number(fimStr.value)
        let passo = Number(passoStr.value)
        cont.innerHTML = `Contando: `

        if (inicio < fim) {
            for (let i = inicio; i <= fim; i += passo) {
                cont.innerHTML += `${i} \u{1F449}`
            }

        } else if (fim < inicio) {
            for (let i = inicio; i >= fim; i -= passo) {
                cont.innerHTML += `${i} \u{1F449}`
            }
        }
        cont.innerHTML += `\u{1F3C1}`

    }
}
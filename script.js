altura = 0
largura = 0
vidas = 1
tempo = 35

criarMosquitoTempo = 1500

nivel = window.location.search
nivel = nivel.replace("?", "")

if (nivel === "facil") {
    criarMosquitoTempo = 3000
    tempo = 20
} else if (nivel === "normal") {
    criarMosquitoTempo = 1500
    tempo = 30
} else if (nivel === "dificil") {
    criarMosquitoTempo = 950
    tempo = 40
} else if (nivel === "impossivel") {
    criarMosquitoTempo = 500
    tempo = 50
}

function ajustaTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanho()
document.getElementById("cronometro").innerHTML = tempo
cronometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById("cronometro").innerHTML = tempo
    }
}, 1000)

function posicaoMosquito() {
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()
        if (vidas > 3) {
            window.location.href = ("fim_de_jogo.html")
        } else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }
    posicaox = Math.floor(Math.random() * largura) - 50 
    posicaoy = Math.floor(Math.random() * altura) - 50

    posicaox < 0 ? 0 : posicaox
    posicaoy < 0 ? 0 : posicaoy

    console.log(posicaox, posicaoy)

    mosquito = document.createElement("img")

    document.body.appendChild(mosquito)

    mosquito.src = "imagens/mosca.png"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
    mosquito.style.left = posicaox + "px"
    mosquito.style.top = posicaoy + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function() {
        this.remove()
    }
}

criaMosca = setInterval(function() {
    posicaoMosquito()
}, criarMosquitoTempo)


function tamanhoAleatorio() {
    classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0: 
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }
}

function ladoAleatorio() {
    classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0: 
            return "ladoA"
        case 1:
            return "ladoB"
    }
}
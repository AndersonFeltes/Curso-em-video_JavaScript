let num = document.querySelector("#num")
let lista = document.querySelector("#flista")
let resultado = document.querySelector("#resultado")
let valores = []

function isNumero(numero){
    if(Number(numero) >=1 && Number(numero) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(numero, lista){
    if(lista.indexOf(Number(numero)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ""
    }
    else{
        alert("Valor invalido ou ja existente na lista!")
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert("Adicione um número antes de finalizar!!")
    }
    else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total

        resultado.innerHTML = ""
        resultado.innerHTML += `<p> Ao todo temos ${total} elementos. </p>`
        resultado.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p> O menor valor informado foi o ${menor}.</p>`
        resultado.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p> A média dos números é ${media}</p>`
    }
}
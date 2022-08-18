const numeros = []

function enviar(){
   let num = window.document.querySelector("#num").value
   for(let i=0; i<numeros.length; i++){
       if(num == numeros[i]){
         alert("Numero ja inserido")
         num = 0
        } 
    }
    if(num == 0 || num<1 || num>100){
        alert("Numero invalido")
    }
    if(num>=1 && num<=100 || num<=100 && num!=0){
        let resultado = window.document.querySelector("#resultado")
        resultado.innerHTML += `<p>Inserido o número ${num} </p>`
        numeros.push(num)
    }
}

function finalizar(){
    if(numeros[0] > 0){
        let divFinalizar = window.document.querySelector("#finalizar")
        divFinalizar.innerHTML =`<p>Números inseridos ${numeros}</p>`
        divFinalizar.innerHTML += `<p>Foram inseridos ${numeros.length} números</p>`
        const numInt = []
        for(let i=0; i<numeros.length; i++){
            numInt[i] = parseInt(numeros[i])
        }
        
        let soma = 0
        let menorNum = 200
        let maiorNum = 0
        for(let i=0; i<numInt.length; i++){
            if(numInt[i]>maiorNum){
                maiorNum = numInt[i]
            }
            if(numInt[i]<menorNum){
                menorNum = numInt[i]
            }
            soma += numInt[i]
        }
    
        divFinalizar.innerHTML += `<p>O maior número inserido é o ${maiorNum} </p>`
        divFinalizar.innerHTML += `<p>O menor número inserido é o ${menorNum}</p>`
        divFinalizar.innerHTML += `<p>A soma dos numeros inseridos é ${soma}</p>`
        window.document.querySelector("#btn-enviar").disabled = true
        window.document.querySelector("#btn-finalizar").disabled = true
    }
    else{
        alert("Você ainda nao inseriu nenhum número!!")
    }
    
}

function limpar(){
    let input = window.document.querySelector("#num")
    input.value = ""
    input.focus()
    let resultado = window.document.querySelector("#resultado")
    resultado.innerHTML = ""
    let divFinalizar = window.document.querySelector("#finalizar")
    divFinalizar.innerHTML = ""
    window.document.querySelector("#btn-enviar").disabled = false
    window.document.querySelector("#btn-finalizar").disabled = false
    numeros.splice(0, numeros.length)// metodo splice limpa um array
}
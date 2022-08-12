
function contar(){
    let inicio = window.document.querySelector("#txti")
    let fim = window.document.querySelector("#txtf")
    let passo = window.document.querySelector("#txtp")
    let resultado = window.document.querySelector("#resultado")
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = "Impossível contar!!!"
        //alert("Faltam dados no formulário!!!") 
    }
    else{
        resultado.innerHTML = "Contando... </br>"
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let pas = Number(passo.value)

        if(pas<=0){
            alert("Passo invalido. Considerando passso 1!")
            pas = 1
        }

        if(ini < f){
            //contagem crescente
            for(let cont = ini; cont<=f; cont+=pas){
                resultado.innerHTML += ` ${cont} \u{1F449} `
            }
        }
        else if(ini > f){
            //contagem regressiva
            for(let cont = ini; cont>=f; cont-=pas){
                resultado.innerHTML += `${cont} \u{1f449}`
            }
        }
        resultado.innerHTML += ` \u{1f3c1}`
    }
}
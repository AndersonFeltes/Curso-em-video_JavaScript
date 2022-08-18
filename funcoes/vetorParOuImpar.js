const pares = []
const impares = []

function enviar(){
    let num = Number(window.document.querySelector("#num").value)
    construirArray(num)
    if(num%2 == 0){
        manipulaDOM(pares)
        organizar(pares)
    }
    else{
        manipulaDOM(impares)
        organizar(impares)
    }
}

function construirArray(num){
    if(num%2 == 0 || num == 0){
         pares.push(num)
    }
    else{
         impares.push(num)
    }
}

function manipulaDOM(array){
    if(array[0]%2 == 0 || array[0] == 0){
        let divAarray = window.document.querySelector("#resultado-par")
        divAarray.innerHTML = ""
        for(let i=0; i<array.length; i++){
            divAarray.innerHTML += ` [${array[i]}]`
        }
    }
    else{
        let divAarray = window.document.querySelector("#resultado-impar")
        divAarray.innerHTML = ""
        for(let i=0; i<array.length; i++){
            divAarray.innerHTML += ` [${array[i]}]`
        } 
    }
}

function organizar(array){
    array.sort()
    if(array[0]%2 == 0 || array[0] == 0){
        let divOrganizado = window.document.querySelector("#organizado-par")
        divOrganizado.innerHTML = `${array}`
    }
    else{
        let divOrganizado = window.document.querySelector("#organizado-impar")
        divOrganizado.innerHTML = `${array}`
    }
    
}
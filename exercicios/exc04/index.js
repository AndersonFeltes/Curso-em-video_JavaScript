function calcular() {
    const num = window.document.querySelector("#numero")
    const tabuada = window.document.querySelector("#tabuada")
    if(num.value.length == 0){
        alert("Por favor digite um número")
    }
    else{
        let multiplicador = Number(num.value)
        let cont = 1
        tabuada.innerHTML = ""
        while(cont <= 10){
            let item = window.document.createElement("option")
            item.text = `${num.value} x ${cont} = ${multiplicador*cont}`
            tabuada.appendChild(item)
            cont++
        }
    }   
}

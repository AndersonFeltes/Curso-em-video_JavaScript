function carregar(){
    var msg = window.document.querySelector("#msg")
    var imagem = window.document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora>=0 && hora<12){
        //Bom dia
        imagem.src = "manha.jpg"
        document.body.style.background = "#d7f13f"
    }
    else if(hora>=12 && hora<=18){
        //Boa tarde
        imagem.src = "tarde.jpg"
        document.body.style.background = "#ee3333"
    } 
    else{
        //Boa noite
        imagem.src = "noite.jpg"
        document.body.style.background = "#000"
    }
}

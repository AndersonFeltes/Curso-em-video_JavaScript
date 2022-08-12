function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector("#txtAno")
    var resultado = document.querySelector("#resultado")

    //testando se foi preenchido o campo do ano, e se o ano preenchido não é maior q o do sistema
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        alert("ERRO! Verifique os dados e tente novamente!")
    }
    else{
        var fSexo = document.getElementsByName("radiSex")
        var idade = ano - Number(fAno.value)
        var genero = ""
        //criando imagem no HTML
        var imagem = document.createElement("img")
        //colocando ID na imagem criada
        imagem.setAttribute("id" , "foto")

        //testando os sexo escolhido
        if(fSexo[0].checked){
            genero = "Homem"
            if(idade>=0 && idade<=10){
                //criança
                imagem.setAttribute("src" , "crianca_homem.jpg")
            }
            else if(idade<21){
                //jovem
                imagem.setAttribute("src" , "jovem_homem.jpg")
            }
            else if(idade>21 && idade<50){
                //adulto
                imagem.setAttribute("src" , "adulto_homem.jpg")
            }
            else{
                //idoso
                imagem.setAttribute("src" , "idoso_homem.jpg")
            }
        }

        else if(fSexo[1].checked){
            genero = "Mulher"
            if(idade>=0 && idade<=10){
                //criança
                imagem.setAttribute("src" , "crianca_mulher.jpg")
            }
            else if(idade<21){
                //jovem
                imagem.setAttribute("src" , "jovem_mulher.jpg")
            }
            else if(idade>21 && idade<50){
                //adulto
                imagem.setAttribute("src" , "adulto_mulher.jpg")
            }
            else{
                //idoso
                imagem.setAttribute("src" , "idoso_mulher.jpg")
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com idade de ${idade}`
        resultado.appendChild(imagem) 
    }
}
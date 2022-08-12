console.log("Ola")

var idade = 26
console.log(`Você tem ${idade} anos de idade`)
if(idade<16){
    console.log("Não vota")
}
else if(idade<18 || idade>65){
    console.log("Voto opcional")
}
else{
    console.log("Voto obrigatório")
}

console.log("") //fiz isso so pra quebrar a linha

var agora = new Date() //função date pega a hora atual
var hora = agora.getHours() //variavel hora recebe o valor da hora atual registrado na variavel agora
console.log(`Agora são ${hora} horas`)
if(hora<12){
    console.log("Bom dia")
}
else if(hora<=18){
    console.log("Boa tarde")
}
else if(hora<=24){
    console.log("Boa noite")
}
else{
    console.log("Hora invalida")
}

console.log("") //fiz isso so pra quebrar a linha

var agora = new Date()
var diaSemana = agora.getDay()//getDay recebe o dia da semana
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/

switch(diaSemana){
    case 0:
        diaSemana = "Domingo"
        break
    case 1:
        diaSemana = "Segunda" 
        break
    case 2:
        diaSemana = "Terça"
        break 
    case 3:
        diaSemana = "Quarta"
        break 
    case 4:
        diaSemana = "Quinta"
        break 
    case 5:
        diaSemana = "Sexta" 
        break
    case 6:
        diaSemana = "Sábado" 
        break
    default:
        console.log("ERRO!! dia inválido" )
}
console.log(diaSemana)
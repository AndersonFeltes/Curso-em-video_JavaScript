
//pront de comando
var nome=window.prompt("Qual é seu nome?")

alert("Bem vindo "+nome)//concatenação

//Number.parseInt faz a conversão da String que o prompt retorna para um valor inteiro
var n1 = Number(window.prompt("Digite um número: "))
var n2 = Number(window.prompt("Digite outro número "))
var s = n1+n2
window.alert("A soma dos valores é "+ s)

//exemplo de placeholder para mostrar na tela. É preciso usar crase simples e nao dupla para funcionar, ao invés das aspas
window.alert(`A soma de ${n1} mais ${n2} é igual a ${s} !!`)
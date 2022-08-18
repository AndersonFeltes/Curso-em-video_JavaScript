function parOuImpar(n){
    if(n%2 == 0){
        return "Par!"
    }
    else{
        return "Impar!"
    }
}

let res = parOuImpar(4)
console.log(res)
console.log(parOuImpar(5))
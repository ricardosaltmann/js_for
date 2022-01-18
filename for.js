const numeros = [100, 200, 300, 400, 500, 600]

/* let i =0  utilizamos o i para iniciar o for
onde o i vai armarzenar o contador
no segundo parametro fazemos o limite do laco 
onde enquanto o contador i for menor que o tamanho da lista,
ele vai continuar o laco
e no final incrementamos o contador*/
for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i])
    /*vamos exibir o i (contador e o valor da lista)*/ 
}

const notas = [10, 3.4, 8, 7]

let soma = 0

for (let i = 0; i < notas.length; i++){
    soma += notas[i];
}

let media = soma/notas.length

console.log(media)


//metodo forEach

let soma2 = 0 

notas.forEach(function(nota){
    soma2 += nota
})

let media2 = soma2/notas.length
console.log(media2)
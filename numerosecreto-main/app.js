let nome = prompt("nome: ");
console.log("nome:"+ nome);

let  numeroMaximo = parseInt (prompt("numeroMaximo:" ));
console.log("numeroMaximo"+ numeroMaximo);

let numeroAle = parseInt(Math.random() * numeroMaximo);
console.log("numeroAle:" + numeroAle);

let tentativas=0; resposta=0
// let resposta;
for(let i=1; resposta != numeroAle; i++) {
    resposta = parseInt(prompt("Numero:"));
    tentativas++;
    if(resposta == numeroAle && tentativas == 1) {
        alert("parabens" +nome+ "voce acertou em"+tentativas+"tentativa");
    } else if(resposta == numeroAle ) {
        alert("parabens" +nome+ "voce acertou em"+tentativas+"tentativas");
    }else {
        if (resposta > numeroAle) {
            alert("vc errou tente um numero menor \n tentativas:" +tentativas);
        }else if(resposta < numeroAle) {
            alert("vc errou tente um numero maior \n tentativas:" +tentativas);
        }
    }
}



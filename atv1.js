//Calcular a temperatura média do planeta

var tempMediaAtual = Number(prompt(`Qual é a temperatura média atual? `));

var quantAnos = Number(prompt(`Qual é a quantidade de anos? `));

var taxaTemp = Number(prompt(`Qual é a taxa de crescimento/diminuição anual da temperatura? `));

var cont = 0;

function Contador() {
 (tempMediaAtual += tempMediaAtual / 100 * taxaTemp);
}

while(cont < quantAnos) {
    Contador() 
    cont++ 
}

alert(`A temperatura média do planeta é de ${tempMediaAtual}`);
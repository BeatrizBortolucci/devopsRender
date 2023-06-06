//Calcular o tempo necessário para alcançar um determinado valor com investimentos mensais

var valorImovel = Number(prompt(`Qual é o valor do imóvel?`));

var investimentoMensal = Number(
  prompt(`Qual é o valor do investimento mensal?`)
);

var TaxaMensal = Number(prompt(`Qual é o valor da taxa mensal?`));

var valorPago = 0;
var tempo = -1;
var valorMinimo = valorImovel / 50;

while(valorPago < valorImovel) {
    valorPago = investimentoMensal + (valorPago + (valorPago / 100) * TaxaMensal);
    tempo++
}
if(investimentoMensal < valorMinimo) {
    alert(`O investimento não é viável`)
}else {
    alert(`O tempo necessário será de ${tempo} meses.`);
}
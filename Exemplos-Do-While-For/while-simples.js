
var qtd_brownies = 5;
var caixa = 0;
while(qtd_brownies >=1) {
alert("Vendemos Brownies por R$3,50 cada, quer um?");
caixa = caixa +3.5;
qtd_brownies = qtd_brownies - 1;
}
document.write("Total apurado "+caixa);
function programa() {
var combustivel = prompt("Digite 1 para Álcool e 2 para Gasolina");
var alcool = 3.16;
var gasolina = 4.19;

if (combustivel == 1 || combustivel == 2){
		var litros = prompt("Digite quantos litros deseja colocar");
 		if (combustivel == 1){
		var calculo = litros * alcool;
		var virgula = calculo.toString().replace(/\./g, ',');
		alert("O valor total a ser pago é R$"+virgula);
		}
		if (combustivel == 2){
		var calculo = litros * gasolina;
		var virgula = calculo.toString().replace(/\./g, ',');
		alert("O valor total a ser pago é R$"+virgula);
		}
}else{
	alert("Você digitou um código existente, tente novamente");
	programa();
}
}
programa();

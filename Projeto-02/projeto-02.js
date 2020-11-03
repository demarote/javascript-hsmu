alert("Bem-vindo ao Restaurante Universitário");

var qnt_entrevistados = 0;
var qtd_menor_10 = 0;
var qtd_entre_10_15 = 0;
var qtd_maior_15 = 0;

function programa() {
var pergunta = prompt("Deseja Participar da Pesquisa? 1 para SIM e 2 para NÃO");

if (pergunta == 1 || pergunta == 2){
    if (pergunta == 1){
    var quantidade = prompt("Quantas vezes você usou o restaurante no mês");
    qnt_entrevistados = qnt_entrevistados + 1;
    document.getElementById("entrevistados").innerHTML = qnt_entrevistados;
        if(quantidade < 10){qtd_menor_10 = qtd_menor_10 + 1;}
        if(quantidade >= 10 && quantidade <= 15){qtd_entre_10_15 = qtd_entre_10_15 + 1;}
        if(quantidade > 15){qtd_maior_15 = qtd_maior_15 + 1;}
        var calculo1 = (100 * qtd_menor_10) / qnt_entrevistados;
        document.getElementById("menos10").innerHTML = calculo1+'%';
        var calculo2 = (100 * qtd_entre_10_15) / qnt_entrevistados;
        document.getElementById("entre1015").innerHTML = calculo2+'%';
        var calculo3 = (100 * qtd_maior_15) / qnt_entrevistados;
        document.getElementById("mais15").innerHTML = calculo3+'%';
        setTimeout(function(){programa();}, 1500);
    }
    if (pergunta == 2){
    alert('Pena que não participou, mas obrigado mesmo assim.');
    programa();
    }
}else{
alert("Você digitou um código existente, tente novamente");
programa();
}
}
programa();
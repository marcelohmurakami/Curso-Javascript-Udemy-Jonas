/*Faça um programa que use uma função para determinar o valor a ser pago por uma prestação de
uma conta. O programa deverá solicitar ao usuário o valor da prestação e o número de dias em
atraso e exibir o valor a ser pago. Após a execução o programa deverá voltar a pedir outro valor
de prestação e assim continuar até que seja informado um valor igual a zero para a prestação.
Neste momento o programa deverá ser encerrado, exibindo o relatório do dia, que conterá a
quantidade e o valor total de prestações pagas no dia. O cálculo do valor a ser pago é feito da
seguinte forma: para pagamentos sem atraso, cobrar o valor da prestação, e quando houver
atraso, cobrar 4% de multa, mais 0,2% de juros por dia de atraso.*/

const verificaPrestacao = function (prestacao, diasAtraso){
    if (diasAtraso === 0) {
        return prestacao;
    } else {
        return prestacao + (prestacao * 0.04) + (prestacao * (diasAtraso * 0.004));
    }
}

let qtdPrestacoes = 0;
let somaPrestacoes = 0;
while (true) {
    const prestacao = Number(prompt("Informe o valor da prestação: "));

    if (prestacao === 0) {
        console.log(`A quantidade total de prestações paga hoje foi ${qtdPrestacoes} prestações!`);
        console.log(`O valor total pago foi de R$${somaPrestacoes}`);
        console.log("PROGRAMA FINALIZADO!");
        break;
    } else if (prestacao < 0) {
        console.log("Informe um valor válido!");
        continue;
    }

    const diasAtraso = Number(prompt("Informe quantos dias de atraso: "))
    
    if (diasAtraso < 0) {
        console.log ("Informe um valor válido!");
        continue;
    }

    const valor = verificaPrestacao(prestacao, diasAtraso);
    qtdPrestacoes++;
    somaPrestacoes = somaPrestacoes + valor;
}
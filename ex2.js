/*Implemente um sistema de gerenciamento de reservas de hotel, onde cada hóspede é identificado pelo CPF. O sistema deve permitir o cadastro e saída de hóspedes, a consulta de quartos disponíveis, e a determinação do hóspede com a estadia mais longa (com base na data de entrada).
Funcionalidades
1.	Cadastro de Hóspedes: O programa deve permitir o cadastro de novos hóspedes, com as seguintes informações:
o	CPF (único para cada hóspede)
o	Idade
o	Número do quarto (deve ser único e disponível)
o	Data de entrada (no formato "dd-mm-yyyy")
2.	Saída do Hóspede: O programa deve permitir que o hóspede desocupe o quarto ao sair. O quarto deve então voltar a ser listado como disponível.
3.	Consulta de Quartos Disponíveis: O programa deve listar todos os quartos disponíveis, de 101 a 120. Quando um quarto é desocupado, ele deve ser listado novamente como disponível.
4.	Consulta de Hóspedes por Quarto: O programa deve exibir a lista de todos os hóspedes atualmente hospedados, mostrando o CPF, idade, quarto e data de entrada.
5.	Hóspede com Estadia Mais Longa: O programa deve determinar qual hóspede está hospedado há mais tempo, considerando a data de entrada mais antiga.
Requisitos:
•	O programa deve iniciar com uma lista de quartos disponíveis numerados de 101 a 120.
•	O usuário deve interagir com o programa através de um menu, no qual poderá escolher as seguintes opções:
o	1: Cadastrar um novo hóspede (CPF único, e em quarto disponível).
o	2: Registrar saída de um hóspede (desocupando o quarto).
o	3: Listar quartos disponíveis.
o	4: Listar todos os hóspedes atualmente hospedados.
o	5: Determinar o hóspede com a estadia mais longa.
o	6: Encerrar o programa.
Regras:
•	O CPF deve ser único para cada hóspede.
•	A data de entrada deve ser validada para garantir o formato correto "dd-mm-yyyy".
•	Quando o hóspede sair, o quarto deve voltar a estar disponível.
•	Se o usuário tentar inserir uma opção inválida no menu, o programa deve exibir uma mensagem de erro e solicitar a entrada novamente.
Funções Sugeridas:
•	cadastraHospede(vetHospedes, quartosDisponiveis): Cadastra um novo hóspede no vetor vetHospedes, utilizando um quarto disponível.
•	saidaHospede(vetHospedes, cpf): Remove o hóspede com o CPF fornecido da lista vetHospedes e torna o quarto ocupado por ele disponível novamente.
•	consultaQuartosDisponiveis(quartosDisponiveis): Exibe os números dos quartos que estão livres.
•	consultaHospedes(vetHospedes): Exibe as informações dos hóspedes atualmente no hotel.
•	hospedeMaisTempo(vetHospedes): Determina e exibe o hóspede com a estadia mais longa, com base na data de entrada.
Observação:
•	Utilize a função prompt-sync para capturar as entradas do usuário.
•	Faça a validação da data para que o formato "dd-mm-yyyy" seja corretamente inserido.
•	Calcule o tempo de estadia com base na data de entrada e na data atual para identificar o hóspede com estadia mais longa.*/


let hospedes = [];
const quartos = [];
for (let a = 101; a <= 120; a++) {
  let quarto = {
    numero: a,
    disponivel: true
  }
  quartos.push(quarto);
}

// Função para cadastrar um hospede
const cadastraHospede = function(){
    let testecpf = true;
    let testequarto = 0;
    let cpf, idade, quarto, dataEntrada, estaHospedado

    while (testecpf === true){
        cpf = Number(prompt("Digite o CPF do hóspede: "));
        if (isNaN(cpf) || cpf.toString().length !== 11) {
            console.log("CPF inválido, digite novamente!")
        } else {
            testecpf = false
        }
    }

    while (testequarto === 0){
        quarto = Number(prompt("Digite o quarto do hóspede: "));
        if (quarto < 101 || quarto > 120){
            console.log("Quarto inexistente!");
            continue;
        }
        for (let a = 0; a < quartos.length; a++) {
            if (quarto === quartos[a].numero && quartos[a].disponivel === true){
                quartos[a].disponivel = false;
                testequarto++;
                break;
            } else if (quarto === quartos[a].numero && quartos[a].disponivel === false){
                console.log("Quarto indisponível, selecione outro quarto");
                break;
            }
        }
    }
    const hospede = {
        cpf,
        idade: Number(prompt("Digite a idade do hospede: ")),
        quarto,
        dataEntrada: prompt("Digite a data de entrada (dd/mm/aaaa)"),
        estaHospedado: true
    }
    hospedes.push(hospede);
}


//Função para cadastrar saída de um hospede
const saidaHospede = function(cpf){
    let teste = 0;
    for (let a = 0; a < hospedes.length; a++){
        if (cpf === hospedes[a].cpf){
            teste++
            hospedes[a].estaHospedado = false;
            console.log("Checkout realizado com sucesso!");
            for(let b = 0; b < quartos.length; b++){
                if (quartos[b].numero === hospedes[a].quarto){
                    quartos[b].disponivel = true;
                    break;
                }
            }
            break;
        }
    }
    if (teste === 0){
        console.log("CPF inválido ou não cadastrado!")
    }
}

// Função para listar quartos disponíveis
const quartoDisponivel = function(quartos){
    quartos.forEach((quarto) => {
        if (quarto.disponivel === true){
            console.log(`Quarto disponível: ${quarto.numero}`)
        }
    })
}

// Função para consultar hospedes
const consulta = function(hospedes){
    hospedes.forEach((hospede) => {
        console.log(`O hospede de CPF ${hospede.cpf} possui ${hospede.idade} anos e ${hospede.estaHospedado ? `está hospedado no quarto ${hospede.quarto}` : `não está hospedado`}`)
    })
}

// Função para verificar o hospede com mais tempo de estadia



// Fazer menu
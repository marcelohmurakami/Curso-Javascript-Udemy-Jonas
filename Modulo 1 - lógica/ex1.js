// Fazer um programa que avalia quem é o paciente de maior risco de um hospital, onde o principal risco seria sua condição (Grave, Moderada ou Leve), em sequência sua idade e posteriormente, seu peso. Fazer um menu interativo com as seguintes opções: 1- Cadastro de pacientes, 2- Consulta de pacientes, 3- Media de idade dos pacientes, 4- Paciente com maior risco, 5- Sair.

const prompt = require('prompt-sync')();
let pacientes = [];

// Função que cadastra os clientes
const cadastro = function (){
    const paciente = {
        nome: prompt("Informe o nome do paciente: "),
        idade: Number(prompt("Informe a idade do paciente: ")),
        peso: Number(prompt("Informe o peso do paciente: ")),
        gravidade: prompt("Informe a gravidade do paciente (L: Leve, M: Moderado, G: Grave): ").toUpperCase()
    }
    return pacientes.push(paciente);
}

// Função que consulta algum paciente
const consulta = function(pacientes){
    const nomeDoPaciente = prompt("Informe o nome do paciente a ser consultado: ");
    let cont = 0;
    pacientes.forEach((paciente) => {
        if (paciente.nome === nomeDoPaciente){
            console.log(`O paciente ${paciente.nome} possui ${paciente.idade} anos, pesa ${paciente.peso} kilogramas e sua gravidade atual é ${paciente.gravidade}`);
            cont++;
        }
    })
    if (cont === 0) console.log("Paciente não encontrado!");
}

// Função que calcula a média de idades dos pacientes
const mediaIdades = function (pacientes){
    let soma = 0;
    pacientes.forEach((paciente) => {
        soma = soma + paciente.idade
    })
    const media = soma / pacientes.length;
    console.log(media.toFixed(2));
}


// Função que calcula o maior risco
const risco = function (pacientes){
    let pacienteDeMaiorRisco = pacientes[0];

    pacientes.forEach((paciente) => {
        if (paciente.gravidade === "G"){
            if (pacienteDeMaiorRisco.gravidade != "G"){
                pacienteDeMaiorRisco = paciente;
            } else if (paciente.idade > pacienteDeMaiorRisco.idade){
                pacienteDeMaiorRisco = paciente;
            } else if (paciente.idade === pacienteDeMaiorRisco.idade && paciente.peso > pacienteDeMaiorRisco.peso){
                pacienteDeMaiorRisco = paciente;
            }
        }

        else if (pacienteDeMaiorRisco.gravidade != "G" && paciente.gravidade === "M"){
            if (pacienteDeMaiorRisco.gravidade != "M"){
                pacienteDeMaiorRisco = paciente;
            } else if (paciente.idade > pacienteDeMaiorRisco.idade){
                pacienteDeMaiorRisco = paciente;
            } else if (paciente.idade === pacienteDeMaiorRisco.idade && paciente.peso > pacienteDeMaiorRisco.peso){
                pacienteDeMaiorRisco = paciente;
            }
        }

        else if (pacienteDeMaiorRisco.gravidade == "L" && paciente.gravidade === "L"){
            if (paciente.idade > pacienteDeMaiorRisco.idade){
                pacienteDeMaiorRisco = paciente;
            } else if (paciente.idade === pacienteDeMaiorRisco.idade && paciente.peso > pacienteDeMaiorRisco.peso){
                pacienteDeMaiorRisco = paciente;
            }
        }
    })
    console.log(pacienteDeMaiorRisco);
}


// Menu de interatividade
let verifica = true;
while(verifica){
    let opcao = Number(prompt("Escolha uma opção: 1- Cadastro de pacientes, 2- Consulta de pacientes, 3- Media de idade dos pacientes, 4- Paciente com maior risco, 5- Sair."));
    switch(opcao){
        case 1:
            cadastro();
            break;

        case 2:
            consulta(pacientes);
            break;

        case 3:
            mediaIdades(pacientes);
            break;

        case 4:
            risco(pacientes);
            break;

        case 5:
            verifica = false;
            break;

        default:
            console.log("Opção inválida, digite novamente!");
            break;
    }
}
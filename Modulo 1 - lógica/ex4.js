/*Implemente um sistema para gerenciar as tarefas de um projeto de uma empresa. O sistema deve permitir o cadastro de tarefas, atualização de status, consulta de tarefas pendentes e determinação da tarefa mais urgente.*/

let tarefas = [];
/*Funcionalidades:
Cadastro de Tarefas: O programa deve permitir o cadastro de novas tarefas com as seguintes informações:
ID da tarefa (único)
Nome da tarefa
Prioridade (Alta, Média, Baixa)
Data de entrega (no formato "dd-mm-yyyy")
Status (Pendente ou Concluída)*/
const cadastro = function(){
    let id, nome, prioridade, dataEntrega, status;

    while(true){
        let naoExiste = true;
        id = Number(prompt("Informe o ID da tarefa: "));
        if(isNaN (id) || id <= 0){
            console.log("Por favor, digite um número válido");
            continue;
        }
        for (let a = 0; a < tarefas.length; a++){
            if (id === tarefas[a].id){
                naoExiste = false;
                console.log("Esse ID já existe, por favor escolha outro!");
                break;
            }
        }
        if (naoExiste === true){
            break;
        }
    }

    nome = prompt("Insira o nome da tarefa: ");

    while (true){
        prioridade = prompt("Informe a prioridade da tarefa (A: Alta. M: Média. B: Baixa.): ");

        if(prioridade === 'A' || prioridade === 'M' || prioridade === 'B'){
            break;
        } else{
            console.log("Informe uma opção válida!");
        }
    }

    dataEntrega = prompt("Informe uma data de entrega (yyyy/mm/dd): ");

    while (true){
        status = prompt("Informe o status (Pendente ou concluida): ").toUpperCase();

        if (status === "PENDENTE" || status === "CONCLUIDA"){
            break;
        } else {
            console.log("Informe um status válido");
        }
    }

    const tarefa = {
        id,
        nome,
        prioridade,
        dataEntrega,
        status
    }

    tarefas.push(tarefa);
}

//Atualização de Status de Tarefa: O programa deve permitir atualizar o status de uma tarefa para "Concluída".
const modificaStatus = function (tarefas){
    while (true){
        const modifica = Number(prompt("Informe o ID da tarefa a ser modificada: "));
        let existe = false;
        if (isNaN (modifica) || modifica <= 0){
            console.log("Informe um ID válido");
            continue;
        }

        for (let a = 0; a < tarefas.length; a++){
            if (modifica === tarefas[a].id){
                existe = true;
                tarefas[a].status = "CONCLUIDA";
                console.log(`A tarefa ${tarefas[a].nome} de ID ${tarefas[a].id} foi concluída com sucesso!`);
                break;
            }
        }

        if (existe === false){
            console.log("Tarefa não existe!");
        } else{
            break;
        }
    }
}

//Consulta de Tarefas Pendentes: O programa deve listar todas as tarefas que ainda estão com o status "Pendente", ordenadas pela prioridade (Alta, Média, Baixa).
const prioridade = function (tarefas){
    let prioridade1 = [];
    let prioridade2 = [];
    let prioridade3 = [];

    tarefas.forEach((tarefa) => {
        if (tarefa.status = "PENDENTE"){
            if (tarefa.prioridade === 'A'){
                prioridade1.push(tarefa);
            } else if (tarefa.prioridade === 'M'){
                prioridade2.push(tarefa);
            } else{
                prioridade3.push(tarefa);
            }
        }
    })

    console.log("Tarefas com alta prioridade: ", prioridade1, "/n", "Tarefas com média prioridade: ", prioridade2, "/n", "Tarefas com baixa prioridade: ", prioridade3, "/n");
}

//Consulta de Tarefas Concluídas: O programa deve listar todas as tarefas que já foram concluídas.
const tarefasConcluidas = function(tarefas){
    tarefas.forEach((tarefa) => {
        if (tarefa.status === "CONCLUIDA"){
            console.log(`Tarefa ${tarefa.nome} CONCLUÍDA`);
        }
    })
}

//Determinação da Tarefa Mais Urgente: O programa deve identificar qual tarefa pendente possui a data de entrega mais próxima e prioridade alta.
const tarefaMaisUgente = function (tarefas){
    let urgente = tarefas[0];

    tarefas.forEach((tarefa) => {
        if (tarefa.prioridade === 'A' && new Date(tarefa.dataEntrega) < new Date(urgente.dataEntrega));
    })
}

//Encerrar o Programa: O programa deve encerrar quando o usuário optar por sair.



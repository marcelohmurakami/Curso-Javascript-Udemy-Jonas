/*Implemente um sistema para gerenciar as tarefas de um projeto de uma empresa. O sistema deve permitir o cadastro de tarefas, atualização de status, consulta de tarefas pendentes e determinação da tarefa mais urgente.

Funcionalidades:
Cadastro de Tarefas: O programa deve permitir o cadastro de novas tarefas com as seguintes informações:
ID da tarefa (único)
Nome da tarefa
Prioridade (Alta, Média, Baixa)
Data de entrega (no formato "dd-mm-yyyy")
Status (Pendente ou Concluída)
Atualização de Status de Tarefa: O programa deve permitir atualizar o status de uma tarefa para "Concluída".
Consulta de Tarefas Pendentes: O programa deve listar todas as tarefas que ainda estão com o status "Pendente", ordenadas pela prioridade (Alta, Média, Baixa).
Consulta de Tarefas Concluídas: O programa deve listar todas as tarefas que já foram concluídas.
Determinação da Tarefa Mais Urgente: O programa deve identificar qual tarefa pendente possui a data de entrega mais próxima e prioridade alta.
Encerrar o Programa: O programa deve encerrar quando o usuário optar por sair.
Requisitos:
O ID da tarefa deve ser único.
A data de entrega deve ser validada para garantir o formato correto "dd-mm-yyyy".
Se o usuário tentar inserir uma opção inválida no menu, o programa deve exibir uma mensagem de erro.
Funções Sugeridas:
cadastrarTarefa(listaTarefas): Cadastra uma nova tarefa no vetor listaTarefas.
atualizarStatusTarefa(listaTarefas, id): Atualiza o status de uma tarefa para "Concluída".
consultarTarefasPendentes(listaTarefas): Exibe a lista de todas as tarefas pendentes.
consultarTarefasConcluidas(listaTarefas): Exibe a lista de todas as tarefas concluídas.
tarefaMaisUrgente(listaTarefas): Determina e exibe a tarefa pendente mais urgente (data de entrega mais próxima e prioridade alta). */


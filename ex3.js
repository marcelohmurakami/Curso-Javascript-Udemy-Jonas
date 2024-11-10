
/*Implemente um sistema para gerenciar o estoque de produtos de uma loja. O sistema deve permitir o cadastro de produtos, consulta de estoque, atualização de quantidade e determinação do produto mais caro.

Funcionalidades:
Cadastro de Produtos: O programa deve permitir o cadastro de novos produtos com as seguintes informações:
Código do produto (único)
Nome do produto
Preço unitário
Quantidade em estoque

Atualização de Estoque: O programa deve permitir a atualização da quantidade de um produto específico (aumentar ou diminuir).

Consulta de Produtos: O programa deve listar todos os produtos cadastrados, exibindo o código, nome, preço e quantidade em estoque.

Produto com Maior Valor Unitário: O programa deve determinar qual produto possui o maior valor unitário.

Consulta de Produtos com Baixo Estoque: O programa deve listar os produtos com quantidade inferior a um limite mínimo (definido como 5 unidades).

Encerrar o Programa: O programa deve encerrar quando o usuário optar por sair.
Requisitos:
O código do produto deve ser único.
O sistema deve validar o preço e a quantidade para garantir que sejam valores positivos.
Se o usuário tentar inserir uma opção inválida no menu, o programa deve exibir uma mensagem de erro.
*/

let produtos = [
    {codigo: 1, nome: "Camiseta Masculina", valor: 49.99, qtde: 15, departamento: "Roupas"},
    {codigo: 2, nome: "Calça Jeans Feminina", valor: 79.90, qtde: 12, departamento: "Roupas"},
    {codigo: 3, nome: "Tênis Esportivo", valor: 159.00, qtde: 8, departamento: "Calçados"},
    {codigo: 4, nome: "Mochila de Couro", valor: 189.90, qtde: 5, departamento: "Acessórios"},
    {codigo: 5, nome: "Camiseta Infantil", valor: 29.99, qtde: 20, departamento: "Roupas"},
    {codigo: 6, nome: "Jaqueta de Couro", valor: 249.99, qtde: 7, departamento: "Roupas"},
    {codigo: 7, nome: "Relógio de Pulso", valor: 199.90, qtde: 10, departamento: "Acessórios"},
    {codigo: 8, nome: "Chaveiro Personalizado", valor: 15.00, qtde: 50, departamento: "Acessórios"},
    {codigo: 9, nome: "Óculos de Sol", valor: 89.99, qtde: 13, departamento: "Acessórios"},
    {codigo: 10, nome: "Tênis Casual", valor: 120.00, qtde: 14, departamento: "Calçados"},
    {codigo: 11, nome: "Cadeira Gamer", valor: 599.00, qtde: 4, departamento: "Móveis"},
    {codigo: 12, nome: "Mesa de Escritório", valor: 299.00, qtde: 6, departamento: "Móveis"},
    {codigo: 13, nome: "Luminária LED", valor: 49.90, qtde: 25, departamento: "Móveis"},
    {codigo: 14, nome: "Aspirador de Pó", valor: 159.00, qtde: 8, departamento: "Eletrodomésticos"},
    {codigo: 15, nome: "Micro-ondas", valor: 399.90, qtde: 3, departamento: "Eletrodomésticos"},
    {codigo: 16, nome: "Ferro de Passar", valor: 89.99, qtde: 10, departamento: "Eletrodomésticos"},
    {codigo: 17, nome: "Smartphone", valor: 1499.00, qtde: 6, departamento: "Eletrônicos"},
    {codigo: 18, nome: "Laptop", valor: 3500.00, qtde: 2, departamento: "Eletrônicos"},
    {codigo: 19, nome: "Fones de Ouvido", valor: 250.00, qtde: 18, departamento: "Eletrônicos"},
    {codigo: 20, nome: "Câmera Digital", valor: 899.00, qtde: 5, departamento: "Eletrônicos"}
];

//Função cadastro de produtos
const cadastroProdutos = function(){
    let codigo, nome, valor, qtde

    while (true){
        codigo = Number(prompt("Informe o código do produto: "));
        verificaNaoExiste = true;
        for (let a = 0; a < produtos.length; a++){
            if (codigo === produtos[a].codigo){
                verificaNaoExiste = false;
                break;
            }
        }
        if (codigo <= 0 && Number.isNaN(codigo)){
            console.log("Informe um código válido.");
        } else if (verificaNaoExiste === false){
            console.log("Código já existente, cadastre outro número!");
        } else{
            break;
        }
    }

    nome = prompt("Informe um nome para o produto: ").toUpperCase();

    while (true){
        valor = Number(prompt("Informe o valor do produto: "));
        if (valor <= 0){
            console.log("Digite um valor válido.")
        } else{
            break;
        }
    }

    while (true){
        qtde = Number(prompt("Informe a quantidade atual em estoque: "));
        if (qtde <= 0){
            console.log("Digite uma quantidade válida.")
        } else{
            break;
        }
    }

    const produto = {
        codigo,
        nome,
        valor,
        qtde
    }

    produtos.push(produto);
    console.log("Produto cadastrado com sucesso!");
}

//Função consulta de produtos
const consulta = function(produtos){
    while(true){
        const escolha = Number(prompt("Voce deseja consultar pelo código ou nome? (1- para código. 2- para nome"));
        if (escolha === 1 || escolha === 2){
            break;
        } else {
            console.log("Digite uma opção válida.")
        }
        
    if (escolha === 1){
        const cod = Number(prompt("Informe o código do produto: "));
        let teste = 0;
        for (let a = 0; a < produtos.length; a++){
            if (cod === produtos[a].codigo){
                console.log(`O produto de código ${produtos[a].codigo} - ${produtos[a].nome} possui valor de R$${produtos[a].valor} e  tem ${produtos[a].qtde} unidades em estoque`);
                teste++;
                break;
            }
        }
        if (teste == 0){
            console.log("Produto de código inexistente!");
        }
    } else if (escolha === 2){
        const nome = prompt("Infome o nome do produto: ").toUpperCase();
        let teste = 0;
        for (let a = 0; a < produtos.length; a++){
            if (nome === produtos[a].nome){
                console.log(`O produto de código ${produtos[a].codigo} - ${produtos[a].nome} possui valor de R$${produtos.nome[a].valor} e  tem ${produtos[a].qtde} unidades em estoque`);
                teste++;
                break;
            }
        }
        if (teste == 0){
            console.log("Produto de nome inexistente!");
        }
    }

    }
}

//Função atualização de quantidade
const atualiza = function (produtos){
    const atualizacao = Number(prompt("Informe o código do produto: "));
    let aumentaOuDiminui, encontrado = false;
    for (let a = 0; a < produtos.length; a++){
        if (atualizacao === produtos[a].codigo){
            encontrado = true;
            while (true){
                aumentaOuDiminui = Number(prompt("Você deseja adicionar ou reduzir o estoque? (1- Aumentar. 2- Reduzir"));
                if (aumentaOuDiminui === 1){
                    let aumenta = Number(prompt("Informe a quantidade de produtos que irá aumentar: "));
                    if (!isNaN (aumenta) && aumenta > 0){
                        produtos[a].qtde += aumenta;
                        break;
                    } else {
                        console.log("Quantidade informada é um número inválido.")
                    }
                } else if (aumentaOuDiminui === 2){
                    let diminui = Number(prompt("Informe a quantidade de produtos que irá diminuir: "));
                    if (!isNaN (diminui) && diminui > 0){
                        produtos[a].qtde -= diminui;
                        if (produtos[a].qtde <= 0){
                            produtos[a].qtde = 0;
                            console.log("ATENÇÃO! A quantidade informada não existe no estoque, o estoque ficará zerado!")
                        }
                        break;
                    } else {
                        console.log("Quantidade informada é um número inválido.")
                    }
                } else {
                    console.log("Opção inválida!");
                }
            }
            break;
        }
    }
    if (encontrado === false){
        console.log("Produto inexistente!");
    }
}

//Função do produto mais caro
const maisCaro = function(produtos){
    let caro = produtos[0];
    produtos.forEach((produto) => {
        if (produto.valor > caro.valor){
            caro = produto;
        }
    })
    console.log(`O produto mais caro é ${caro.nome}`);
}

//Função de produtos com estoque precário
const precario = function(produtos){
    produtos.forEach((produto) => {
        if (produto.qtde <= 5){
            console.log (`${produto.nome} em estado crítico com apenas ${produto.qtde} unidades em estoque`);
        }
    })
}

//Menu de interatividade (fazendo if else)
let teste = true
while (teste === true){
    let pastel = Number(prompt("Digite a opção: 1- Cadastro de produtos. 2- Consulta. 3- Atualizar estoque. 4- Produto mais caro. 5- Produtos com pouco estoque. 6- Sair"));

    switch(pastel){
        case 1:
            cadastroProdutos();
            break;

        case 2:
            consulta(produtos);
            break;

        case 3:
            atualiza(produtos);
            break;

        case 4:
            maisCaro(produtos);
            break;

        case 5:
            precario(produtos);
            break;

        case 6:
            teste = false;
            break;

        default:
            console.log("Opção inexistente!");
            break;
    }
}
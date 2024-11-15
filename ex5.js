/*. Fazer um programa que desenvolva um jogo para adivinhar uma palavra oculta. Será um jogo
semelhante ao da forca, mas com algumas modificações. Neste jogo, o jogador tenta adivinhar
uma palavra oculta, mediante uma quantidade de tentativas limitada. Para isso, o programa
escolhe, aleatoriamente, uma palavra de uma lista de palavras contidas em um arquivo e o
jogador deve adivinhar a palavra. Essa lista deve conter 15 palavras. A quantidade de tentativas
também deve ser aleatória, em um intervalo de 8 a 12. Quando o jogador adivinha alguma letra,
as letras correspondentes na palavra são reveladas. Além disso, deve ser informado também a
quantidade de tentativas que ainda resta quando a letra for incorreta, mensagem caso já tenha
tentado a letra, e outras situações para tornar o jogo mais interessante. O jogo finaliza quando o
jogador adivinhar a palavra ou acabar as suas tentativas.*/

const timesEuropeus = [
    "anderlecht",       // Bélgica
    "galatasaray",      // Turquia
    "besiktas",         // Turquia
    "fenerbahce",       // Turquia
    "basel",            // Suíça
    "copenhagen",       // Dinamarca
    "braga",            // Portugal
    "gent",             // Bélgica
    "genk",             // Bélgica
    "salzburg",         // Áustria
    "spartak",          // Rússia
    "dinamo",           // Croácia
    "celtic",           // Escócia
    "rangers",          // Escócia
    "malmo",            // Suécia
    "panathinaikos",    // Grécia
    "aek",              // Grécia
    "olympiacos",       // Grécia
    "steaua",           // Romênia
    "maribor"           // Eslovênia
];

//Fazer função para escolher uma palavra oculta
const timeAleatorio = timesEuropeus[Math.floor(Math.random() * timesEuropeus.length)];

//Fazer função para determinar número de tentativas
const tentativas = Math.floor(Math.random() * 5) + 8;
console.log("Bem vindo ao jogo de adivinhar palavras/n");
console.log(`Você tem ${tentativas} tentativas para acertar o nome do time./n`)

//Fazer função do jogo
const jogo = function(timeAleatorio, tentativas){
    const letras = timeAleatorio.split("");
    let palavra = [];
    for(let a = 0; a < letras.length; a++){
        palavra.push("-");
    }
    let letrasJaTentadas = [];

    while (tentativas > 0){
        let tentativa = prompt("Escolha uma letra: ").toLowerCase();
        let existe = false;

        letrasJaTentadas.forEach((verifica) => {
            if (verifica === tentativa){
                existe = true;
            }
        }); if (existe === true){
            console.log("Você já jogou essa letra, por favor insira uma letra diferente!");
            continue;
        }

        let achou = false;
        for (let a = 0; a < letras.length; a++){
            if (tentativa === letras[a]){
                palavra[a] = tentativa;
                console.log("Você acertou.", palavra);
                achou = true;
                letrasJaTentadas.push(tentativa);
            }
        } if (achou === false) {
            tentativas--;
            letrasJaTentadas.push(tentativa);
            console.log(`Você errou, agora você tem mais ${tentativas} tentativas restantes.`);
        }

        if (!palavra.includes("-")){
            console.log("PARABÉNS, VOCE É O GRANDE CAMPEÃO!");
            break;
        } else if (tentativas === 0){
            console.log("Suas tentativas acabaram, você perdeu!");
            break;
        }
    }
}

jogo(timeAleatorio, tentativas);

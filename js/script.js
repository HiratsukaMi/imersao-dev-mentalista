var numeroSecreto = 0;
var elementoResultado = document.getElementById("resultado");
var tentativas = 5;

function Sortear(){
    numeroSecreto = parseInt(Math.random() * 11);
}

function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);

    if(chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Você deve chutar um número de 0 a 10. O mestre vai deixar você chutar novamente sem penalidades."
    } else if(chute == numeroSecreto){
        elementoResultado.innerHTML = "Você acertou! Ganhou " + chute + " pontos de sanidade. (Tentativas restantes: " + tentativas + ")";
    } else {
        --tentativas;
        if(chute > numeroSecreto){
            elementoResultado.innerHTML = "Você errou, perdendo " + chute + " pontos de sanidade. O número que você procura é menor do que o seu chute. Tente novamente. (Tentativas restantes: " + tentativas + ")";
        } else {
            elementoResultado.innerHTML = "Você errou, perdendo " + chute + " pontos de sanidade. O número que você procura é maior do que o seu chute. Tente novamente. (Tentativas restantes: " + tentativas + ")";
        }
    } 
    
    if(tentativas == 0){
        elementoResultado.innerHTML = "Seu número de tentativas acabou. Você enlouqueceu. (O número secreto é: " + numeroSecreto + ")";
    }
}

function JogarNovamente() {
    Sortear();
    tentativas = 5;
    elementoResultado.innerHTML = "Novo jogo. Sua sanidade está restaurada! (Número de tentativas: " + tentativas + ")";
}
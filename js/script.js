var numeroSecreto = 0;
var elementoResultado = document.getElementById("resultado");
var tentativas = 5;
var pontosDeSanidade = 55;
var pontosDeSanidadeRestantes = 0;
var elementoPontosDeSanidade = document.getElementById("pontosDeSanidade");

function Sortear(){
    numeroSecreto = parseInt(Math.random() * 11);
}

function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);

    if(chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Você deve chutar um número de 0 a 10. O mestre vai deixar você chutar novamente sem penalidades."
    } else if(chute == numeroSecreto){
        pontosDeSanidadeRestantes = pontosDeSanidade + chute;
        elementoResultado.innerHTML = "Você acertou! Ganhou " + chute + " pontos de sanidade. <p>Tentativas restantes: " + tentativas + "</p>";
        elementoPontosDeSanidade.innerHTML = "Pontos de sanidade: " + pontosDeSanidadeRestantes;
    } else {
        --tentativas;
        if(chute > numeroSecreto){
            elementoResultado.innerHTML = "Você errou, perdendo " + chute + " pontos de sanidade. O número que você procura é menor do que o seu chute. Tente novamente. <p>Tentativas restantes: " + tentativas + "</p>";
        } else {
            elementoResultado.innerHTML = "Você errou, perdendo " + chute + " pontos de sanidade. O número que você procura é maior do que o seu chute. Tente novamente. <p>Tentativas restantes: " + tentativas + "</p>";
        }

        pontosDeSanidade = pontosDeSanidade - chute;
        pontosDeSanidadeRestantes = pontosDeSanidade;
        elementoPontosDeSanidade.innerHTML = "Pontos de Sanidade: " + pontosDeSanidadeRestantes;
    } 
    
    if(tentativas == 0){
        elementoResultado.innerHTML = "Seu número de tentativas acabou. Você enlouqueceu. <p>O número secreto é: " + numeroSecreto + "</p>";
    }
}

function JogarNovamente() {
    Sortear();
    tentativas = 5;
    pontosDeSanidade = 55;
    elementoResultado.innerHTML = "Novo jogo. Suas tentativas e sanidade estão restauradas! <p>Número de tentativas: " + tentativas + "</p>";
    elementoPontosDeSanidade.innerHTML = "Pontos de sanidade: " + pontosDeSanidade;
}
//CÓDIGO DE APRENDIZADO


var numeroProvas, cont, media, push, total, nota, varlor, error;


function Diario() {

   const nome = document.getElementById('NomeAluno').value;
   const numeroProvas = parseInt(document.getElementById('NumProvas').value);

    console.log(nome);
    console.log(numeroProvas);

    if (!nome) {
        alert("Informe o nome do Aluno !!!")
    }
    else{

    cont = 0
    total = 0
    nota = []
   
    
    while (cont < numeroProvas ) {

        valor = ((prompt("Escreva a nota(%) do aluno para a prova "+(cont+1)+":")));
        if( isNaN(valor) == true ){
            alert("ERROR:\nEste campo aceita apenas números.\nTente Novamente!");
            error = 1;
        }
        else{
        nota.push(parseInt(valor));
        console.log(parseInt(valor));
        total = total + nota[cont];
        cont ++;
        }

    }

    media = total/numeroProvas

    if (media >= 60) {
        aprovacao = "Aprovado!"
    } else {
        aprovacao = "Reprovado!"
    }
    
    document.getElementById('nomes').innerHTML = nome;
    document.getElementById('medias').innerHTML = media;
    document.getElementById('notas').innerHTML = nota;
    document.getElementById('aprovacao').innerHTML = aprovacao;
    }
}



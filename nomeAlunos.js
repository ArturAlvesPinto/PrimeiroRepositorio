//declara variaveis
var nota, nome, quantidadeAlunos, cont, media, push, total, lista, numeroProvas;


quantidadeAlunos = parseInt(prompt("Escreva o numero de alunos:"))
numeroProvas = parseInt(prompt("Informe o número de provas:"))

if (quantidadeAlunos == 0 || quantidadeAlunos =="") {
    alert("Atenção!!! Informe um numero de alunos!!!")
    }

else if (quantidadeAlunos == 0 || quantidadeAlunos ==""){
    alert("Número de provas em branco !!!")
    }

else {
    cont = 0
    nome = ["zero"]
    nota = [0]
    total = [0]
    media = ["zero"]
    
    while (cont < quantidadeAlunos) {
        cont = cont + 1;
        //nome = ;
        nome.push(prompt("Escreva o nome do aluno"+cont+":"))

        //nota = ;
        nota.push(parseInt(prompt("Escreva a nota do aluno"+cont+":")))

        total += nota[cont]

        if (nota[cont] >= 60) {
            media.push("Aprovado!")
        } else {
            media.push("Reprovado!")
        }}

    lista = [[nome],[nota],[media]]

    x = total/cont;

    document.getElementById("Paragrafo").innerText = console.table(lista)
    document.getElementById("Paragrafo1").innerText = "A media da turma foi:" + x

}




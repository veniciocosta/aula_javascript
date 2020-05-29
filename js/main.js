//alert("meu primeiro alerta")
/*
var nome = prompt("Digite seu nome")
var sobrenome = prompt("Digite seu sobrenome")
alert(nome + " " + sobrenome)
alert("Agora vamos substituir seu sobre nome e deixar tudo miúsculo")
alert(nome.toUpperCase() + " " + sobrenome.replace(sobrenome,"Mudei Seu Sobrenome").toUpperCase())
*/

function primeira_acao()
{
    alert("Você clicou")
}

function passou_mouse(elemento)
{
    elemento    
}

/*
var contador
for(contador=0;contador<=5;contador++)
{
    alert(contador)
}
*/
/*
var lista = ["Maçã", "Pêra", "Laranja"]
alert(lista[0])
alert(lista)
alert("Agora vamos adicionar um item novo na lista")
lista.push("Uva")
alert(lista)
alert("Agora vamos retirar a maçã")
lista.pop(lista.reverse())
alert(lista)
alert("A lista tem:" + (lista.length) + " itens")
*/

/*
var cesta_frutas = [{Nome: "Maçã", Quantidade: 1 },{Nome: "Laranja", Quantidade: 3},{Nome: "Abacaxi", Quantidade: 5}]
alert(cesta_frutas[1].Nome + " " + cesta_frutas[1].Quantidade)
*/

/*
var idade = prompt("Qual sua idade?")
if(idade<18)
{
    alert("menor de idade")
}
else
{
    alert("maior de idade")
}
*/


function teste_idade(idade){
    var resposta
    idade=prompt("Qual sua idade?")

    if (idade>=18)
    {
        alert("maior de idade")
    }
    else
    {
        alert("menor de idade")
    }

}
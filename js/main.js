//alert("meu primeiro alerta")
/*
var nome = prompt("Digite seu nome")
var sobrenome = prompt("Digite seu sobrenome")
alert(nome + " " + sobrenome)
alert("Agora vamos substituir seu sobre nome e deixar tudo miúsculo")
alert(nome.toUpperCase() + " " + sobrenome.replace(sobrenome,"Mudei Seu Sobrenome").toUpperCase())
*/


/*
function minhaSoma(num1,num2){
    return num1 + num2
}

alert(minhaSoma(10,5))
*/

function primeira_acao()
{
    alert("Você clicou")
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

/*
function teste_idade(idade){

    if (idade>=18)
    {
        return "maior de idade"
    }
    else
    {
        return "menor de idade"
    }

}
*/

//alert(teste_idade(prompt("Qual sua idades?")))


function extrairData(elemento)
{
    //var datacompleta =  new Date()
    //var resposta
    
    /*
    if (elemento.value = "1")
    {
        resposta = datacompleta.getDate()
    }
    
    if (elemento.value = "2")
    {
        resposta = datacompleta.getMonth()+1
    }
    if (elemento.value = "3")
    {
        resposta = datacompleta.getFullYear()
    }
    if (elemento.value = "4")
    {
        resposta = datacompleta.getDay()
    }
    */
    document.getElementById("dataEscolha").innerText = elemento.value
    
    //document.getElementById("dataEscolha").innerText=
}

function elementoID() {
    alert(document.getElementById("btnTeste"))
    alert("Repare que o nome do botão irá mudar")
    document.getElementById("btnTeste").innerText = "Mudou"
    //alert("Repare que o nome do botão irá retornar")
    //document.getElementById("btnTeste").innerText = "Clique aqui"
}


function passou_mouse(elemento){
    elemento.innerHTML = "<b> Passou o mouse </b>"
}

function tirou_mouse(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    document.getElementById("textodois").innerText="Passe o mouse aqui também"
}

function outroSite(){
    window.open("https://www.google.com")
}
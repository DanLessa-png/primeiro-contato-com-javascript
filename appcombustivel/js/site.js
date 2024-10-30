const distancia=document.querySelector("#Distancia")
const consumo=document.querySelector("#consumo")
const preço=document.querySelector("#preço_combustivel")
const resultado=document.querySelector("#resultado")
const botao=document.querySelector('#botao')

botao.addEventListener('click',viagem)

function viagem(){
    d=Number( distancia.value)
    p=Number(preço.value)
    c=Number(consumo.value)
calculo=(d/c)*p

resultado.textContent=`Considerando os dados informados,\nA sua viagem vai custar R$${calculo.toFixed()}`
}
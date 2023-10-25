const form = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')
const peso = form.querySelector('#peso')
const altura = form.querySelector('#altura')

form.addEventListener('submit', function(event){
  event.preventDefault()

  let info = []

  info.push({
    peso: peso.value,
    altura: altura.value,
  })

  resultado.innerHTML = ''

  console.log(info)

  const imc = getImc(peso.value, altura.value)
  console.log(imc)

  Timc(imc)

});



function getImc(peso, altura){
  const imc = peso / altura **2
  return imc.toFixed(2)
}


function Timc(msg){
  if (msg < 18.5){
    resultado.innerHTML = 'Abaixo do peso'
  }
  if(msg >= 18.5){
    resultado.innerHTML = 'Peso normal'
  }
  if(msg >= 25){
    resultado.innerHTML = 'Sobrepeso'
  }
  if(msg >= 30) {
    resultado.innerHTML = 'Obesidade grau 1'
  }
  if(msg >= 35) {
    resultado.innerHTML = 'Obesidade grau 2'
  }
  if(msg >= 40) {
    resultado.innerHTML = 'Obesidade grau 3'
  }
  
}
const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')
const imcFinal = document.querySelector('#imc')
const imagem = document.querySelector('#foto')


botao.addEventListener('click',()=>{

    event.preventDefault()
   
 
        const imc = peso.value/(altura.value**2)


        imcFinal.value = imc.toFixed(2)

        if(imc<18.5){
            resultado.innerHTML = `Sr(a) ${nome.value} a sua situação é de magreza extrema`
            imagem.src ="image/magro.png"
        }else if(imc>=18.5 && imc<25){
            resultado.innerHTML =  `Sr(a) ${nome.value} a sua situação é de IMC perfeito parabens`
            imagem.src ="image/musculo.png"
        }else if(imc>=25 && imc<30){
            resultado.innerHTML =  `Sr(a) ${nome.value} a sua situação é sobrepeso`
            imagem.src ="image/obesidade.png"
        }else{
            resultado.innerHTML = `Sr(a) ${nome.value} a sua situação é de Obesidade`
            imagem.src ="image/morbida.png"
        }


   
       
   
})
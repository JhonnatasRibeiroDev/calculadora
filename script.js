var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var res = document.getElementById('res')
    var sinais = document.getElementById('sinais')
    var soma = null
function clicar() {
    
    var sinal = sinais.options[sinais.selectedIndex].value
    if (sinal == '+') {
         soma = Number(num1.value) + Number(num2.value)
        res.innerText=(soma)
    }else if (sinal == '-') {
       soma = (Number(num1.value) - Number(num2.value))
       res.innerText=(soma)
    }else if (sinal == 'x') {
         soma = Number(num1.value) * Number(num2.value)
         res.innerText=(soma)
    }
    else if (sinal == '/') {
       soma = Number(num1.value) / Number(num2.value)
       res.innerText=(soma)
    }else{
        res.innerHTML='Digite um sinal'
    }

    num1.value=''
    num2.value=''
    
}
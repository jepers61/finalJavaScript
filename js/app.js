var num1
var num2
var operador
var numero
var cont

function Calculadora() {
  var fin = 0
  var unpunto = 0
  //var sign = 0
  var resultado = document.getElementById('display')
  var reset = document.getElementById('on')
  var signo = document.getElementById('sign')
  var igual = document.getElementById('igual')
  var suma = document.getElementById('mas')
  var resta = document.getElementById('menos')
  var multiplica = document.getElementById('por')
  var divide = document.getElementById('dividido')
  var punto = document.getElementById('punto')
  var cero = document.getElementById('0')
  var nueve = document.getElementById('9')
  var ocho = document.getElementById('8')
  var siete = document.getElementById('7')
  var seis = document.getElementById('6')
  var cinco = document.getElementById('5')
  var cuatro = document.getElementById('4')
  var tres = document.getElementById('3')
  var dos = document.getElementById('2')
  var uno = document.getElementById('1')

  signo.onclick = function(e){
    //if(sign==0){
      if(resultado.textContent != "0"){
        if(resultado.textContent < "0"){
          resultado.textContent = resultado.textContent * -1
        }else{
          resultado.textContent = "-" + resultado.textContent
          //sign = 1
        }
      }
      if(resultado.textContent.length>8){
        var viejo = resultado.textContent
        var nuevo = viejo.slice(0,8)
        resultado.textContent = nuevo
      }
  }

  punto.onclick = function(e){
    if(unpunto==0){
      if(resultado.textContent == "0"){
        resultado.textContent = "0."
      }else if(fin==1){
        resultado.textContent = "0."
        fin = 0
      }else{
        resultado.textContent = resultado.textContent + "."
      }
      unpunto = 1
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  uno.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "1"
    }else if(fin==1){
      resultado.textContent = "1"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "1"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  dos.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "2"
    }else if(fin==1){
      resultado.textContent = "2"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "2"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  tres.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "3"
    }else if(fin==1){
      resultado.textContent = "3"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "3"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  cuatro.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "4"
    }else if(fin==1){
      resultado.textContent = "4"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "4"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  cinco.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "5"
    }else if(fin==1){
      resultado.textContent = "5"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "5"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  seis.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "6"
    }else if(fin==1){
      resultado.textContent = "6"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "6"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  siete.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "7"
    }else if(fin==1){
      resultado.textContent = "7"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "7"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  ocho.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "8"
    }else if(fin==1){
      resultado.textContent = "8"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "8"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  nueve.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "9"
    }else if(fin==1){
      resultado.textContent = "9"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "9"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  cero.onclick = function(e){
    if(resultado.textContent == "0"){
      resultado.textContent = "0"
    }else if(fin==1){
      resultado.textContent = "0"
      fin = 0
    }else{
      resultado.textContent = resultado.textContent + "0"
    }
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
  }

  reset.onclick = function(e){
    resetear()
  }

  suma.onclick = function(e){
    num1 = resultado.textContent
    largo(num1)
    operador = "+"
    limpiar()
  }

  resta.onclick = function(e){
    num1 = resultado.textContent
    largo(num1)
    operador = "-"
    limpiar()
  }

  multiplica.onclick = function(e){
    num1 = resultado.textContent
    largo(num1)
    operador = "*"
    limpiar()
  }

  divide.onclick = function(e){
    num1 = resultado.textContent
    largo(num1)
    operador = "/"
    limpiar()
  }

  igual.onclick = function(e){
    num2 = resultado.textContent
    largo(num2)
    resolver()
  }

  function limpiar(){
    resultado.textContent = ""
    unpunto = 0
    //sign = 0
  }

  function resetear(){
    resultado.textContent = "0"
    num1 = 0
    num2 = 0
    operador = ""
    unpunto = 0
    //sign = 0
  }

  function resolver(){
    var total = 0
    switch (operador) {
      case "+":
        total = parseFloat(num1) + parseFloat(num2)
        break;
      case "-":
        total = parseFloat(num1) - parseFloat(num2)
        break;
      case "*":
        total = parseFloat(num1) * parseFloat(num2)
        break;
      case "/":
        total = parseFloat(num1) / parseFloat(num2)
        break;
    }
    //resetear()
    resultado.textContent = total
    if(resultado.textContent.length>8){
      var viejo = resultado.textContent
      var nuevo = viejo.slice(0,8)
      resultado.textContent = nuevo
    }
    fin = 1
    unpunto = 0
    //sign = 0
  }

  function largo(numero){
    if(numero.length>8){
      var viejo = numero
      var nuevo = viejo.slice(0,8)
      numero = nuevo
      return numero
    }
  }
}

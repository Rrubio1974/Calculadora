console.log("funcionando");

//Declaramos variables nuevas:
var operandoa;
var operandob;
var operacion;

function init(){
    //Variables de las id del HTML:
    var resultado = document.getElementById('resultado');//Muestra el resultado:

    //1ra parte linea de la calculadora:
    var reset = document.getElementById('reset');
    var raizcuadrada = document.getElementById('raizcuadrada');
    var potencia = document.getElementById('potencia');
    var division = document.getElementById('division');

    //2da parte linea de la calculadora:
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var multiplicacion = document.getElementById('multiplicacion');

    //3ra parte linea de la calculadora:
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var resta = document.getElementById('resta');

    //4ta parte linea de la calculadora:
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var suma = document.getElementById('suma');

    //5ta parte linea de la calculadora
    var masmenos = document.getElementById('masmenos');
    var cero = document.getElementById('cero');
    var punto =document.getElementById('punto');
    var igual = document.getElementById('igual');

}

  //Eventos de click numeros:
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}

dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}

tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}

cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}

cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}

seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}

siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}

ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}

nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}

cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}

    //Eventos click operadores matematicos:
reset.onclick = function(e){
    resetear();
}

suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}

resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}

multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}

division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}

raizcuadrada.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "√";
    limpiar();
}

potencia.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "^";
    limpiar();
}

punto.onclick = function(e) {
    resultado.textContent = resultado.textContent + ".";
    if (!isNaN(resultado.textContent)){
        resultado.textContent;
    } else {
        if(resultado.textContent){
            resultado.textContent = ".";
        }else{
            resultado.textContent = "error";
        }
    }
}


igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}

//Funciones de las operaciones:
function limpiar(){
    resultado.textContent = "";
  }
  
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }

  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;

      case "√":
        res = Math.sqrt(operandoa);
        break;
        
      case "^":
        res = parseFloat(operandoa) ** parseFloat(operandob);
        break;

      case ".":
        res = parseFloat(operandoa) . parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
  }

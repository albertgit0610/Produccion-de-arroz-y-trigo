function calcularProduccion() {
    var trigo = parseInt(document.getElementById("trigo").value);
    var dia = document.getElementById("dia").value;
    var arroz = 0;
  
    switch (dia) {
      case "lunes":
        arroz = trigo * 3;
        break;
      case "martes":
        arroz = trigo / 2;
        break;
      case "miercoles":
        arroz = trigo / 4;
        break;
      case "jueves":
        arroz = trigo / 3;
        break;
      case "viernes":
        arroz = trigo * 5;
        break;
      case "sabado":
        arroz = (trigo * 3) * 7;
        break;
      case "domingo":
        arroz = ((trigo * 3) * 7) * 0.9;
        break;
      default:
        break;
    }
  
    document.getElementById("resultado").innerHTML = `La cantidad de arroz prodicida fue de ${arroz} toneladas`
  }
  
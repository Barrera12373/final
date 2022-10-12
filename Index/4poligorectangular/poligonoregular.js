function ObtenerP(){
    var perimetroResultado = document.getElementById("perimetroResultado");
    var n = parseInt(document.getElementById("nlado").value);
    var lb = parseInt(document.getElementById("ladob").value);
    
    var perimetro=(n*lb);
  
    perimetroResultado.innerHTML = "" + perimetro;
  }

  function ObtenerA(){
    var areaResultado = document.getElementById("areaResultado");
    var a = parseInt(document.getElementById("apotema").value);
    var p = parseInt(document.getElementById("perimetro").value);
    
    var area=(p*a)/2;
  
    areaResultado.innerHTML = "" + area;
  }
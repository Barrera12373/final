function Obtener(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var b = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);
    
  
    var area = (b * h);
    var perimetro=(2*h)+(2+b);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
function Obtener(){
    var areaResultado = document.getElementById("areaResultado");
    var perimetroResultado = document.getElementById("perimetroResultado");
    var la = parseInt(document.getElementById("ladoa").value);
    var lb = parseInt(document.getElementById("ladob").value);
    var h = parseInt(document.getElementById("altura").value);
    
  
    var area = (lb*h);
    var perimetro=2*(la+lb);
  
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
  }
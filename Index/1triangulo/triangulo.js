function Obtener(){
  var areaResultado = document.getElementById("areaResultado");
  var perimetroResultado = document.getElementById("perimetroResultado");
  var b = parseInt(document.getElementById("base").value);
  var h = parseInt(document.getElementById("altura").value);
  var la = parseInt(document.getElementById("ladoa").value);
  var lb = parseInt(document.getElementById("ladob").value);
  var lc = parseInt(document.getElementById("ladoc").value);
  

  var area = (b * h) / 2;
  var perimetro=(la+lb+lc);

  areaResultado.innerHTML = "" + area;
  perimetroResultado.innerHTML = "" + perimetro;
}
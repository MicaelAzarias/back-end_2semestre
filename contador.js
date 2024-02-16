var contador = 0;

setInterval(function() {
  contador++;
  document.getElementById('contador').innerHTML = contador;
}, 1000);

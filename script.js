function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado-imc');

  if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
    resultado.innerHTML = "Por favor, insira valores válidos.";
    resultado.style.color = "#ff3e3e";
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(1);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> (${classificacao}).`;
  resultado.style.color = "#4CAF50";
}

//centigrados -> farenheit: (centigrados*9/5)+32
//centigrados -> kelvin: centigrados + 273.15

const input = document.getElementById('ingresoCentigrados');
const button = document.getElementById('btnConvertir');

button.addEventListener('click', function() {
  const valor = input.value.trim();
  const centigrados = parseFloat(valor); //parseFloat convierte string en número
  if (Valor = isNaN ){
    console.log("no ingreses texto, ingresa un numero por favor");
  }
  const fahrenheit = (centigrados * 9/5) + 32;
  const kelvin = centigrados + 273.15;
  console.log(`Temperatura en Fahrenheit: ${fahrenheit} °F`);
  console.log(`Temperatura en Kelvin: ${kelvin} K`);
});
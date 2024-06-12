/**Gabriela Céspedes */
/**Cuando el usuario haga clic en una ciudad, muestra una alerta.
Al hacer clic en "Aceptar", se descartará el mensaje de política de cookies.
Convierte las temperaturas cuando se cambie la selección. */

function alerta(){
    alert("Loading weather report...");
}
function removeMessage(elemet){
    elemet.remove(elemet);
    
    
}
//funciones para cambiar las unidades de medida de las temperaturas
function celsiusAFahrenheit(celsius) {
    let fahrenheit = Math.round((celsius * 9/5) + 32);
    return fahrenheit;
}

function fahrenheitACelsius(fahrenheit) {
    let celsius = Math.round((fahrenheit - 32) * 5/9);
    return celsius;
}

// Función para cambiar una temperatura
function cambiarUnaTemp(element, unit) {
    var currentTemp = parseFloat(element.textContent);
    var newTemp;

    if (unit === 'F' && element.textContent.includes('°C')) {
        newTemp = celsiusAFahrenheit(currentTemp);
        element.textContent = newTemp.toFixed(1) + '°F';
    } else if (unit === 'C' && element.textContent.includes('°F')) {
        newTemp = fahrenheitACelsius(currentTemp);
        element.textContent = newTemp.toFixed(1) + '°C';
    }
}
function cambiarTemp(selectElement) {
    // Obtiene el valor seleccionado C o F
    var unit = selectElement.value;

    // Obtiene todos los elementos de temperatura máxima y mínima
    var tempMaxElements = document.getElementsByClassName('temp-max');
    var tempMinElements = document.getElementsByClassName('temp-min');

    // Cambiar todas las temperaturas máximas
    for (var i = 0; i < tempMaxElements.length; i++) {
        cambiarUnaTemp(tempMaxElements[i], unit);
    }

    // Cambiar todas las temperaturas mínimas
    for (var j = 0; j < tempMinElements.length; j++) {
        cambiarUnaTemp(tempMinElements[j], unit);
    }
}

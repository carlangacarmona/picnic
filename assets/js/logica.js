function evaluarPicnic() {
    // Preguntamos la temperatura
    var temperatura = prompt("¿Cuál es la temperatura actual?");
    temperatura = Number(temperatura); // Convertimos a número, pero sin validaciones adicionales

    // Preguntamos cuánto tiempo libre tiene
    var tiempoLibre = prompt("¿Cuántos minutos libres tienes?");
    tiempoLibre = Number(tiempoLibre); // Convertimos a número, sin validación

    // Preguntamos si está lloviendo
    var lluvia = prompt("¿Está lloviendo? Responde 'sí' o 'no'");

    // Chequeamos si es buen momento para un picnic
    if (temperatura >= 12 && temperatura <= 30) {
        if (lluvia.toLowerCase() === 'no') {
            if (tiempoLibre > 90) {
                alert("¡Es un buen momento para un picnic!");
            } else {
                alert("No tienes suficiente tiempo libre.");
            }
        } else {
            alert("Está lloviendo, no es buen momento para un picnic.");
        }
    } else {
        alert("La temperatura no es adecuada para un picnic.");
    }
}


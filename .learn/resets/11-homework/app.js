// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// Definimos el objeto con las tasas de conversión
const oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07,  // Dólar estadounidense
    "GBP": 0.87   // Libra esterlina
};

// Función para convertir de Dólares a Yenes
const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs["USD"]; // Convertimos de USD a EUR
    return euros * oneEuroIs["JPY"]; // Convertimos de EUR a JPY
};

// Función para convertir de Yenes a Libras
const fromYenToPound = (yens) => {
    const euros = yens / oneEuroIs["JPY"]; // Convertimos de JPY a EUR
    return euros * oneEuroIs["GBP"]; // Convertimos de EUR a GBP
};

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
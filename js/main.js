// Creación variables (no cambian, entonces constantes)
// Localización de los elementos en HTML mediante su Id
const input = document.getElementById('input');
const sumar = document.getElementById('sumar');
const resolver = document.getElementById('resolver');
let total = 0;

// creación de la función que realiza la suma de los números ingresados por el usuario y los almacena en la variable total
sumar.addEventListener("click", function () {
    const valor = parseInt(input.value);
    total += valor;
    input.value = '';
});

// Creación de la función Mostrar resultado de la suma y restablecer la calculadora para una nueva suma
resolver.addEventListener("click", function(){
    input.value = total;
    total = 0;
})


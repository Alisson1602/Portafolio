let numeroIngresadoStr = 0; // Let -> Varía su valor
let enOperacion = false; // Flags

function digitoOnClick(numero)
{
    const input = document.getElementById("txt_numeros");

    if(input.value=="0" || enOperacion)
    {
        input.value = numero;
        enOperacion = false;
    }
    else
    {
        input.value += numero; // Concatena valores
    }
}

function operacionOnClick(tipoOperacion)
{
    const input = document.getElementById("txt_numeros");
    if(tipoOperacion=="C")
    { 
        input.value="0";
    }
    else if(tipoOperacion=="+")
    {
        numeroIngresadoStr = input.value;
        enOperacion = true;
    }
    else if(tipoOperacion=="=")
    {
        const resultado = parseInt(input.value) + parseInt(numeroIngresadoStr);
        input.value = resultado;
    }
}
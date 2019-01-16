function calculoMonto(){
    var a = parseInt(document.querySelector("#ingreso").value);
    document.querySelector("#monto").value;
    document.querySelector("#show").innerHTML = a;
}
function dolarApeso(){
    var a = parseInt(document.querySelector("#ingresoDolar").value);
    document.querySelector("#conversion").value;


    var dolar = "37.41" // 1 dolar = 37.41 pesos
    var conversion;
    conversion = dolar * a;

    document.querySelector("#valorPesos").innerHTML = conversion;
}
let resultado = document.getElementById("resultado");
let botones = document.getElementsByTagName("button");
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className != "operadores")
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", pintar2)
    }
}

function pintar(e) {
    console.log(e.target.innerText);
    resultado.value += e.target.innerText;
}
//ññ

let prm1;
let operacion = ""; 

function pintar2(e) {
    console.log(e.target.innerText);
    const botonPresionado = e.target.innerText;

    if (botonPresionado === "=") {
        calcular(); 
    } else if (botonPresionado === "C") {
        resultado.value = ""; 
        prm1 = "";
        operacion = "";
    } else {
        prm1 = resultado.value;
        operacion = botonPresionado;
        resultado.value = "";
    }
}

function calcular() {
    let prm2 = resultado.value;
    let r = 0;
    
    let n1 = parseFloat(prm1);
    let n2 = parseFloat(prm2);

    switch(operacion) {
        case "+":
            r = n1 + n2;
            break;
        case "-":
            r = n1 - n2;
            break;
        case "x": 
            r = n1 * n2;
            break;
        case "/":
            r = n2 !== 0 ? n1 / n2 : "Error";
            break;
    }
    
    resultado.value = r;
}

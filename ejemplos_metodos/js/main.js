
//Ejemplo de document.getElementById(id)
function mostrar_cambios(){
    const ejemplo = document.getElementById("ejemplo1");//asigna el valor de lo que hay en id a una variable.
    ejemplo.style.color = "#2bc";
    document.getElementById("ejemplo2").innerHTML = "Hola, ya no estoy en inglés";//o modifica con un método
    //Siempre retorna un valor; aunque no exista el elemento, en este caso retorna null
    //Si hay dos elementos con el mismo id, el método retorna el primero
};
function revertir(){
    const ejemplo = document.getElementById("ejemplo1");
    ejemplo.style.color = "#111";
    document.getElementById("ejemplo2").innerHTML = "hi how are you";
}
function escr_input() {
    const input_1 = document.getElementById("ej_input_1").value;
    alert(input_1);
}

//Ejemplo de element.getElementsByTagName(name)
function cambiar(){
    const lista = document.getElementsByTagName("UL")[0];
    lista.getElementsByTagName("li")[0].innerHTML = "leche";
}
//retorna una colección de elementos hijos con una etiqueta dada;
//retorna una lista de nodos

//Ejemplo de document.createElement(name), Ejemplo de parentNode.appendChild(node) y element.innerHTML
function crearelement(){
    const elemparraf = document.createElement("p");//se crea el elemento p
    elemparraf.innerText = "se creo el elemento p";//el innerText le modifica el contenido de texto interno
    document.body.appendChild(elemparraf);//el appendChild agrega lo anteriormente creado al dom
}

//Ejemplo de element.style.left
function moverIzq(){
    document.getElementById("styleLeft").style.left = "30px";
};
function moverDer(){
    document.getElementById("styleLeft").style.left = "-30px";
}


//ejemplo de element.setAttribute
function set_attribute(){
    document.getElementById("txt_link").setAttribute("href", "https://github.com/Davi1705/ws-algoritmos");
}

//ejemplo de element.element.getAttribute 
function get_attribute(){
    const atributo = document.getElementById("atributo");
    let link = atributo.getAttribute("href");
    alert(link);
}

//ejemplo de element.addEventListener 
const boton8 = document.getElementById("btn8");
boton8.addEventListener("mouseover", function() {
    this.style.backgroundColor = "red";
});
boton8.addEventListener("click", function(){
    document.getElementById("txt").innerHTML += "perdiste<br>"
});
boton8.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white";
});

//Ejemplo de window.scrollTo 
const btn_9 = document.getElementById("btn9");
btn_9.addEventListener("click", function() {
    window.scrollTo(0,0);
});

//ejemplo de setTimeOut
function esperar(){
    timeout = setTimeout(alertf(), "3000");
};
function alertf(){
    alert("Sorpresa");
};

//Ejemplo de setInterval
setInterval(mitempo(), "1000");
function mitempo(){
    const date = new Date();
    document.getElementById("interval").innerHTM = date.toLocaleTimeString();
};

//Ejemplo de confirm
function confirm_f(){
    confirm("Press a button!");
};

//Ejemplo de Arreglos: ForEach()
let sum = 0;

const numeros = [2,5,6,8,8];
numeros.forEach(sumatoria);

function sumatoria(item){
    sum += item;
}
document.getElementById("sum").innerHTML = sum;
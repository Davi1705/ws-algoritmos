
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
//retorna una colección de elementos hijos con una etiqueta dada;
//retorna una lista de nodos
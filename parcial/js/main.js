// let cantEstudiantes = prompt("cuántos estudiantes son?");
let estudiantes = [];
let notas = [];
let i = 0;
const btnGuardar = document.getElementById("btn_guardar");
// for (var i = 0; i < cantEstudiantes; i++){
//     estnteudias[i]=prompt("nombre del estudiante");
//     notas[i]=prompt(`nota de ${estudiantes[i]}`);
// };

btnGuardar.addEventListener("click", function (){
    let nombre = document.getElementById("nombre").value;
    let nota = document.getElementById("nota").value;
    estudiantes[i]=nombre;
    notas[i]=nota;
    i++;
});

function notaAlta(notas){
    let len = notas.length;
    let max = -Infinity;
    while (len--) {
        if (notas[len] > max) {
        max = notas[len];
        };
    };
    return max;
};

function seRepite(notas, notaM, estud){
    let estudM=[];
    let j = 0;
    for (let i in notas) {
        if (notas[i]==notaM) {
            estudM[j]=estud[i];
            j++;
        };
    };
    return estudM;
};


let notaMayor = notaAlta(notas);
let estudiantesMayor = seRepite(notas, notaMayor, estudiantes);
alert(`la nota mas alta es ${notaMayor}, y la nota fue obtenida ${estudiantesMayor.length} 
veces por los estudiantes ${estudiantesMayor} del curso`);

function buscarEstudiant(nombre, estudiantes, notas) {
    estudiantes.forEach(function(value){
        var notaE = 0;
        if (value == nombre) {
            notas.forEach(function(nota){
                if (notas.indexOf(nota) == estudiantes.indexOf(nombre)){
                    notaE = nota;
                }
            })
            alert(`Encontrado: nombre: ${nombre} y su nota es: ${notaE}`);
        }else if(value != nombre){
            alert(`No se encuentra el estudiante de nombre: ${nombre}`);
        };
    });
};
const btnBuscar = document.getElementById("btn_buscar")
btnBuscar.addEventListener("click", buscarEstudiant(prompt("escriba el nombre del estudiante"), estudiantes, notas));

function sumar(notas){
    let initialValue = 0;
    let sumWithInitial = parseInt(notas.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    ));
    return sumWithInitial;
}

function prom(notas){
    let suma = sumar(notas);
    let promedio = parseInt(suma) / parseInt(notas.length);
    alert(promedio);
};

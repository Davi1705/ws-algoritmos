"use strict";

const descBtn = document.getElementById("btn_descuento");
const pagoBtn = document.getElementById("btn_pago");
const formCant = document.getElementById("form_cant");
const eliminarBtn = document.getElementById("btn_eliminar");
let compras = [0,0,0,0];
const udsHuevo = document.getElementById("uds_huevo");
const udsLeche = document.getElementById("uds_leche");
const udsPan = document.getElementById("uds_pan");
const udsFruta = document.getElementById("uds_fruta");
//Descuento
let band = true;
let desc;
const descuento=()=>{
    if (band){
        desc = Math.round(Math.random()*100);
        alert(`Felicidades, tienes un descuento de ${desc}%`);
        band=false;
    } else {
        alert(`El descuento ya ha sido redimido y fue de ${desc}%`);
    }
}
descBtn.addEventListener("click",descuento);


//Comprar
let huevoCant;
let lecheCant;
let panCant;
let frutaCant;
let filas = 0;
let precio = 0;
let precioTot = 0;
var i = 0;
let restHuevo=30;
let restLeche=20;
let restPan=50;
let restFruta=50;

function actualizarTabla(prod, prodCant, precio, pos) {
    let carritoTabla = document.getElementById("carrito_tabla");
    if (prodCant != "") {
        let carritoRow = carritoTabla.insertRow(-1);
        let carritoCell = carritoRow.insertCell(0);
        carritoCell.textContent = prod;
        carritoCell = carritoRow.insertCell(1);
        carritoCell.textContent = prodCant;
        carritoCell = carritoRow.insertCell(2);
        carritoCell.textContent = prodCant*precio;
        filas = filas + 1;
        compras[pos] = compras[pos]+(prodCant*precio);
        switch (prod){
            case 'huevo':
                restHuevo = restHuevo-prodCant;
                udsHuevo.innerHTML=`${(restHuevo)} Canastas`;
                break;
            case 'leche':
                restLeche = restLeche-prodCant;
                udsLeche.innerHTML=`${(restLeche)} Unidades`;
                break;
            case 'pan':
                restPan = restPan-prodCant;
                udsPan.innerHTML=`${(restPan)} Unidades`;
                break;
            case 'fruta':
                restFruta = restFruta-prodCant;
                udsFruta.innerHTML=`${(restFruta)} Unidades`;
                break;  
        }
    }
}
//boton
formCant.addEventListener("submit",function(e) {
    event.preventDefault();    
    //
    let cantFormData = new FormData(formCant);
    huevoCant = cantFormData.get("cant_huevo");
    
    lecheCant = cantFormData.get("cant_leche");
    
    panCant = cantFormData.get("cant_pan");
    
    frutaCant = cantFormData.get("cant_fruta");
    
    //huevo
    actualizarTabla("huevo", huevoCant, 15000, 0);
    //leche
    actualizarTabla("leche", lecheCant, 3500, 1);
    //Pan
    actualizarTabla("pan", panCant, 2000, 2);
    //Fruta
    actualizarTabla("fruta", frutaCant,5000, 3);

    //vaciar campos
    document.getElementById("cant_huevo").value = "";
    document.getElementById("cant_leche").value = "";
    document.getElementById("cant_pan").value = "";
    document.getElementById("cant_fruta").value = "";
    precio=0;
    for (let i = 0; i <= 3; i++) {
        precio = compras[i] + precio;
    };
    precioTot = precio - (precio*(desc/100));
    console.log(precio);
    console.log(precioTot);
    console.log(compras[2]);
});

//eliminar
function eliminarFila() {
    let carritoTabla = document.getElementById("carrito_tabla");
    if (filas != 0){
        carritoTabla.deleteRow(-1);
        filas = filas - 1;
    }
}
eliminarBtn.addEventListener("click", function(e) {
    eliminarFila();
});

//pagar
pagoBtn.addEventListener("click", function(e) {
    if(filas==0){
        alert("no has comprado nada");
    }else if(desc==undefined){
        alert(`El precio total es de ${precio}, ya que no redimiste el descuento`);
    }else{
        alert(`El precio total es de ${precioTot}, con el descuento de ${desc}% aplicado`);
    };
});
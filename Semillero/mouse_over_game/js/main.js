document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos=0;
var tiempo=30;
var puntosObjetivo=30;

function sumarPuntos(){
 puntos++;
 let ranNum= Math.round(Math.random()*500);//se usa para poder que la bola se mueva de manera aleatoria
 let ranNum2= Math.round(Math.random()*500);
 document.getElementById("player").style.marginTop=ranNum+"px";
 document.getElementById("player").style.marginLeft=ranNum+"px";
 if(puntos==30){
     alert("ganaste");
 }
}

function restarTiempo(){
    tiempo--;
    document.getElementById("time").innerHTML=" Tiempo: "+tiempo+ " ";
    document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+ "/"+puntosObjetivo+"</b>";
    if(tiempo==0){
        alert("Perdiste!");
        tiempo=30;
        puntos=0;
    }
}

setInterval(restarTiempo,500);
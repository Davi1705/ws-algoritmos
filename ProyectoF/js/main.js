"use strict";

import { api_functions as afunc } from "./func_api.js";
let products = [];
let cart = [];

window.onload = getData();
function getData(){
    getProducts();

    const btnBuyCart = document.getElementById("btn_buy-cart");
    btnBuyCart.addEventListener("click",buyCart);

    
    
    const btnAddComb = document.getElementById("btn_add-comb");
    btnAddComb.addEventListener("click",function(){addCart("combo");})
    const btnAddAlmond = document.getElementById("btn_add-almond");
    btnAddAlmond.addEventListener("click",function(){addCart('almond');})
    const btnAddSunfl = document.getElementById("btn_add-sunfl");
    btnAddSunfl.addEventListener("click",function(){addCart("sunfl")})
};

async function getProducts() {
    products = await afunc.getInfo("products");
    console.log(products);
    document.getElementById("amount_comb").innerHTML = `cantidad disponible: ${products[0]['amount']}`;
    document.getElementById("amount_almond").innerHTML = `cantidad disponible: ${products[1]['amount']}`;
    document.getElementById("amount_sunfl").innerHTML = `cantidad disponible: ${products[2]['amount']}`;
}
let i=0;
function updateCart(img, name, price){
    i++;
    const cartTable = document.getElementById("cart_table");
    let newRow = cartTable.insertRow(0);
    let col1 = newRow.insertCell(0);
    let col2 = newRow.insertCell(1);
    let col3 = newRow.insertCell(2);
    let col4= newRow.insertCell(3);
    
    switch (img) {
      case "1":
        col1.innerHTML = `<img src="/ProyectoF/img/combo.jpg" width="70" alt="">`;
        break;
      case "2":
        col1.innerHTML = `<img src="/ProyectoF/img/almendras.jpg" width="70" alt="">`;
        break;
      case "3":
        col1.innerHTML = `<img src="/ProyectoF/img/girasol.jpg" width="70" alt="">`;
        break;
    }
    col2.innerHTML = name;
    col3.innerHTML = price;
    col4.innerHTML = `<a class="delete">delete</a> `;
    col4.addEventListener("click",function(){deleteProdCart(i)});
}
const deleteProdCart = (i)=>{
    const ind = cart.findIndex(x=> x.id == i);
    cart.splice(ind,1);
    event.target.parentNode.parentNode.remove();
}
function addCart(product){  
    
    let amount = prompt("Ingrese la cantidad que desea agregar");
    let id = cart.length;
    switch (product) {
        case "combo":
            cart.push({
                id: id,
                name: "combo dos semillas", 
                amount: amount,
                price: amount*20000,
            })
            updateCart("1", "combo dos semillas", amount * 20000);
        break;
        case "almond":
            cart.push({
                id: id,
                name: "leche de almendras",
                amount: amount,
                price: amount*12000,
            });
            updateCart("2", "leche de almendras", amount * 12000);
        break;
        case "sunfl":
            cart.push({
                id: id,
                name: "leche de girasol",
                amount: amount,
                price: amount*12000,
            });
            updateCart("3", "leche de girasol", amount * 12000);
        break;
        default:
      // code block
    }
    console.log(cart);
}
function buyCart(){
    let cartComb=cart.filter((product) => product.name == "combo dos semillas")
    let combBuys = cartComb.reduce((acum,com)=>{
        return acum + com.amount;
    })
    let combLeft = products[0]['amount']-combBuys;
    if (combLeft<0){
        alert('no se puede realizar el pedido')
    }else{
        let changeComb = {amount:combLeft};
        afunc.changeProd(1,changeComb)
    }
    

    let cartAlmond=cart.filter((product) => product.name == "Leche de almendras")
    let almondBuys = cartAlmond.reduce((acum,com)=>{
        return acum + com.amount;
    })
    let almondLeft = products[1]['amount']-almondBuys;
    if (almondLeft<0){
        alert('no se puede realizar el pedido')
    }else{
        let changeAlmond = {amount:almondLeft};
        afunc.changeProd(2,changeAlmond)
    }
    

    let cartSunfl=cart.filter((product) => product.name == "Leche de girasol")
    let sunflBuys = cartSunfl.reduce((acum,com)=>{
        return acum+com.amount;
    })
    let sunflLeft = products[2]['amount']-sunflBuys;
    if(sunflLeft<0){
        alert('no se puede realizar el pedido')
    }else{
        let changeSunfl = {amount:sunflLeft}
        afunc.changeProd(3,changeSunfl)
    }    
    
}
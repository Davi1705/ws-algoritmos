// Utilizando objetos y guardando datos en localstorage
'use strict';
window.onload = getData();
var products=[];
function getData(){
    const btnAddEnd = document.getElementById("btn_add-end");
    btnAddEnd.addEventListener("click", addProdEnd);

    const btnAddTop = document.getElementById("btn_add-top");
    btnAddTop.addEventListener("click", addProdTop);

    const btnInfo = document.getElementById("btn_info-cat");
    btnInfo.addEventListener("click",prodInfo);

    const btnReduceInvent = document.getElementById("btn_reduce-invent");
    btnReduceInvent.addEventListener("click", reduceInvent);

    const btnIncreaseInvent = document.getElementById("btn_increase-invent");
    btnIncreaseInvent.addEventListener("click", increaseInvent);

    const btnSearch = document.getElementById("btn_search");
    btnSearch.addEventListener("click", searchProd);

    const btnDelete = document.getElementById("btn_delete");
    btnDelete.addEventListener("click", deleteProd);

    const btnList = document.getElementById("btn_list");
    btnList.addEventListener("click", listProds);
};
//agregar el producto en el final
function addProdEnd(){
    const name = document.getElementById("name").value;
    const category = document.getElementById("prod_category").value;
    const price = document.getElementById("price").value;
    const amount = document.getElementById("amount").value;

    if (name == "" || category == "" || price == "" || amount == ""){
        alert("Por favor complete los campos");
    }else{
        let product={
            name:name,
            category:category,
            price:price,
            amount:amount
        }
        products.push(product);
        localStorage.products=JSON.stringify(products);
        alert("El producto se ha guardado");
    }
};
//Agregar el producto en el inicio
function addProdTop(){
    const name = document.getElementById("name").value;
    const category = document.getElementById("prod_category").value;
    const price = document.getElementById("price").value;
    const amount = document.getElementById("amount").value;   
    
    if (name == "" || category == "" || price == "" || amount == ""){
        alert("Por favor complete los campos");
    }else{
    let product={
        name:name,
        category:category,
        price:price,
        amount:amount
    }
    products.unshift(product);
    localStorage.products=JSON.stringify(products);
    alert('El producto se ha guardado');
    }
};

//mostrar la info de cuántos productos hay por categoría, la cantidad total de productos y el valor total de todos los productos que hay en la tienda
function prodInfo(){
    console.log(localStorage.getItem("products"));
    var products1=JSON.parse(localStorage.products);
    console.log(products1);
    if (products1.length > 0){
        let drink = products1.filter((product) => product.category == "drink");
        let amoDrink = 0;
        drink.forEach(product=> amoDrink += parseInt(product.amount));
        
        let food = products1.filter((product) => product.category == "food");
        let amoFood = 0;
        food.forEach((product) => (amoFood += parseInt(product.amount)));
        
        let cleaning = products1.filter((product) => product.category == "cleaning");
        let amoClean = 0;
        cleaning.forEach((product) => (amoClean += parseInt(product.amount)));
        
        let selfCare = products1.filter((product) => product.category == "self-care");
        let amoSelfCare = 0;
        selfCare.forEach((product) => (amoSelfCare += parseInt(product.amount)));
        
        let pharmacy = products1.filter((product) => product.category == "pharmacysoda");
        let amoPharmacy = 0;
        pharmacy.forEach((product) => (amoPharmacy += parseInt(product.amount)));
        
        let totAmount = amoDrink + amoFood + amoClean + amoSelfCare + amoPharmacy;

        let priceTot = 0;
        let i=0;
        let prices = [];
        products1.forEach(product =>{
            prices[i]=parseInt(product.price)*parseInt(product.amount);
            i++;
        })
        for (let i = 0; i < prices.length; i++) {
            priceTot += parseInt(prices[i]);    
        }
        document.getElementById("info").innerHTML = `
        <p>
        En la categoría bebidas hay ${amoDrink} productos<br>
        En la categoría comida hay ${amoFood} productos<br>
        En la categoría limpieza hay ${amoClean} productos<br>
        En la categoría cuidado personal hay ${amoSelfCare} productos<br>
        En la categoría farmacia hay ${amoPharmacy} productos<br>
        En total hay ${totAmount} productos<br>
        El valor total es ${priceTot}<br>
        `
    }else{
        alert("No hay productos");
    }
};

// Disminuir existencias de un producto
function reduceInvent(){
    var products1 = JSON.parse(localStorage.products);
    let reduceProd = prompt('ingrese el producto a reducir en el inventario');
    let band=true;
    if (reduceProd != null) {
        products1.forEach((product) => {
        if (product.name == reduceProd.toLowerCase()) {
            if (product.amount >1){
            product.amount = parseInt(product.amount) - 1;
            product.amount=product.amount.toString();
            alert(`Se ha disminuido las existencias de ${reduceProd}`);
            band = false;
            }else {
                alert(`El producto ${product.name} no tiene mas existencias, será eliminado`)
                products1.splice(products.indexOf(product),1);
            };
            };
        });
        if (band) {
            alert(`no se ha encontrado ${reduceProd}`);
        };
        };
        localStorage.setItem("products",JSON.stringify(products1));
    };

//Aumentar existencias de un producto
function increaseInvent(){
    var products1 = JSON.parse(localStorage.products);
    
    let band = true;
    let increaseProd= prompt('Ingrese el producto a aumentar en el inventario');
    if (increaseProd != null){
        products1.forEach(product=>{
            if (product.name==increaseProd){
                product.amount=parseInt(product.amount)+1;
                alert(`El producto ${increaseProd} ha sido aumentado`);
                band= false;
            }
        });
        if (band) {
            alert(`El producto ${increaseProd} no se ha encontrado`);
        }
    } 
    localStorage.setItem('products',JSON.stringify(products1));
};

//buscar un producto por nombre
function searchProd(){
    var products1 = JSON.parse(localStorage.products);  
    // let searchName = prompt('Escribe el nombre del producto a buscar');
    let searchName = document.getElementById('prod_search').value;
    if (searchName != null){
        let band = true;
        let categ;
        products1.forEach(product =>{
            if (product.name == searchName){
                if (product.category == 'drink'){
                    categ = 'bebida';
                }else if (product.category == 'food'){
                    categ='comida';
                } else if (product.category == 'cleaning'){
                    categ='limpieza';
                }else if (product.category =='self-care'){
                    categ='cuidado personal';
                }else{
                    categ='farmacia';
                }
                alert(
                    `${product.name}: categoría: ${categ}, precio: ${product.price}, cantidad: ${product.amount}`
                    );
                band = false;
            };
        });
        if (band){
            alert(`El producto ${searchName} no se ha encontrado`);
        };
    };
};

//eliminar un producto
function deleteProd(){
    var products1 = JSON.parse(localStorage.products);
    var prodDelete = prompt('Escriba el nombre del producto a eliminar');
    if(prodDelete!=null){
        let band = true;
        let i=0;
        products1.forEach(product=>{
            if (product.name==prodDelete){
                band=false;
                products1.splice(i, 1);
                alert('Producto eliminado exitosamente')
            };
            i++;
        });
        if (band){
            alert(`El producto ${prodDelete} no se ha encontrado`);
        };
    };
    localStorage.setItem("products", JSON.stringify(products1));
};

//listar los productos en orden alfabético
function listProds(){
    document.getElementById("prod_list").innerHTML = ``;
    var products1 = JSON.parse(localStorage.products);
    let productsSorted = products1;
    productsSorted.sort((p1, p2)=>{
        if(p1.name<p2.name){
            return -1;
        }else if(p1.name>p2.name){
            return 1;
        }else{
            return 0;
        };
    })
    console.log(productsSorted);
    let categ;
    productsSorted.forEach(product=>{
        if (product.category == "drink") {
            categ = "bebida";
        } else if (product.category == "food") {
            categ = "comida";
        } else if (product.category == "cleaning") {
            categ = "limpieza";
        } else if (product.category == "self-care") {
            categ = "cuidado personal";
        } else {
            categ = "farmacia";
        }
    const prodLi = document.createElement("li");
    const prodNode = document.createTextNode(`${product.name}: categoría: ${categ}; precio: ${product.price}; cantidad: ${product.amount}`);
    prodLi.appendChild(prodNode);
    document.getElementById("prod_list").appendChild(prodLi);
    });
};
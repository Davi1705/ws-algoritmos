"use strict";

import { api_functions as afunc } from "./func_api.js";
let users = [];
window.onload = getData();
function getData() {
    const btnRegist = document.getElementById("btn_regist");
    btnRegist.addEventListener("click", register);

}
async function getUsers() {
    users = await afunc.getInfo("Users");
    console.log(users);
}

function register() {
    const inpName = document.getElementById("reg_name").value;
    const inpEmail = document.getElementById("reg_mail").value;
    const inpPhone = document.getElementById("reg_phone").value;
    const inpPassword = document.getElementById("reg_password").value;
    const inpConfPassword = document.getElementById("reg_confirm_password").value;
    if (
    inpPassword == "" ||
    inpConfPassword == "" ||
    inpPhone == "" ||
    inpEmail == "" ||
    inpName == ""
    ) {
    alert("Complete todos los campos");
    } else {
    if (inpConfPassword == inpPassword) {
        afunc.addUser(inpName, inpEmail, inpPassword, inpPhone, users);
        window.location.href = "index.html";
    } else {
        alert("La contraseña no coincide");
    }
    }
    getUsers();
}

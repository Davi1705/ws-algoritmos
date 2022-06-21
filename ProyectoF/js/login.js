"use strict";

import { api_functions as afunc } from "./func_api.js";
let users = [];
window.onload = getData();
function getData() {
  const btnLogin = document.getElementById("btn_login");
  btnLogin.addEventListener("click", login);
}

async function getUsers() {
  users = await afunc.getInfo("Users");
  console.log(users);
}
getUsers();
let logged=false;
function login() {
    logged=false;
    let name = document.getElementById("log_inp_name").value;
    let email = document.getElementById("log_inp_email").value;
    let password = document.getElementById("log_inp_password").value;
    users.forEach(function (user) {
        console.log(user.name);
    if (
        (user.name == name) &
        (user.mail == email) &
        (user.password == password)
    ) {
        logged = true;
    }})
    if (logged) {
        window.location.href = "index.html";
        alert(`Hola ${name}`);
        const fomrSession = document.getElementById('form_session').style.display = 'none';
    } else {
        alert(`Inicio de sesión inválido`);
    }
    }
    
    
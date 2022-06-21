const url = "https://62b0876de460b79df048112c.mockapi.io/api/";

const getInfo = async (resource) => {
    const response = await fetch(url + resource);
    return response.json();
}

function addUser(name, email, password, phone, users) {
    let user = {
        name: name,
        mail: email,
        password: password,
        phone: phone,
        buys:0
    };
    users.push(user);
    saveUser(user);
}
function saveUser(user) {
    fetch(url + "Users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
        "Content-type": "application/json",
        },
    }).then((response) => response.json());
}
//changes the properties in the object (changes) of a product by its id
function changeProd(id, changes) {
  fetch(url + "products/"+id, {
    method: "PUT",
    body: JSON.stringify(changes),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => response.json());
}

export const api_functions = {
    addUser,
    getInfo,
    saveUser,
    changeProd,
};
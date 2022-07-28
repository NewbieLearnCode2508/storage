var userApi = "http://localhost:3000/users";
var inputNameValue = document.querySelector('input[name="name"]');
var inputPassValue = document.querySelector('input[name="password"]');

function start() {
    getUsers(renderUsers);
    handlderCreateForms();
}

start();

function renderUsers(users) {
    var usersBox = document.querySelector(".users-box");
    var htmls = users.map((user) => {
        return `<li class="user-item-${user.id}">
                <h2 class="user-name-${user.id}">${user.username}</h2>
                <p class="user-password-${user.id}">${user.password}</p>
                <button onclick="handleDeleteUser(${user.id})" class="delete">DELETE</button>
                <button onclick="handlEditUser(${user.id})" class="edit">EDIT</button>
                </li>`;
    });
    usersBox.innerHTML = htmls.join("");
}

function getUsers(callBack) {
    fetch(userApi)
        .then((response) => response.json())
        .then(callBack);
}

function clearInputs(...input) {
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        element.value = "";
    }
}

function handleCreateUser(data, callBack) {
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(userApi, options)
        .then((response) => response.json())
        .then(callBack);
}

function handlderCreateForms() {
    var createBtn = document.querySelector("#create");

    createBtn.onclick = () => {
        if (inputNameValue.value != "" && inputPassValue.value != "") {
            var data = {
                username: inputNameValue.value,
                password: inputPassValue.value,
            };
            handleCreateUser(data, () => {
                getUsers(renderUsers);
            });

            clearInputs(inputNameValue, inputPassValue);
        } else {
            alert("Bạn chưa nhập tài khoản và mật khẩu");
        }
    };
}

function handleDeleteUser(id) {
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(userApi + "/" + id, options)
        .then((response) => response.json())
        .then(() => {
            var userItem = document.querySelector(".user-item-" + id);
            userItem.remove();
        });
}

function handlEditUser(id) {
    var userNameCurrent = document.querySelector(".user-name-" + id);
    var passwordCurrent = document.querySelector(".user-password-" + id);
    var saveBtn = document.querySelector("#save");

    inputNameValue.value = userNameCurrent.innerText;
    inputPassValue.value = passwordCurrent.innerText;

    if (inputNameValue.value != "" && inputPassValue.value != "") {
        saveBtn.onclick = () => {
            var newData = {
                username: inputNameValue.value,
                password: inputPassValue.value,
            };

            handlEditForm(id, newData, () => {
                getUsers(renderUsers);
            });
            clearInputs(inputNameValue, inputPassValue);
        };
    }
}

function handlEditForm(id, newData, callBack) {
    var options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
    };
    fetch(userApi + "/" + id, options)
        .then((response) => response.json())
        .then(callBack);
}

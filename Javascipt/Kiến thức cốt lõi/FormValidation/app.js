var userName = document.querySelector('.user-name');
var formMessage = document.querySelectorAll('.form-message');
var formGr = document.querySelectorAll('.form-group');

userName.onblur = ()=> {
    var quantity = userName.value.length
    minValue(10, 5, quantity, userName);
}

function minValue(max, min, quantity, variable) {
    if(quantity < min) {
        variable.parentElement.classList.add('error');
        formMessage[0].textContent = `Phải có ít nhất ${min} kí tự`
    }else {
        variable.parentElement.classList.remove('error');
        formMessage[0].textContent = '';
    }
}
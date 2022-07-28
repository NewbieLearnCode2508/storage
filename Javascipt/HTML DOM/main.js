

/* DOM Style */
var boxElement = document.getElementById('hello');
//cách 1
boxElement.style.borderRadius = '20px';

//cách 2
Object.assign(boxElement.style,{
    backgroundColor: 'green',
    fontSize: '2rem',
})
console.log(boxElement);

/* ClassList */
//remove xóa class
boxElement.classList.remove('red');

//add thêm class

boxElement.classList.add('red');

//contain kiểm tra xem có class không
console.log(boxElement.classList.contains('red'));

//replace thay thế class
boxElement.classList.replace('red', 'yellow');

//toggle nếu có thì xóa và thêm vào và ngược lại
/* setInterval(() => {
    boxElement.classList.toggle('yellow');
}, 2000); */

//value xuất ra giá trị chuỗi trong class
console.log(boxElement.classList.value);

/* DOM Event */

/* Events */
//blur
//change
//click
//dbclick
//focus
//fullscreenchange
//keyup, keydown, keypress
//mousedown, mouseup
//mouseover
//scroll
//input

/* Các cách sử dụng DOM Event */
//1. Attribute events viết thẳng vào thẻ
//2. Assign event using element node

var boxElement2 = document.querySelector('.hello2');

for(var i = 0; i < boxElement2.length; i++) {
    boxElement2[i].onkeyup = function(event) {
        console.log(event.which);
    }
}

//thay which bằng keycode
document.onkeydown = function(e) {
    /* console.log(e.which);
    console.log(e.keyCode); */
}

var inputValue;

//onchange
boxElement2.onchange = function(e) {
    inputValue = e.target.value;
    if(inputValue.length > 5) {
        console.log(`Đã nhập đúng tên và tên bạn là ${inputValue}`);
    }else {
        console.log('Tên phải có hơn 5 ký tự');
    }
}

//oninput

boxElement2.oninput = function(e) {
    inputValue = e.target.value;
    if(inputValue.length > 5) {
        console.log(`Đã nhập đúng tên và tên bạn là ${inputValue}`);
    }else {
        console.log('Tên phải có hơn 5 ký tự');
    }
}

//preventDefault
var ulElement = document.querySelector('ul');

ulElement.onmousedown = 
    function(e) {
        e.preventDefault();
    }
ulElement.onclick = 
    function(e) {
        console.log(e.target);
    }
//StopPropagation
var DIV = document.querySelector('div');
var h1Div = document.querySelector('.JS');

DIV.onclick = function(e) {
    console.log('DIV');
}

h1Div.onclick = function(e) {
    e.stopPropagation();
    console.log('javascript');
}

//onblur
boxElement2.onblur = function(e) {
    console.log(e.target);
}

//ondbclick
boxElement.ondblclick = function(e) {
    e.target.style.backgroundColor = 'blue';
}

//Event listener
//addEventListener
var btnClick = document.getElementById('click');

function viec1() {
    console.log('viec 1');
}

function viec2() {
    console.log('viec 2');
}

btnClick.addEventListener('click', viec1);
btnClick.addEventListener('click', viec2);

//removeEventListener
setTimeout(function() {
    btnClick.removeEventListener('click', viec1)
},3000);

var 
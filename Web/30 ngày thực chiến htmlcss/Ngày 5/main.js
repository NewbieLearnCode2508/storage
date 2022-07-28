var searchBtn = document.querySelector('.search-btn');
var searchInput = document.querySelector('.search-input');

searchBtn.onclick = ()=> {
    searchInput.classList.toggle('active');
}

//Định nghĩa key và value gọn hơn
//Định nghĩa key bằng biến
//Định nghĩa phương thức

var name = 'Trần Tiến Đạt';
var age = 18;

var obj = {
    name,
    age,
    getName() {
        return name;
    }
}

console.log(obj)

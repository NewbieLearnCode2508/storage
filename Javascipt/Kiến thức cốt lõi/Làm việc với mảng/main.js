var user = [
    {
        name: 'Tiến Đạt',
        age: 18
    },
    {
        name: 'Tiến Thành',
        age: 22
    },
    {
        name: 'Thành Đạt',
        age: 24
    }
]

//reduce2
var numbers = [1,2,3,4,5];
Array.prototype.reduce2 = (callBack, result) => {
    for(let i = 0; i <= this.length; i++) {
        result = callBack(result, this[i], i, this);
    }

    return result;

}
var result = numbers.reduce2(function(acalmulator, currentValue, index, orriginArray) {
    return acalmulator + currentValue;
})

console.log(result);

//length Độ dài chuỗi
console.log(user.length);

//pop push xóa thêm phần tử cuối mảng

var popArray = user.pop();
console.log(popArray);
console.log(user);

var pushArray = user.push({
    name: 'Thành Đạt',
    age: 99
});
console.log(pushArray);
console.log(user);


//forEach duyệt lần lượt qua các phần tử

var forE = user.forEach(function(value,index,orriginArray) {
    
    console.log(value.name);
});

//every nếu tất cả các phần tử thỏa đk thì trả về true

var every = user.every(function(value,index,originArray) {
    
    return value.name === 'Tiến Thành';
});

console.log(every);

//some chỉ cần 1 phần tử thỏa đk sẽ trả true

var some = user.some(function(value,index,originArray) {
    return value.age === 18;
});

console.log(some);

//find tìm phần tử và trả về phần tử đó

var find = user.find(function(value,index,orriginArray) {
    return value.name === 'Thành Đạt';
});

console.log(find);

//filter tìm phần tử thỏa điều kiện trả về tất cả phần tử thỏa

var filter = user.filter(function(value,index,originArray) {
    return value.age > 18;
});

console.log(filter);

//map duyệt qua các phần tử và có thể trả về thưòng dùng để render ra view trên html

var map = user.map(function(value,index,orriginArray) {

    return `<h2>Tên khách hàng: ${value.name}</h2>
    <span>Tuổi: ${value.age}</span>
    <label>thứ tự: ${index + 1}`;
});

console.log(map.join(','));

var keys = Object.keys(user);

//reduce duyệt qua các phần tử và có biến lưu trữ acalmulator

var reduce = user.reduce(function(acalmulator, currentValue,index,orriginArray) {
    return acalmulator + ' ' + index + currentValue.name + ' tuổi ' + currentValue.age;
},'');

console.log(reduce);

//keys dùng để lấy ra các keys của array
console.log(keys);

/* Math */

//random
console.log(Math.floor(Math.random()*10));

//round làm tròn đến số gần nhất
console.log(Math.round(2.123));

//floor làm tròn xuống
console.log(Math.floor(2.999));

//ceil làm tròn lên
console.log(Math.ceil(2.000001));

//abs trị tuyệt đối
console.log(Math.abs(-2.999));

//sqrt căn bậc 2
console.log(Math.sqrt(4));

//sign cho biết số âm (-1) dương (1) hoặc falsy(0)
console.log(Math.sign(4));

//max min
console.log(Math.max(1,2,3,4));
console.log(Math.min(1,2,3,4));

//trunc trả phần nguyên của số
console.log(Math.trunc(12,2));//12

/* Attribute Node */
//Seter attribute
var element = document.querySelector('.heading');
element.setAttribute('hello', 'CCC');//Cách này có thể dùng tự định nghĩa
element.href = '#';//Cách này chỉ sử dụng cho attribute đúng với tag

//geter attribute
element.getAttribute('hello');//Cách này có thể dùng với geter tự định nghĩa
console.log(element.href);//Cách này chỉ sử dụng cho attribute đúng với tag

/* Text Node :khác biệt là innerText thì lấy ra text của cái view mình thấy
còn textContent thì lấy toàn bộ*/
//innerText
var heading1 = document.querySelector('.heading1');
heading1.innerText = `

heading 1


`;//set
console.log(heading1);//get
//textContents
var heading2 = document.querySelector('.heading2');
console.log(heading2.textContent);//get
heading2.textContent = 'heading 2';//set
heading2.textContent = `

heading 2

`;//set

/* HTML */

/* innerHTML outerHTML */
//innerHTML
var boxElement = document.querySelector('.box');

/* boxElement.innerHTML = `<h1>Item4</h1>`; *///Chỉnh sửa html bên trong

//outerHTML

var item = document.querySelector('.item');
item.outerHTML = '<h1>new item h1</h1>';//Chỉnh sửa html chính nó


var item2 = document.querySelector('.item2');
console.log([item2]);

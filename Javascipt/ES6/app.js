//1. Let, Const --> OK
//2. Template Literals --> OK
//3. Multi-line String --> OK 
//4. Arrow function --> OK 
//5. Classes --> OK 
//6. Enhanced object Literals --> OK 
//7. Default parameter values --> OK 
//8. Destructuring--> Ok
//9. Rest parameters--> Ok
//10. Spread
//11. Tagged template literal
//12. Modules

/* Let Const Var */
//1. Var / let const: scoope, hoisting
{
    var a;
    a = 1;
}

// Khai báo trong code block nhưng vẫn truy cấp được bên ngoài
console.log(a);

//Hoisting
b = 2;
var b;
console.log(b);

///const và let không thể khai báo sau khi làm việc
/* c=3;
let c;
console.log(c); */

//2.Const / var let assign
//với var và let có thể gán lần 2
var d;
d = 3;
d = 6;
console.log(d);

//với const thì không thể gán
const bien = 2;
console.log(bien);

//Trường hợp bị gài
//nếu gán cho thuộc tính của biến const thì vẫn có thể được
const test = {
    name: 'javascript'
};

test.name = 'PHP';
console.log(test.name);

/* =======> Sử dụng var khi code thuần */
/* =======> Sử dụng let const khi sử dụng thư viện babel */

/* 2. Template Literals */

var nameCourses = 'Javascript';
var description = `Khóa học tên là : ${nameCourses}`;

console.log(description);

/* 3. Multi-line String */

//Cách bình thường
const line = 'line1\n'
    +'line2\n'
    +'line3\n';
console.log(line);
//multi-line string

const lineString = `
line 1
line 2
line 3`;

console.log(lineString);

/* 4. Arrow function */
//cách thường

var loggerNormal = function() {
    console.log('normal function');
}
loggerNormal();

//Arrow function
//Trường hợp 1
var loggerArrow = () => {
    console.log('arrow function');
}
console.log(loggerArrow);

//Trường hợp 2
var sumNumber = (a, b) => a + b;
console.log(sumNumber(2, 4));

//Trường hợp 3 chỉ cần khác dấu {} đều có thể được
var Obj = (a, b) => ({a: a, b: b});
console.log(Obj(4,6));
//======>Không thể sử dụng từ khóa this vì arrowfunction không có context chính nó
//======>Không thẻ dùng cho constructor

/* Classes */
//Cách thường
function Course(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function() {
        return this.name;
    }

    var phone = 0934133644;
}

var isCourse = new Course('Đạt', 18);
console.log(isCourse);

//Classes
/* class classesCourse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getNameClasses() {
        return this.name;
    }

    getPhone() {
        var getPhone = 0934133644;
    }
}

var user = new classesCourse('Tiến', 555);
console.log(user); */

//Sử dụng khi có nhiều code bên trong constructor

/* Enhanced object literal */ 
//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

//cách thường: 
/* var name = 'Javascript';
var price = 1000;

var course = {
    name: name,
    price: price,
    getName: function() {
        return name;
    }
};

console.log(course); */

//cách Enhanced object literal
var name = 'Javascript';
var price = 1000;

var course = {
    name,
    price,
    getName() {
        return name;
    }
};

console.log(course.getName());

//3. Định nghĩa key cho object dưới dạng biến
var fieldName = 'name-course';
var fieldPrice = 'price';

var course = {
    [fieldName]: 'PHP',
    [fieldPrice]: 2000
}

console.log(course);


/*8. Destructuring */
var arr = [1,2,3,4,5];

var [a, b, c, d] = arr;

console.log(a, b, c, d);

/* 9. Rest parameters */
var [a, ...rest] = arr
console.log(a);
console.log(rest);

var obj = {
    name: 'Javascript',
    age:18,
    id: 1,
    child: {
        name: 'PHP'
    }
}

//spread
var {name: parrentName, child: { name }, ...rest} = obj;

console.log(parrentName);
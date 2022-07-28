/* 
    Hoisting là đưa việc khai báo lên trên đầu phạm vi
*/

//Hoisting với "var" và "decoration function"
console.log(age);
var age = 18;
/* 
    Tương tự:
    var age;
    console.log(age);
    ag = 18;
*/
//Decoration funtion cũng tương tự như var nhưng là đem cả cái hàm lên
console.log(countAge(2003));
function countAge(year) {
    var currentYear = new Date;
    return currentYear.getFullYear() - year;
}

//Hoisting với "let" và "const"
/* 
    Riêng let và const vẫn được hoist nhưng sẽ 
    đưa vào temporal dead zone tức là phạm vi 
    tạm không thể truy cập cgru khi xuống dưới thì 
    mới có thể truy cập và gán giá trị
*/
console.log(age2);
let age2 = 18;//Uncaught ReferenceError: Cannot access 'age2' before initialization

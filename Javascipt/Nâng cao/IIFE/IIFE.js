/* 
    IIFE: 
        -Immediately Invoked Function Expresstion
        -seft-invoking funtion
*/
//Một IIFE sẽ thực hiện ngay lập tức function expresssion bên trong
//Tính : "private" khi sử dụng IIFE những biến hoặc hàm được khai báo bên trong thì sẽ không truy cập được ở bên ngoài phạm vi
//IIFE thường được sử dụng để tạo ra cái libaries
//Nếu code theo chủ nghĩa không dấu ; thì trước IIFE phải thêm dấu ;
//Cách khác là sử dụng cái toán tử (+-*/!)

//Các cách tạo ra 1 IIFE
/* 
    Cách 1: (IIFE)()
    Cách 2: (IIFE())
*/
var age = 18;
(function() {
    console.log(age);
}());
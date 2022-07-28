/* 
    -Scope: Phạm vi
    -Có 3 loại: 
        -Global scope: Phạm vi toàn cầu
        -Code block: khối mãi (Chỉ có let const) (if, else, while, for,...)
        -Local scope: trong hàm (var, function)
    -Khi gọi hàm thì một phạm vi mới sẽ được tạo ra
    -Các hàm có thể truy cập được các biến bên trong và bên ngoài phạm vi gần nhất của nó
    -Cách truy cập biến: Truy cập biến được khai báo gần nó nhất
    -Khi nào 1 biến bị xóa khỏi bộ nhớ:
        -Global: Khi thoát khỏi chương trình
        -Code block và local: Khi ra khỏi {}
*/
//Global
let global = "global scope";
console.log(Boolean());
//code block
{
    //Chỉ app dụng cho let và const
    const codeBlock = "code block";
    console.log(codeBlock);
}

//Local scope
function logger() {
    //Những thứ bên trong đều có thể truy cập được
    //Nhưng ở bên ngoài thì sẽ không thể truy cập được
    //var trong code block thì sẽ nhảy ra phạm vi local hàm gần nhất
    {
        var logger2 = "LOG 2";
    }
    console.log(logger2);
}
logger();
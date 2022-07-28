/* 
-Closer là hàm ghi nhớ được nơi mà nó được tạo ra
và có thể truy cập được các biến bên ngoài phạm vi của nó
-Giúp đảm bảo tính private trong OOP
-Giúp viết code ngắn gọn hơn
*/

const Createcounter = () => {
    let count = 0;
    function increase() {
        return count++;
    }
    return increase;
};

//Vì gán nó vào một biến nên giá trị của count trong closer vẫn được keep giá trị

const counter = Createcounter();
console.log(counter());//0
console.log(counter());//1
console.log(counter());//2
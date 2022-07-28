/* JSON */

//JSON là một định dạng dữ liệu được qui ước (chuỗi)
//Javascript Object Notation
//JSON: number, string, null, boolean, array, object
var json = '123';
var jsonArr = '["Javascript", "PHP", "ruby"]';
//parse JSON -> javascript types
console.log(JSON.parse(jsonArr));
JSON.parse(jsonArr).forEach(function(value, index) {
    console.log(value);
});

//stringify javascript -> JSON
console.log(JSON.stringify(jsonArr));


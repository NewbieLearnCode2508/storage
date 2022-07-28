var item = document.querySelectorAll('.item');
var slide = document.querySelectorAll('.slide');

slide.forEach((e,index)=> {
    e.onclick = ()=> {
        item.forEach((item,index)=> {
            item.classList.remove('active');
        })
        item[index].classList.add('active');
    }
})


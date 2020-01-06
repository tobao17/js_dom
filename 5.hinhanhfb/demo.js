// // var cactieude = document.getElementsByClassName("card");
// // for (let index = 0; index < cactieude.length; index++) {
// //     cactieude[index].innerHTML = "baoboa";
// // }
// // cactieude.forEach(x => {
// //     x.innerHTML = "baodeptrai";
// // });
// var cactieude = document.querySelectorAll("h4");
// // cactieude.innerHTML = "chung ta khong thuoc ve nhau";
// for (let index = 0; index < cactieude.length; index++) {
//     cactieude[index].innerHTML = "chung ta khong thuoc ve nhau"

// }


// document.addEventListener("DOMContentLoaded", function () {
//     var x = document.getElementById("baopro");
//     console.log(x);
//     x.onclick = function () {
//         console.log('ban vua click vao ' + x);
//         x.classList.add("dixuong")
//     }
// }, false)
document.addEventListener("DOMContentLoaded", function () {
    // var x = document.getElementById("baopro");
    // var y = document.getElementsByClassName("card");
    // var trangthai = 1;
    // x.onclick = function () {
    //     if (trangthai == 1) {

    //         y[0].classList.remove("anhbao2");
    //         console.log(trangthai)
    //         y[0].classList.add("anhbao")
    //         trangthai = 2;
    //     }
    //     else if (trangthai == 2) {

    //         y[0].classList.remove("anhbao");
    //         console.log(trangthai)
    //         y[0].classList.add("anhbao2")
    //         trangthai = 1;


    //     }
    // }
    for (var i = 0; i < 100; i++) {
        if (i % 1 === 0 && i % 2 === 1 && i % 3 === 2) {
            console.log(i);
        }
    }

}, false)

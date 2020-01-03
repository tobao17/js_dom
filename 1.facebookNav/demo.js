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
// document.addEventListener("DOMContentLoaded", function () {
//     var x = document.getElementById("baopro");
//     var y = document.getElementsByClassName("card");
//     var trangthai = 1;

//     x.onclick = function () {
//         if (trangthai == 1) {

//             y[0].classList.remove("anhbao2");
//             console.log(trangthai)
//             y[0].classList.add("anhbao")
//             trangthai = 2;
//         }
//         else if (trangthai == 2) {

//             y[0].classList.remove("anhbao");
//             console.log(trangthai)
//             y[0].classList.add("anhbao2")
//             trangthai = 1;


//         }
//     }


// }, false)
document.addEventListener("DOMContentLoaded", function () {
    // var x=document.getElementById("tamgiac");
    var x = document.getElementsByClassName("tamgiac");

    for (let index = 0; index < x.length; index++) {
        x[index].onclick = function () {
            for (let index2 = 0; index2 < x.length; index2++) {
                if (x[index] != x[index2]) {
                    x[index2].classList.remove("tamgiactrang");
                    var ndhienra = x[index2].getAttribute('data-hienlen');
                    var phantuhienra = document.getElementById(ndhienra);
                    phantuhienra.classList.remove('ra')
                }

            }
            x[index].classList.toggle("tamgiactrang");
            var ndhienra = this.getAttribute('data-hienlen');
            var phantuhienra = document.getElementById(ndhienra);
            phantuhienra.classList.toggle('ra');

        }

    }



}, false)
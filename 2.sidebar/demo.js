// document.addEventListener("DOMContentLoaded", function () {


// }, false)

document.addEventListener('DOMContentLoaded', function () {
    var nut = document.querySelector('.nut'),
        menutrai = document.querySelector('.menutrai'),
        den = document.querySelector('.den'),
        khoito = document.querySelector('.noidungto');
    nut.onclick = function () {
        den.classList.add('len');
        khoito.classList.add('dichphai');
    }
    den.onclick = function () {
        den.classList.remove('len');
        khoito.classList.remove('dichphai');
    }

}, false)
document.addEventListener('DOMContentLoaded', function () {
    var trangthai = true;
    var menu = document.querySelector('.menu')

    window.addEventListener('scroll', function () {
        if (this.window.pageYOffset > 300) {
            if (trangthai) {

                menu.classList.add('menunho')

            }
            trangthai = false;

        }
        else {
            menu.classList.remove('menunho')
            trangthai = true;
        }
    })
}, false)
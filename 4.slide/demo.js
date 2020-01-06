document.addEventListener('DOMContentLoaded', function () {

    var nut = document.querySelectorAll('.chuyenslide ul li');
    var slide = document.querySelectorAll('.cacslide ul li');



    var thoigian = setInterval(() => {
        var slidehientai = document.querySelector('.cacslide ul .active');
        var i = slidehientai.getAttribute('data-hienlen') - 1 + 1;
        for (let index = 0; index < slide.length; index++) {
            const element = slide[index];
            element.classList.remove('active');

            nut[index].classList.remove('kichhoat')


        }
        if (i !== 2) {
            slide[i + 1].classList.add('active');
            console.log(i);
            nut[i + 1].classList.add('kichhoat');

        }
        else {
            slide[0].classList.add('active');
            nut[0].classList.add('kichhoat');

        }

    }, 5000);


    for (let index = 0; index < nut.length; index++) {
        nut[index].addEventListener('click', function () {
            clearInterval(thoigian);
            for (let index1 = 0; index1 < nut.length; index1++) {

                const element = nut[index1];

                element.classList.remove('kichhoat');

            }
            for (let i = 0; i < slide.length; i++) {
                slide[i].classList.remove('active');

            }
            slide[index].classList.add('active');

            this.classList.add('kichhoat');
        }, false)

    }

}, false)

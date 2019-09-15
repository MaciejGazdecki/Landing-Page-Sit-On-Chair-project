document.addEventListener('DOMContentLoaded', function(){
    (function dropdown() {
        const aboutCompanyMenu = document.querySelector('.company-menu');
        const aboutLi = document.getElementById('about');
        aboutLi.addEventListener('mouseover', () =>
            aboutCompanyMenu.classList.add('on'));
        document.querySelector('.banner').addEventListener('mouseover', () =>
            aboutCompanyMenu.classList.remove('on'));
        document.querySelectorAll('.all-li').forEach((menuItem) => {
            menuItem.addEventListener('mouseover', () =>
                aboutCompanyMenu.classList.remove('on'))
        });
    })();

    (function showScrollArrow() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                document.querySelector('.arrow-up').classList.remove('arrow-off')
            } else {
                document.querySelector('.arrow-up').classList.add('arrow-off')
            }
        })
    })();

    (function scrollTop() {
        $('.arrow-up').on('click', () => {
            $("html").animate({
                scrollTop: 0
            })
        })
    })();

    (function banner() {
        const arrows = document.querySelectorAll('.arrow');
        const time = 4000;
        const changeSlide = () => {
            document.querySelector('.orange-chair').classList.toggle('image-off');
            document.querySelector('.black-chair').classList.toggle('image-off');
        };
        let idInterval = setInterval(changeSlide,time);
        arrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                changeSlide();
                clearInterval(idInterval);
                idInterval = setInterval(changeSlide, time);
            })
        });
    })();

    (function hideNames() {
        const imagesDivs = document.querySelectorAll('.images');
        imagesDivs.forEach(function (image) {
            image.addEventListener('mouseover', function () {
               this.lastElementChild.classList.toggle('arrow-off')
            });
            image.addEventListener('mouseout', function () {
                this.lastElementChild.classList.toggle('arrow-off')
            });
        })
    })();
    (function showHideOrderSection() {
        const btn = document.querySelector('.order');
        const orderSection = document.getElementById('order-section');
        const body = document.querySelector('body');
        const closeIcon = document.getElementById('close-icon');
        btn.addEventListener('click', () => {
            orderSection.classList.add('on');
            body.classList.add('noScroll');
        });
        closeIcon.addEventListener('click', () => {
            orderSection.classList.remove('on');
            body.classList.remove('noScroll');
        })
    })();
    (function placeOrder() {
            const listArrows = document.querySelectorAll('.list_arrow');
            const listPanels = document.querySelectorAll('.list_panel');
            listArrows.forEach(function (listArrow) {
                listArrow.addEventListener('click', function () {
                    this.nextElementSibling.classList.toggle('on');
                });
            });
            console.log(listPanels);

    })();
    (function placeOrder() {

    })();
});


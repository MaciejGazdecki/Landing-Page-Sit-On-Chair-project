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
        });
        showlists();
        selectOptions();
    })();
    function showlists() {
            const listArrows = document.querySelectorAll('.list_arrow');
            listArrows.forEach(listArrow =>{
                listArrow.addEventListener('click', function () {
                    this.nextElementSibling.classList.toggle('on');
                });
            });
    }
     function selectOptions () {
        const chairNames = document.querySelectorAll('#chair-type li');
        const chairColors = document.querySelectorAll('#chair-color li');
        const chairMaterials = document.querySelectorAll('#chair-material li');
        const selectTransport = document.getElementById('transport');
        const panelLeftTitle = document.querySelector('.panel_left h4');
        const panelRightTitle = document.querySelector('.panel_right h4');
        const panelLeftSpans = document.querySelectorAll('.panel_left span');
        const panelRightSpans = document.querySelectorAll('.panel_right span');
        const sum = document.querySelector('.sum');
        let valueSum = 0;
        sum.innerText = valueSum;

        chairNames.forEach(el => {
            el.addEventListener('click',function () {
                const price = this.dataset.price;
                panelLeftTitle.innerText = this.innerText;
                panelRightTitle.innerText = `${price} PLN`;
                this.parentElement.classList.toggle('on');
                valueSum += parseInt(price);
                sum.innerText = `${valueSum} PLN`;
            })
        });
        chairColors.forEach(el =>{
            el.addEventListener('click', function () {
                const price = this.dataset.price;
                panelLeftSpans[0].innerText = this.innerText;
                panelRightSpans[0].innerText = `${price} PLN`;
                this.parentElement.classList.toggle('on');
                valueSum += parseInt(price);
                sum.innerText = `${valueSum} PLN`;
            })
        });
        chairMaterials.forEach( el => {
            el.addEventListener('click', function () {
                const price = this.dataset.price;
                panelLeftSpans[1].innerText = this.innerText;
                panelRightSpans[1].innerText = `${price} PLN`;
                this.parentElement.classList.toggle('on');
                valueSum += parseInt(price);
                sum.innerText = `${valueSum} PLN`;
            })
        });
        selectTransport.addEventListener('click', function () {
            if(selectTransport.checked){
                panelLeftSpans[2].innerText = 'Transport';
                panelRightSpans[2].innerText = `${selectTransport.value} PLN`;
                valueSum += parseInt(selectTransport.value);
                sum.innerText = `${valueSum} PLN`;
            } else {
                panelLeftSpans[2].innerText = '';
                panelRightSpans[2].innerText = '';
                valueSum -= parseInt(selectTransport.value);
                sum.innerText = `${valueSum} PLN`;
            }
        });
    }
});


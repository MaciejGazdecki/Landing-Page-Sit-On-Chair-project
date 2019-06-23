(function mainPageAnimations() {
    (function showHidemenu() {
//IIFE which control showing and hiding small menu, I used ES6 arrow functions, which are shorter, and removed{}
//because there is only one line of code. I put tohether query Selectors with EventListeners. I used forEach, to
// addEventListener to nodelist created by querySelectorAll.
        const aboutCompanyMenu = document.querySelector('.company-menu');
        document.querySelector('.about').addEventListener('mouseover', () =>
            aboutCompanyMenu.classList.add('on'));
        document.querySelector('.banner').addEventListener('mouseover', () =>
            aboutCompanyMenu.classList.remove('on'));
        document.querySelectorAll('.menu-items').forEach((menuItem) => {
            menuItem.addEventListener('mouseover', () =>
                aboutCompanyMenu.classList.remove('on'))});
    })();

    (function showScrollArrow() {
        document.addEventListener('scroll', () => {
            if(window.scrollY > 350) {
                document.querySelector('.arrow-up').classList.remove('arrow-off')
            } else {
                document.querySelector('.arrow-up').classList.add('arrow-off')
            }
        })
    })();

    (function scrollTop() { // I used jQuery here
        $('.arrow-up').on('click', () => {
            $("html").animate({
                scrollTop:0
            })
        })
    })();

    (function switchImages() {
        setInterval(() =>{
            document.querySelector('.orange-chair').classList.toggle('image-off');
            document.querySelector('.black-chair').classList.toggle('image-off');
        },3500);
    })();
})();


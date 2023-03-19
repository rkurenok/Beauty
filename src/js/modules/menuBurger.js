export function menuBurger() {
    document.querySelector(".menu-burger__btn").addEventListener('click', function(e) {
        document.querySelector(".menu-burger__btn").classList.toggle('active');
        document.querySelector(".header__nav-site").classList.toggle('active'); 
        document.querySelector(".logo__callback").classList.toggle('active'); 
        document.querySelector(".logo__text").classList.toggle('active'); 
    })
}
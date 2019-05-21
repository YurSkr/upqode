var aElements = document.querySelectorAll('.main-nav__a');
var dropdownMain = document.querySelector('.dropdown__main');
var productsA = document.querySelectorAll('.dropdown-levels a');
for (var i = 0; i < aElements.length; i++) {
    (function () {
        var a = aElements[i];
        a.addEventListener('click', function(event) {
            var current = document.getElementsByClassName('activeNav')[0];
             current.classList.remove('activeNav');
            var thisA = event.target;
            if (dropdownMain.classList.contains('activeNav')) {
                dropdownMain.classList.remove('activeNav')
            } 
            thisA.classList.add('activeNav');
        });
        (function () {
            for (var j = 0; j < productsA.length; j++) {
                var dropdownAElement = productsA[j];
                dropdownAElement.addEventListener('click', function() {
                    if (a.classList.contains('activeNav')) {
                         a.classList.remove('activeNav')
                    }
                    dropdownMain.classList.add('activeNav');
                });
                dropdownAElement.setAttribute('href', '#products');
            }
        })();
    })();
}
var fixedTop = document.querySelector('.fixed-top');
var section = document.querySelectorAll('.section');
window.addEventListener('scroll', function() {
    function moreThen(number) {
        return windowFromTop > section[number].offsetTop
    }
    function lessThen(number) {
        return windowFromTop < section[number].offsetTop
    }
    function addClass(number){
        return aElements[number].classList.add('activeNav')
    }
    function removeClass(number) {
        return aElements[number].classList.remove('activeNav');
    }
    var scrollTop = window.scrollY || document.body.scrollTop || 0;
    var windowFromTop = scrollTop + fixedTop.offsetHeight;
    if (moreThen(0) && lessThen(1)) {
         addClass(0)
    } else removeClass(0);
    if (moreThen(1) && lessThen(2)) {
        dropdownMain.classList.add('activeNav');
    } else dropdownMain.classList.remove('activeNav');
    if (moreThen(2) && lessThen(3)) {
        addClass(1)
    } else removeClass(1);
    if (moreThen(3)) {
        addClass(2)
    } else removeClass(2)
});


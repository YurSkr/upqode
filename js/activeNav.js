var aElements = document.querySelectorAll('.main-nav__a');
var dropdownMain = document.querySelector('.dropdown__main');
var productsA = document.querySelectorAll('.dropdown-levels a');
for (var i = 0; i < aElements.length; i++) {
    (function () {
        var a = aElements[i];
        a.addEventListener('click', function(event) {
            var current = document.getElementsByClassName('activeNav')[0];
            return current.classList.remove('activeNav');
            var thisA = event.target;
            if (dropdownMain.classList.contains('activeNav')) {
                dropdownMain.classList.remove('activeNav')
            } else  return thisA.classList.add('activeNav');
        });
        (function () {
            for (var j = 0; j < productsA.length; j++) {
                var dropdownAElement = productsA[j];
                dropdownAElement.addEventListener('click', function() {
                    if (a.classList.contains('activeNav')) {
                        return a.classList.remove('activeNav')
                    } else return dropdownMain.classList.add('activeNav');
                });
                dropdownAElement.setAttribute('href', '#products');
            }
        })();
    })();
}

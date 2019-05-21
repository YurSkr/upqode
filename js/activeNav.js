alert('SUKAAAA')
const aElements = document.querySelectorAll('.main-nav__a');
const dropdownMain = document.querySelector('.dropdown__main');
const productsA = document.querySelectorAll('.dropdown-levels a');
for (const a of aElements) {
    a.addEventListener('click', (event) => {
        let current = document.getElementsByClassName('activeNav')[0];
        current.classList.remove('activeNav');
        let thisA = event.target;
        thisA.classList.add('activeNav');
        if (dropdownMain.classList.contains('activeNav')) {
            dropdownMain.classList.remove('activeNav')
        }
    });
    for (const dropdownAElement of productsA) {
        dropdownAElement.addEventListener('click', () => {
            dropdownMain.classList.add('activeNav');
            if (a.classList.contains('activeNav')) {
                a.classList.remove('activeNav')
            }
        });
        dropdownAElement.setAttribute('href', '#products');
    }
}
const fixedTop = document.querySelector('.fixed-top');
const section = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
    const moreThen = (number) => {
        return windowFromTop > section[number].offsetTop
    };
    const lessThen = (number) => {
        return windowFromTop < section[number].offsetTop
    };
    const addClass = (number) => {
        return aElements[number].classList.add('activeNav')
    };
    const removeClass = (number) => {
        aElements[number].classList.remove('activeNav');
    };
    let windowFromTop = window.scrollY + fixedTop.offsetHeight;
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




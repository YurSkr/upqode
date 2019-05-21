var dropdownItems = document.getElementsByClassName('dropdown__submenu');

for (var dropdownItem of dropdownItems) {
    var dropdownItemChild = dropdownItem.firstChild;
    dropdownItem.addEventListener('mouseenter', () => {
        dropdownItemChild.firstChild.innerHTML = '&raquo; '
    });
    dropdownItem.addEventListener('mouseleave', () => {
        dropdownItemChild.firstChild.innerHTML = '&rsaquo; '
    })
}

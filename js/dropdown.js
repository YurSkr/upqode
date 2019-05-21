var dropdownItems = document.getElementsByClassName('dropdown__submenu');

for (var dropdownItem of dropdownItems) {
    var dropdownItemChild = dropdownItem.firstChild;
    dropdownItem.addEventListener('mouseenter', function() {
        dropdownItemChild.firstChild.innerHTML = '&raquo; '
    });
    dropdownItem.addEventListener('mouseleave', function() {
        dropdownItemChild.firstChild.innerHTML = '&rsaquo; '
    })
}

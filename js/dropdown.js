var dropdownItems = document.getElementsByClassName('dropdown__submenu');

for (var i = 0; i < dropdownItems.length; i++) {
    var dropdownItem = dropdownItems[i];
    var dropdownItemChild = dropdownItem.firstChild;
    dropdownItem.addEventListener('mouseenter', function() {
        dropdownItemChild.firstChild.innerHTML = '&raquo; '
    });
    dropdownItem.addEventListener('mouseleave', function() {
        dropdownItemChild.firstChild.innerHTML = '&rsaquo; '
    })
}

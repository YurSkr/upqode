var dropdownItems = document.getElementsByClassName('dropdown__submenu');

for (var i = 0; i < dropdownItems.length; i++) {
    (function () {
        var dropdownItem = dropdownItems[i];
        var dropdownItemChild = dropdownItem.firstChild;
        dropdownItem.addEventListener('mouseenter', function() {
            return dropdownItemChild.firstChild.innerHTML = '&raquo; '
        });
        dropdownItem.addEventListener('mouseleave', function() {
            return dropdownItemChild.firstChild.innerHTML = '&rsaquo; '
        })
    })()
    
}

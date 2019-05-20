const dropdownItems = document.getElementsByClassName('dropdown__submenu');

for (const dropdownItem of dropdownItems) {
    let dropdownItemChild = dropdownItem.firstChild;
    dropdownItem.addEventListener('mouseenter', () => {
        dropdownItemChild.firstChild.innerHTML = '&raquo; '
    });
    dropdownItem.addEventListener('mouseleave', () => {
        dropdownItemChild.firstChild.innerHTML = '&rsaquo; '
    })
}
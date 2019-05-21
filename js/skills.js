var skillsHr = document.getElementsByClassName('skillsHr');
function getCords(hr) {
    return hr.getBoundingClientRect().bottom + window.pageYOffset - window.innerHeight + 40 < window.pageYOffset;
};
window.onscroll = function() {
    if (getCords(skillsHr[0])) {
        skillsHr[0].style.width = '79%';
    }
    if (getCords(skillsHr[1])) {
        skillsHr[1].style.width = '90%';
    }
    if (getCords(skillsHr[2])) {
        skillsHr[2].style.width = '69%';
    }
    if (getCords(skillsHr[3])) {
        skillsHr[3].style.width = '92%';
    }
};

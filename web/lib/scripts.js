let curInfo;
let scrY;

function mainlistclick(e) {
    let scrX = window.scrollX;
    // let scrY = window.scrollY;
    scrY = window.scrollY;
    if (curInfo) curInfo.style.display = "none";
    let elem = e.currentTarget.parentElement;
    let elems = document.getElementsByClassName("subList");
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].parentElement == elem) {
            elems[i].style.display = "block";
            elems[i].firstElementChild.lastElementChild.style.display = "block";

            var box = elems[i].getBoundingClientRect();
            scrY = box.top + pageYOffset - 23;
            
        } else elems[i].style.display = "none";
    }
    elems = document.getElementsByClassName("subImg");
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].parentElement == elem) {
            elems[i].setAttribute("class", "subImg selected");
        } else elems[i].setAttribute("class", "subImg");
    }
    window.scrollTo(scrX,scrY);
    e.stopPropagation();
    e.preventDefault();
}

function sublistclick(e) {
    let scrX = window.scrollX;
    // let scrY = window.scrollY;
    if (isNaN(scrY)) {
        scrY = window.scrollY;
    }
    let elem = e.currentTarget.parentElement;
    let elems = document.getElementsByClassName("info");
    for (let i=0; i<elems.length; i++) {
        if (elems[i].parentElement == elem) {
            elems[i].style.display = "block";
            curInfo = elems[i];
        } else elems[i].style.display = "none";
    }
    window.scrollTo(scrX,scrY);
    e.stopPropagation();
    e.preventDefault();
}

window.onload = function () {
    let elems = document.getElementsByClassName("info");
    for (let i=0; i<elems.length; i++) elems[i].style.display = "none";
    elems = document.getElementsByClassName("subList");
    elems[0].style.display = "block";
    elems[0].firstElementChild.lastElementChild.style.display = "block";
    elems = document.getElementsByClassName("subImg");
    elems[0].setAttribute("class", "subImg selected");
}

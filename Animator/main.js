window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    let htmlElement = document.documentElement;
    let percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    console.log(percentOfScreenHeightScrolled * 100);
    htmlElement.style.setProperty('--scroll', percentOfScreenHeightScrolled * 100);
}

setScrollVar()
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);
window.addEventListener("scroll", cardStall);

// Scroll event
function setScrollVar() {
    let htmlElement = document.documentElement;
    let percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    // console.log(percentOfScreenHeightScrolled);
    htmlElement.style.setProperty('--scroll', percentOfScreenHeightScrolled * 100);
}

setScrollVar();
let cards = document.querySelectorAll(".card");

function cardStall() {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        let htmlElement = document.documentElement;
        cardOffsetPercent = card.getBoundingClientRect().top / htmlElement.clientHeight * 100;
        if (card.classList.contains("last-card")) {
            if (cardOffsetPercent <= 0) {
                card.style.position = "fixed";

                card.style.top = "0";
                card.style.bottom = "0";
            }
        }
        else {
            if (cardOffsetPercent <= 10) {
                card.style.position = "sticky";
                card.style.top = "10%";

            }
        }
    })
}

cardStall();
//Info topic
const loadInfo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting);

    })
}, {

});

const reduceOpacity = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.firstChild) {
            entry.target.previousElementSibling.classList.toggle("active");
            entry.target.previousElementSibling.classList.toggle("hidding");
        }
        if (!entry.isIntersecting && !entry.target.firstChild) {
            entry.target.previousElementSibling.classList.toggle("active");
            entry.target.previousElementSibling.classList.toggle("hidding");
        }
    })
}, {
    threshold: 0.3
});


cards.forEach(card => {
    reduceOpacity.observe(card);
    loadInfo.observe(card);

})

//Portfolio 
let portfolioExamples = document.querySelectorAll(".example");
let open = true;

portfolioExamples.forEach(example => {
    let closeButtons = document.querySelectorAll("close");
    let children = example.querySelectorAll(".photo");
    example.addEventListener("click", () => {
        open = false;
        example.classList.toggle("active");
        children.forEach(child => {
            child.classList.toggle("show");
        })
    });
});

//Job Outlook




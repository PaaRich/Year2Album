// this is for the top button to display
let body = document.querySelector("body"),
    topBtn = document.querySelector(".c-top"),
    page = document.querySelector("html"),
    quaterHeight = Math.floor(
        Math.max(page.scrollHeight, page.clientHeight, page.offsetHeight) / 1.5
    );
window.addEventListener("scroll", (e) => {
    if (page.scrollTop > quaterHeight) {
        topBtn.style.opacity = "1";
    } else {
        topBtn.style.opacity = "0";
    }
});

// this is for the top button to function
topBtn.addEventListener("click", (e) => {
    page.scrollTop = "0";
});


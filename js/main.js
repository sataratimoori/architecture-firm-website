document.addEventListener("DOMContentLoaded", () => {

    const scrollList = document.querySelector(".scroll-list");

    if (!scrollList) return;

    [...scrollList.children].forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        scrollList.appendChild(clone);
    });

});

// counter
$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
$('.counter').addClass('animate__fadeInDownBig');
$('h3').addClass('animate__fadeIn');

// ANIMATEDBANNER
const text =
"            Spaces to Live, Work, and Play! We want to revolutionise every aspect of human life. Better cities, pleasant workplaces, fantastic  homes and great spaces to enjoy life; we find the best solution for every project in every situation by collecting data and parameters. ";

const paragraph = document.getElementById("paragraph");

text.split(" ").forEach(word => {

    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.opacity = .2;

    paragraph.appendChild(span);

});

const section = document.querySelector(".reveal-banner");

window.addEventListener("scroll", () => {

    const rect = section.getBoundingClientRect();

    const start = window.innerHeight * 0.2;
    const end = section.offsetHeight - window.innerHeight;

    let progress = (start - rect.top) / end;

    progress = Math.max(0, Math.min(1, progress));

    const spans = paragraph.querySelectorAll("span");

    const visibleWords = Math.floor(progress * spans.length);

    spans.forEach((span, index) => {
        span.style.opacity = index < visibleWords ? 1 : .2;
    });

});
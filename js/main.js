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
document.addEventListener("DOMContentLoaded", () => {

    const scrollList = document.querySelector(".scroll-list");

    if (!scrollList) return;

    [...scrollList.children].forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        scrollList.appendChild(clone);
    });

});
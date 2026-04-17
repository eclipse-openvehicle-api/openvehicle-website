document.addEventListener("DOMContentLoaded", function () {

    // Left botton
    const primaryToggle = document.querySelector(".primary-toggle");

    // Secondary sidebar
    const secondaryToggle = document.querySelector(".secondary-toggle");

    //Body
    const body = document.body;
    const secondarySidebar = document.querySelector(".bd-sidebar-secondary");

    function isMobileView() {
        return window.matchMedia("(max-width: 1023px)").matches;
    }

    function closeAllSidebars() {
        body.classList.remove("show-primary-sidebar");
        body.classList.remove("show-secondary-sidebar");
    }

    if (primaryToggle) {
        primaryToggle.addEventListener("click", function (event) {
            event.preventDefault();
            body.classList.toggle("show-primary-sidebar");
            body.classList.remove("show-secondary-sidebar");
        });
    }

    if (secondaryToggle) {
        secondaryToggle.addEventListener("click", function (event) {
            event.preventDefault();
            body.classList.toggle("show-secondary-sidebar");
            body.classList.remove("show-primary-sidebar");
        });
    }

    // On phones, close the drawer when clicking outside it.
    document.addEventListener("click", function (event) {
        if (!isMobileView()) {
            return;
        }

        const target = event.target;
        const clickedSecondaryToggle = secondaryToggle && secondaryToggle.contains(target);
        const clickedPrimaryToggle = primaryToggle && primaryToggle.contains(target);
        const clickedInsideSecondary = secondarySidebar && secondarySidebar.contains(target);

        if (!clickedSecondaryToggle && !clickedPrimaryToggle && !clickedInsideSecondary) {
            closeAllSidebars();
        }
    });

    // Allow closing with Escape on phones.
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && isMobileView()) {
            closeAllSidebars();
        }
    });
});

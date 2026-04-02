document.addEventListener("DOMContentLoaded", function () {

    // Left botton
    const primaryToggle = document.querySelector(".primary-toggle");

    // Secondary sidebar
    const secondaryToggle = document.querySelector(".secondary-toggle");

    //Body
    const body = document.body;

    if (primaryToggle) {
        primaryToggle.addEventListener("click", function () {
            body.classList.toggle("show-primary-sidebar");
        });
    }

    if (secondaryToggle) {
        secondaryToggle.addEventListener("click", function () {
            body.classList.toggle("show-secondary-sidebar");
        });
    }
});

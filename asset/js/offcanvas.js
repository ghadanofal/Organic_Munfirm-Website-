const menuButton = document.getElementById("menu-button");
const offcanvas = document.getElementById("offcanvas");
const closeButton = document.getElementById("close-button");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
    offcanvas.classList.toggle("hidden");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
    if (offcanvas.style.right === "0px") {
        offcanvas.style.right = "-250px";
    } else {
        offcanvas.style.right = "0px";
    }
});

// Close sidebar when the close button is clicked
closeButton.addEventListener("click", () => {
    offcanvas.classList.add("hidden");
    overlay.style.display = "none";
    offcanvas.style.right = "-250px";
});

// Close sidebar and overlay when clicking outside of the menu
overlay.addEventListener("click", () => {
    offcanvas.classList.add("hidden");
    overlay.style.display = "none";
    offcanvas.style.right = "-250px";
});


console.log("Hello World")
//si on lmet pas le on load on appele la fonction avant que le dom soit crée.
window.onload = function () {
    const primaryNav = document.getElementById("navigation");
    const navToggle = document.getElementById("hamburger");
    const statusExpanded = primaryNav.getAttribute("aria-expanded")
    

    //comprendre le data-visible
    /*if (statusExpanded === "true") {
        navToggle.
    }*/
    navToggle.addEventListener("click", () => {
        const visibility = primaryNav.getAttribute("data-visible");
        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', true);
        } else {
            primaryNav.setAttribute('data-visible', false);
        }

    })

}

function handleLinkNav(goTo) {
    toggleSection(goTo);
    toggleNavbar(goTo);
}

function toggleNavbar(goTo) {
    var navLink = document.getElementById(goTo + "Link");
    var activeLink = document.querySelector('.selected');
    activeLink.classList.remove("selected");
    navLink.classList.add("selected");
}

function toggleSection(goTo) {
    var activeSection = document.querySelector('.contentSection.active');
    activeSection.classList.add("hidden");
    activeSection.classList.remove("active");
    var navigateTo = document.getElementById(goTo);
    navigateTo.classList.remove("hidden");
    navigateTo.classList.add("active");
}
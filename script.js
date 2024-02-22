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

function typingAnimation(className ,text, speed, delay) {

    var options = {
        strings: [text],
        typeSpeed: speed || 50,
        showCursor: false,
        loop: false,
        startDelay: delay || 0
    };

    var typed = new Typed(`.${className}`, options);
}
document.addEventListener('DOMContentLoaded', function() {
    emoteAnimation(600);
    setTimeout(() => {
        emoteAnimation(1800);
    }, 1300);
    typingAnimation("typed-title" ,"Hallo" , 75);
    typingAnimation("typed-subtitle" ,"Ich bin Daniel.", 75, 1300);
});

function emoteAnimation(duration) {
    var emote = document.querySelector('.emote');
    var emoteList = ["^=^", "^-^" , "^≈^", "^o^", "^-^" ];
    var index = 0;
    var clear = false;

    function updateEmote() {
        emote.textContent = emoteList[index];
        index = (index + 1) % emoteList.length;
        if(clear === false) {
            setTimeout(updateEmote, 100);
        }
    }

    setTimeout(() => {
        clear = true;
        setTimeout(() => {
            emote.textContent = "°-°";
        }, 200);
    }, duration);

    updateEmote(); // Start the animation
}

function handleArrowVisibility(arrowIcon) {
    if(window.scrollY > 0) {
        arrowIcon.style.opacity = 0;
    } else {
        arrowIcon.style.opacity = 1;
    }
}

window.addEventListener('scroll', function() {
    var arrowIcon = document.getElementById("arrowIcon");
    handleArrowVisibility(arrowIcon);
});
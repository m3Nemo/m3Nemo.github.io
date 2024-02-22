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

function typingAnimation(className ,text, animator, speed, delay) {

    var options = {
        strings: [text],
        typeSpeed: speed || 50,
        showCursor: false,
        loop: false,
        startDelay: delay || 0,
        preStringTyped: function(self) {animator.start()},
        onStringTyped: function(self) {animator.pause()}
    };

    var typed = new Typed(`.${className}`, options);
}
document.addEventListener('DOMContentLoaded', function() {
    var animator = new EmoteAnimator();
    typingAnimation("typed-title" ,"Hallo", animator, 75);
    typingAnimation("typed-subtitle" ,"Ich bin Daniel.", animator, 75, 1300);
});

class EmoteAnimator {
    constructor() {
        this.emote = document.querySelector('.emote');
        this.emoteList = ["^=^", "^-^", "^≈^", "^o^", "^-^"];
        this.index = 0;
        this.run = true;
        this.animationInterval = setInterval(() => {
            if (this.run) {
                this.updateEmote();
            }
        }, 100);
    }

    updateEmote() {
        this.emote.textContent = this.emoteList[this.index];
        this.index = (this.index + 1) % this.emoteList.length;
    }

    start() {
        this.run = true;
    }

    pause() {
        this.run = false;
        setTimeout(() => {
            this.emote.textContent = "°-°";
        }, 200);
    }
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
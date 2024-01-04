// FIX NAVBAR
window.addEventListener("scroll", () => {
    const navbar = document.querySelector('.navbar')
    const posisi = window.scrollY > 100
    navbar.classList.toggle('nav-aktif', posisi)
})
// END - FIX NAVBAR

// NAVBAR POSISITION ON CLICK
const height = document.getElementById("navbar").offsetHeight
document.getElementsByTagName("html")[0].style.scrollPaddingTop = height + 65 + "px"
// END - NAVBAR POSISITION ON CLICK

// ARTIKEL
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    console.log(scrollLeftValue);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 150;
    IconVisibility();
    setTimeout(() => {
        IconVisibility()
    }, 50);
})

btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 150;
    IconVisibility();
    setTimeout(() => {
        IconVisibility()
    }, 50);
})

window.onload = function(){
    btnRight.style.display = tabMenu.scrollableWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= windows.innerWidth ? "" : "none";
}

window.onresize = function(){
    btnRight.style.display = tabMenu.scrollableWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= windows.innerWidth ? "" : "none";

    let scrollLeftValue = Math.round(tabMenu.scrollLeft);

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
}

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
    activeDrag = false;
    tabMenu.classList.remove("dragging");
})

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
});

const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tabNav = (tabBtnClick) => {
    tabBtns.forEach((tabBtn, index) => {
        tabBtn.classList.toggle("active", index === tabBtnClick);
    });

    tabs.forEach((tab, index) => {
        tab.classList.toggle("active", index === tabBtnClick);
    });
};

tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tabNav(i);
    });
});
// END - ARTIKEL

// VIDEO TRAILER
var video = document.querySelector('.video');
var juice = document.querySelector('.dt_yt');
var btn = document.getElementById('play-pause');

function tooglePlayPause() {
    if(video.paused){
        btn.className = 'pause';
        video.play();
    }
    else{
        btn.className = "play";
        video.pause()
    }
}

btn.onclick = function() {
    tooglePlayPause();
};

video.addEventListener('timeupdate', function(){
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if (video.ended) {
        btn.className = "play";
    }
});
// END - VIDEO TRAILER

// FULL VIDEO
let putarVideo = document.querySelector(".button-video")
let tutupVideo = document.getElementById("tutup")
let videoYoutube = document.querySelector(".vid-youtube")
let frameVideo = document.getElementById("vid")
putarVideo.addEventListener("click", function () {
    videoYoutube.style.display = "flex";
    videoYoutube.classList.add("anim-video");
    document.body.style.overflow = "hidden";
    frameVideo.setAttribute(
    "src",
    "https://www.youtube.com/embed/LH6NRxyGiwU?si=hk7nsnJb36xi1M7J"
    );
});
tutupVideo.addEventListener("click", function () {
    videoYoutube.style.display = "";
    videoYoutube.classList.remove("anim-video");
    document.body.style.overflow = "";
    frameVideo.removeAttribute("src");
});
window.addEventListener("click", (eventVideo) => {
    eventVideo.target === videoYoutube
        ? ((videoYoutube.style.display = ""),
        (document.body.style.overflow = ""),
        frameVideo.removeAttribute("src"))
    : false;
});
// END - FULL VIDEO

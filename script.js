// =========================
// Sürprizi Aç Butonu
// =========================

const startBtn = document.getElementById("startBtn");
const letterSection = document.getElementById("letterSection");

startBtn.addEventListener("click", () => {

    letterSection.scrollIntoView({
        behavior: "smooth"
    });

});

// =========================
// Zarf Açma
// =========================

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

});

const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        overlay.classList.add("show");

    },700);

});

closeBtn.addEventListener("click",()=>{

    overlay.classList.remove("show");

    envelope.classList.remove("open");

});

const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeImage = document.getElementById("closeImage");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("show");
        lightboxImg.src = img.src;

    });

});

closeImage.addEventListener("click", () => {

    lightbox.classList.remove("show");

});
// =========================
// Arka Plan Kalpleri
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "💜";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration =
        (6 + Math.random()*4) + "s";

    heart.style.fontSize =
        (18 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,1800);
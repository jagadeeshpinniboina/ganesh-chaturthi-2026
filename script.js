const divineLight = document.getElementById("divineLight");
const lightExpand = document.getElementById("lightExpand");
const particles = document.getElementById("particles");

const lotusCenter = document.getElementById("lotusCenter");
const lotusOpening = document.getElementById("lotusOpening");
const lotusFull = document.getElementById("lotusFull");
const lotusSeat = document.getElementById("lotusSeat");

const ganesha = document.getElementById("ganesha");

const diyaLeft = document.getElementById("diyaLeft");
const diyaRight = document.getElementById("diyaRight");

const wish = document.getElementById("wish");
const blessing = document.getElementById("blessing");


function reveal(element, animationClass = "scale-in") {
    element.classList.add(animationClass);
}


/*
    EXACT STORYBOARD

    0–2   Dark Screen
    2–4   Divine Light
    4–6   Light + Particles
    6–8   Lotus Center
    8–10  Lotus Opening
    10–12 Lotus Full
    12–14 Lotus + Seat
    14–16 Crown stage
    16–18 Eyes stage
    18–20 Ears stage
    20–22 Trunk stage
    22–24 Face stage
    24–26 Hands
    26–28 Ornaments
    28–30 Complete Ganesha
    30–32 Divine Glow + Diyas
    32–34 Final Darshan
    34–36 Wishes
    36+   Blessing
*/


function startSequence() {

    // 0–2 seconds
    setTimeout(() => {
        // Remain completely black.
    }, 0);


    // 2–4 seconds
    setTimeout(() => {
        reveal(divineLight);
    }, 2000);


    // 4–6 seconds
    setTimeout(() => {
        reveal(lightExpand);
        reveal(particles);
    }, 4000);


    // 6–8 seconds
    setTimeout(() => {
        reveal(lotusCenter);
    }, 6000);


    // 8–10 seconds
    setTimeout(() => {
        reveal(lotusOpening);
    }, 8000);


    // 10–12 seconds
    setTimeout(() => {
        reveal(lotusFull);
    }, 10000);


    // 12–14 seconds
    setTimeout(() => {
        reveal(lotusSeat);
    }, 12000);


    /*
        14–28 seconds

        IMPORTANT:
        We are NOT stacking separate Ganesha body-part PNGs.
        The final realistic Ganesha is one coherent image.

        We reveal the same idol progressively using
        brightness + scale timing.
    */

    // 14–16 Crown stage
    setTimeout(() => {
        ganesha.style.clipPath =
            "inset(0 0 55% 0)";
        ganesha.classList.add("ganesha-in");
    }, 14000);


    // 16–18 Eyes
    setTimeout(() => {
        ganesha.style.clipPath =
            "inset(0 0 45% 0)";
    }, 16000);


    // 18–20 Ears
    setTimeout(() => {
        ganesha.style.clipPath =
            "inset(0 0 35% 0)";
    }, 18000);


    // 20–22 Trunk
    setTimeout(() => {
        ganesha.style.clipPath =
            "inset(0 0 25% 0)";
    }, 20000);


    // 22–24 Face
    setTimeout(() => {
        ganesha.style.clipPath =
            "inset(0 0 15% 0)";
    }, 22000);


    // 24–26 Hands
    setTimeout(() => {
        ganesha.style.clipPath =
            "inset(0)";
    }, 24000);


    // 26–28 Ornaments
    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.08) drop-shadow(0 0 30px rgba(255,190,60,0.45))";
    }, 26000);


    // 28–30 Complete Ganesha
    setTimeout(() => {
        ganesha.style.clipPath = "inset(0)";
        ganesha.style.filter =
            "brightness(1.12) drop-shadow(0 0 45px rgba(255,190,60,0.55))";
    }, 28000);


    // 30–32 Diyas
    setTimeout(() => {
        reveal(diyaLeft, "diya-in");
        reveal(diyaRight, "diya-in");
    }, 30000);


    // 32–34 Final Darshan
    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.2) drop-shadow(0 0 65px rgba(255,200,80,0.7))";
    }, 32000);


    // 34–36 Wishes
    setTimeout(() => {
        wish.classList.add("wish-in");
    }, 34000);


    // 36+ Blessing
    setTimeout(() => {
        blessing.classList.add("blessing-in");
    }, 36000);
}


// Start automatically
window.addEventListener("load", () => {
    startSequence();
});

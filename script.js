const divineLight = document.getElementById("divineLight");
const lightExpand = document.getElementById("lightExpand");
const particles = document.getElementById("particles");

const lotusCenter = document.getElementById("lotusCenter");
const lotusOpening = document.getElementById("lotusOpening");
const lotusFull = document.getElementById("lotusFull");
const lotusSeat = document.getElementById("lotusSeat");

const ganeshaStage = document.getElementById("ganeshaStage");
const ganesha = document.getElementById("ganesha");

const diyaLeft = document.getElementById("diyaLeft");
const diyaRight = document.getElementById("diyaRight");

const wish = document.getElementById("wish");
const blessing = document.getElementById("blessing");


/* =========================================
   HELPERS
========================================= */

function show(element, className) {
    if (element) {
        element.classList.add(className);
    }
}


/* =========================================
   START SEQUENCE
========================================= */

function startSequence() {

    /*
        0–2 SECONDS
        Completely black.
    */


    /* -----------------------------------------
       2–4 SECONDS
       Divine light
    ----------------------------------------- */

    setTimeout(() => {
        show(divineLight, "show-light");
    }, 2000);


    /* -----------------------------------------
       4–6 SECONDS
       Light expands + particles
    ----------------------------------------- */

    setTimeout(() => {
        show(lightExpand, "show-expand");
        show(particles, "show-particles");
    }, 4000);


    /* -----------------------------------------
       6–8 SECONDS
       Lotus center
    ----------------------------------------- */

    setTimeout(() => {
        show(lotusCenter, "show-lotus");
    }, 6000);


    /* -----------------------------------------
       8–10 SECONDS
       Lotus opening
    ----------------------------------------- */

    setTimeout(() => {
        show(lotusOpening, "show-lotus");
    }, 8000);


    /* -----------------------------------------
       10–12 SECONDS
       Full lotus
    ----------------------------------------- */

    setTimeout(() => {
        show(lotusFull, "show-lotus");
    }, 10000);


    /* -----------------------------------------
       12–14 SECONDS
       Golden seat
    ----------------------------------------- */

    setTimeout(() => {
        show(lotusSeat, "show-lotus");
    }, 12000);


    /* =========================================
       GANESHA REVEAL
       14–30 SECONDS

       No drawing.
       No separate body parts.

       One complete realistic Ganesha.
    ========================================== */

    /* -----------------------------------------
       14–16
       Ganesha begins appearing
    ----------------------------------------- */

    setTimeout(() => {
        ganeshaStage.classList.add("show-ganesha");
        ganesha.classList.add("show-ganesha");
    }, 14000);


    /* -----------------------------------------
       16–18
       Smooth brightness increase
    ----------------------------------------- */

    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.03)";
    }, 16000);


    /* -----------------------------------------
       18–20
       Continue reveal
    ----------------------------------------- */

    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.06)";
    }, 18000);


    /* -----------------------------------------
       20–22
       Continue
    ----------------------------------------- */

    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.08)";
    }, 20000);


    /* -----------------------------------------
       22–24
       Continue
    ----------------------------------------- */

    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.10)";
    }, 22000);


    /* -----------------------------------------
       24–26
       Divine glow starts
    ----------------------------------------- */

    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.12) drop-shadow(0 0 20px rgba(255, 190, 60, 0.35))";
    }, 24000);


    /* -----------------------------------------
       26–28
       Stronger glow
    ----------------------------------------- */

    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.15) drop-shadow(0 0 30px rgba(255, 190, 60, 0.45))";
    }, 26000);


    /* -----------------------------------------
       28–30
       Complete Ganesha
    ----------------------------------------- */

    setTimeout(() => {
        ganesha.style.filter =
            "brightness(1.18) drop-shadow(0 0 45px rgba(255, 200, 80, 0.55))";
    }, 28000);


    /* =========================================
       30–32
       Divine glow + subtle zoom
    ========================================== */

    setTimeout(() => {

        ganesha.style.transition =
            "transform 2s ease, filter 2s ease";

        ganesha.style.transform =
            "translate(-50%, -50%) scale(0.98)";

        ganesha.style.filter =
            "brightness(1.2) drop-shadow(0 0 60px rgba(255, 200, 80, 0.65))";

    }, 30000);


    /* =========================================
       32–34
       Final darshan + diyas
    ========================================== */

    setTimeout(() => {

        show(diyaLeft, "show-diya");
        show(diyaRight, "show-diya");

        ganesha.style.transform =
            "translate(-50%, -50%) scale(0.95)";

    }, 32000);


    /* =========================================
       34–36
       Wishes
    ========================================== */

    setTimeout(() => {
        show(wish, "show-wish");
    }, 34000);


    /* =========================================
       36+
       Final blessing
    ========================================== */

    setTimeout(() => {
        show(blessing, "show-blessing");
    }, 36000);
}


/* =========================================
   START AUTOMATICALLY
========================================= */

window.addEventListener("load", () => {
    startSequence();
});

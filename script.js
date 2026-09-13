/* =====================================================
   RESET
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
}

body {
    font-family: Georgia, "Times New Roman", serif;
}


/* =====================================================
   MAIN SCENE
===================================================== */

#scene {
    position: relative;

    width: 100vw;
    height: 100vh;

    overflow: hidden;

    background: #000;
}


/* =====================================================
   BLACK BACKGROUND
===================================================== */

.background {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    background: #000;

    z-index: 0;
}


/* =====================================================
   COMMON IMAGE SETTINGS
===================================================== */

#scene img {
    position: absolute;

    display: block;

    pointer-events: none;

    user-select: none;
}


/* =====================================================
   DIVINE LIGHT
   2–4 seconds
===================================================== */

#divineLight {
    position: absolute;

    left: 50%;
    top: 50%;

    width: min(24vw, 280px);

    transform:
        translate(-50%, -50%)
        scale(0);

    opacity: 0;

    z-index: 2;
}


/* =====================================================
   LIGHT EXPANSION
   4–6 seconds
===================================================== */

#lightExpand {
    position: absolute;

    left: 50%;
    top: 50%;

    width: min(70vw, 850px);

    transform:
        translate(-50%, -50%)
        scale(0);

    opacity: 0;

    z-index: 3;
}


/* =====================================================
   PARTICLES
   4–6 seconds
===================================================== */

#particles {
    position: absolute;

    left: 50%;
    top: 50%;

    width: 100vw;
    height: 100vh;

    object-fit: cover;

    transform:
        translate(-50%, -50%);

    opacity: 0;

    z-index: 4;
}


/* =====================================================
   LOTUS STAGE
   6–14 seconds
===================================================== */

#lotusStage {
    position: absolute;

    left: 50%;
    top: 58%;

    width: min(45vw, 560px);
    height: min(45vw, 560px);

    transform:
        translate(-50%, -50%);

    z-index: 5;
}


/* All lotus images start hidden */

#lotusStage img {
    position: absolute;

    left: 50%;
    top: 50%;

    width: 100%;
    height: 100%;

    object-fit: contain;

    transform:
        translate(-50%, -50%)
        scale(0.85);

    opacity: 0;

    visibility: hidden;
}


/* =====================================================
   LOTUS CENTER
   6–8 seconds
===================================================== */

#lotusCenter {
    z-index: 1;
}


/* =====================================================
   LOTUS OPENING
   8–10 seconds
===================================================== */

#lotusOpening {
    z-index: 2;
}


/* =====================================================
   LOTUS FULL
   10–12 seconds
===================================================== */

#lotusFull {
    z-index: 3;
}


/* =====================================================
   LOTUS + SEAT
   12–14 seconds
===================================================== */

#lotusSeat {
    z-index: 4;
}


/* =====================================================
   LOTUS VISIBILITY CLASSES
===================================================== */

.lotus-visible {
    visibility: visible !important;

    animation:
        lotusAppear 1.7s ease forwards !important;
}


/* =====================================================
   GANESHA STAGE
   14–30 seconds
===================================================== */

#ganeshaStage {
    position: absolute;

    left: 50%;
    top: 52%;

    width: min(58vw, 760px);
    height: min(82vh, 850px);

    transform:
        translate(-50%, -50%);

    opacity: 0;

    visibility: hidden;

    z-index: 10;
}


/* =====================================================
   COMPLETE GANESHA
===================================================== */

#ganesha {
    position: absolute;

    left: 50%;
    top: 50%;

    width: 100%;
    height: 100%;

    object-fit: contain;

    transform:
        translate(-50%, -50%)
        scale(0.88);

    opacity: 0;

    visibility: hidden;

    filter: brightness(0.7);
}


/* =====================================================
   GANESHA APPEAR
===================================================== */

.ganesha-visible {
    visibility: visible !important;

    opacity: 1 !important;

    animation:
        ganeshaAppear 2s ease forwards !important;
}


/* =====================================================
   GANESHA GLOW
===================================================== */

.ganesha-glow {
    filter:
        brightness(1.12)
        drop-shadow(
            0 0 35px
            rgba(255, 190, 60, 0.5)
        ) !important;
}


/* =====================================================
   FINAL GANESHA
===================================================== */

.ganesha-final {
    filter:
        brightness(1.18)
        drop-shadow(
            0 0 60px
            rgba(255, 200, 80, 0.65)
        ) !important;
}


/* =====================================================
   DIYAS
   32–34 seconds
===================================================== */

#diyaLeft,
#diyaRight {
    width: min(13vw, 160px);

    bottom: 6%;

    opacity: 0;

    visibility: hidden;

    z-index: 15;

    transform:
        scale(0.7);
}


/* Left Diya */

#diyaLeft {
    left: 7%;
}


/* Right Diya */

#diyaRight {
    right: 7%;
}


/* =====================================================
   DIYA APPEAR
===================================================== */

.diya-visible {
    visibility: visible !important;

    animation:
        diyaAppear 1.5s ease forwards !important;
}


/* =====================================================
   WISH SECTION
   34–36 seconds
===================================================== */

#wish {
    position: absolute;

    left: 50%;
    bottom: 6%;

    width: min(90vw, 900px);

    transform:
        translateX(-50%)
        translateY(25px);

    text-align: center;

    opacity: 0;

    visibility: hidden;

    z-index: 20;

    text-shadow:
        0 0 10px rgba(255, 210, 100, 0.8),
        0 0 25px rgba(255, 180, 40, 0.5);
}


/* Wish heading */

#wish h1 {
    color: #ffd76b;

    font-size:
        clamp(28px, 4vw, 52px);

    font-weight: normal;

    margin-bottom: 8px;
}


/* Telugu heading */

#wish h2 {
    color: #ffe9ad;

    font-size:
        clamp(20px, 2.5vw, 34px);

    font-weight: normal;

    margin-bottom: 12px;
}


/* Wish paragraph */

#wish p {
    max-width: 760px;

    margin: 0 auto;

    color: #fff2cf;

    font-size:
        clamp(14px, 1.5vw, 20px);

    line-height: 1.5;
}


/* =====================================================
   WISH APPEAR
===================================================== */

.wish-visible {
    visibility: visible !important;

    animation:
        wishAppear 1.8s ease forwards !important;
}


/* =====================================================
   FINAL BLESSING
   36+ seconds
===================================================== */

#blessing {
    position: absolute;

    inset: 0;

    z-index: 30;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    text-align: center;

    background:
        rgba(0, 0, 0, 0.58);

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

    text-shadow:
        0 0 10px rgba(255, 210, 100, 0.8),
        0 0 30px rgba(255, 180, 40, 0.5);
}


/* Sanskrit */

#blessing div {
    color: #ffe3a0;

    font-size:
        clamp(22px, 3vw, 40px);

    margin-bottom: 18px;
}


/* Main blessing */

#blessing strong {
    color: #fff0bd;

    font-size:
        clamp(30px, 5vw, 65px);

    font-weight: normal;

    margin-bottom: 12px;
}


/* Always with you */

#blessing span {
    color: #ffe9b0;

    font-size:
        clamp(18px, 2.2vw, 30px);
}


/* =====================================================
   BLESSING APPEAR
===================================================== */

.blessing-visible {
    visibility: visible !important;

    animation:
        blessingAppear 2s ease forwards !important;
}


/* =====================================================
   DIVINE LIGHT ANIMATION
===================================================== */

@keyframes divineLightAppear {

    0% {
        opacity: 0;

        transform:
            translate(-50%, -50%)
            scale(0);
    }

    60% {
        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(1.08);
    }

    100% {
        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(1);
    }
}


/* =====================================================
   LIGHT EXPANSION
===================================================== */

@keyframes lightExpandAppear {

    0% {
        opacity: 0;

        transform:
            translate(-50%, -50%)
            scale(0.15);
    }

    60% {
        opacity: 0.7;

        transform:
            translate(-50%, -50%)
            scale(1.08);
    }

    100% {
        opacity: 0.75;

        transform:
            translate(-50%, -50%)
            scale(1);
    }
}


/* =====================================================
   PARTICLES
===================================================== */

@keyframes particlesAppear {

    0% {
        opacity: 0;
    }

    100% {
        opacity: 0.85;
    }
}


/* =====================================================
   LOTUS APPEAR
===================================================== */

@keyframes lotusAppear {

    0% {
        opacity: 0;

        visibility: visible;

        transform:
            translate(-50%, -50%)
            scale(0.72);
    }

    60% {
        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(1.04);
    }

    100% {
        opacity: 1;

        visibility: visible;

        transform:
            translate(-50%, -50%)
            scale(1);
    }
}


/* =====================================================
   GANESHA APPEAR
===================================================== */

@keyframes ganeshaAppear {

    0% {
        opacity: 0;

        visibility: visible;

        transform:
            translate(-50%, -50%)
            scale(0.82);

        filter:
            brightness(0.45);
    }

    55% {
        opacity: 1;

        transform:
            translate(-50%, -50%)
            scale(0.96);

        filter:
            brightness(1.05);
    }

    100% {
        opacity: 1;

        visibility: visible;

        transform:
            translate(-50%, -50%)
            scale(0.92);

        filter:
            brightness(1);
    }
}


/* =====================================================
   DIYA APPEAR
===================================================== */

@keyframes diyaAppear {

    0% {
        opacity: 0;

        visibility: visible;

        transform:
            scale(0.65);

        filter:
            brightness(0.5);
    }

    65% {
        opacity: 1;

        transform:
            scale(1.08);

        filter:
            brightness(1.4);
    }

    100% {
        opacity: 1;

        visibility: visible;

        transform:
            scale(1);

        filter:
            brightness(1.05);
    }
}


/* =====================================================
   WISH APPEAR
===================================================== */

@keyframes wishAppear {

    0% {
        opacity: 0;

        visibility: visible;

        transform:
            translateX(-50%)
            translateY(25px);
    }

    100% {
        opacity: 1;

        visibility: visible;

        transform:
            translateX(-50%)
            translateY(0);
    }
}


/* =====================================================
   BLESSING APPEAR
===================================================== */

@keyframes blessingAppear {

    0% {
        opacity: 0;

        visibility: visible;
    }

    100% {
        opacity: 1;

        visibility: visible;
    }
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {

    #lotusStage {
        width: 78vw;
        height: 78vw;

        top: 59%;
    }


    #ganeshaStage {
        width: 92vw;
        height: 76vh;

        top: 52%;
    }


    #diyaLeft,
    #diyaRight {
        width: 22vw;

        bottom: 4%;
    }


    #diyaLeft {
        left: 2%;
    }


    #diyaRight {
        right: 2%;
    }


    #wish {
        bottom: 4%;
    }


    #wish p {
        padding:
            0 15px;
    }
}

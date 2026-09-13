/* =====================================================
   GANESH CHATURTHI 2026
   AUTOMATIC 36-SECOND DIVINE SEQUENCE

   NO DRAWING EFFECT
   STAGE-BY-STAGE REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTS
    ================================================= */

    const divineLight = document.getElementById("divineLight");
    const lightExpand = document.getElementById("lightExpand");
    const particles = document.getElementById("particles");

    const lotusCenter = document.getElementById("lotusCenter");
    const lotusOpening = document.getElementById("lotusOpening");
    const lotusFull = document.getElementById("lotusFull");
    const lotusSeat = document.getElementById("lotusSeat");

    const ganeshaCrown = document.getElementById("ganeshaCrown");
    const ganeshaEyes = document.getElementById("ganeshaEyes");
    const ganeshaEars = document.getElementById("ganeshaEars");
    const ganeshaTrunk = document.getElementById("ganeshaTrunk");
    const ganeshaFace = document.getElementById("ganeshaFace");

    const ganeshaLeftHand =
        document.getElementById("ganeshaLeftHand");

    const ganeshaRightHand =
        document.getElementById("ganeshaRightHand");

    const ganeshaOrnaments =
        document.getElementById("ganeshaOrnaments");

    const ganeshaComplete =
        document.getElementById("ganeshaComplete");

    const diyaLeft =
        document.getElementById("diyaLeft");

    const diyaRight =
        document.getElementById("diyaRight");

    const wish =
        document.getElementById("wish");

    const blessing =
        document.getElementById("blessing");


    /* =================================================
       HELPER FUNCTIONS
    ================================================= */

    function addClass(element, className) {
        if (element) {
            element.classList.add(className);
        }
    }


    function wait(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }


    /* =================================================
       INITIAL STATE
    ================================================= */

    function resetScene() {

        /* Divine light */

        if (divineLight) {
            divineLight.style.opacity = "0";
            divineLight.style.visibility = "hidden";
        }

        if (lightExpand) {
            lightExpand.style.opacity = "0";
            lightExpand.style.visibility = "hidden";
        }

        if (particles) {
            particles.style.opacity = "0";
            particles.style.visibility = "hidden";
        }


        /* Lotus */

        [
            lotusCenter,
            lotusOpening,
            lotusFull,
            lotusSeat
        ].forEach(element => {

            if (element) {
                element.classList.remove("lotus-visible");
                element.style.opacity = "0";
                element.style.visibility = "hidden";
            }

        });


        /* Ganesha */

        [
            ganeshaCrown,
            ganeshaEyes,
            ganeshaEars,
            ganeshaTrunk,
            ganeshaFace,
            ganeshaLeftHand,
            ganeshaRightHand,
            ganeshaOrnaments,
            ganeshaComplete
        ].forEach(element => {

            if (element) {
                element.classList.remove(
                    "ganesha-part-visible",
                    "ganesha-complete-visible",
                    "ganesha-glow",
                    "ganesha-final"
                );

                element.style.opacity = "0";
                element.style.visibility = "hidden";
            }

        });


        /* Diyas */

        [diyaLeft, diyaRight].forEach(element => {

            if (element) {
                element.classList.remove("diya-visible");
                element.style.opacity = "0";
                element.style.visibility = "hidden";
            }

        });


        /* Wish */

        if (wish) {
            wish.classList.remove("wish-visible");
            wish.style.opacity = "0";
            wish.style.visibility = "hidden";
        }


        /* Blessing */

        if (blessing) {
            blessing.classList.remove("blessing-visible");
            blessing.style.opacity = "0";
            blessing.style.visibility = "hidden";
        }
    }


    /* =================================================
       2–4 SECONDS
       DIVINE LIGHT
    ================================================= */

    function showDivineLight() {

        if (!divineLight) return;

        divineLight.style.visibility = "visible";

        divineLight.style.animation =
            "divineLightAppear 2s ease forwards";
    }


    /* =================================================
       4–6 SECONDS
       LIGHT EXPANSION + PARTICLES
    ================================================= */

    function showLightExpansion() {

        if (lightExpand) {

            lightExpand.style.visibility = "visible";

            lightExpand.style.animation =
                "lightExpandAppear 2s ease forwards";
        }


        if (particles) {

            particles.style.visibility = "visible";

            particles.style.animation =
                "particlesAppear 2s ease forwards";
        }
    }


    /* =================================================
       LOTUS STAGE
    ================================================= */

    function showLotus(element) {

        if (!element) return;

        addClass(element, "lotus-visible");
    }


    /* =================================================
       GANESHA STAGE
       IMPORTANT:

       Every stage stays visible after appearing.
       Nothing is removed.
    ================================================= */

    function showGaneshaPart(element) {

        if (!element) return;

        addClass(element, "ganesha-part-visible");
    }


    /* =================================================
       COMPLETE GANESHA
    ================================================= */

    function showCompleteGanesha() {

        if (!ganeshaComplete) return;

        addClass(
            ganeshaComplete,
            "ganesha-complete-visible"
        );
    }


    /* =================================================
       DIVINE GLOW
    ================================================= */

    function addDivineGlow() {

        [
            ganeshaCrown,
            ganeshaEyes,
            ganeshaEars,
            ganeshaTrunk,
            ganeshaFace,
            ganeshaLeftHand,
            ganeshaRightHand,
            ganeshaOrnaments,
            ganeshaComplete
        ].forEach(element => {

            if (element) {
                element.classList.add("ganesha-glow");
            }

        });
    }


    /* =================================================
       FINAL GLOW
    ================================================= */

    function addFinalGlow() {

        if (ganeshaComplete) {
            ganeshaComplete.classList.add(
                "ganesha-final"
            );
        }
    }


    /* =================================================
       DIYAS
    ================================================= */

    function showDiyas() {

        addClass(diyaLeft, "diya-visible");
        addClass(diyaRight, "diya-visible");
    }


    /* =================================================
       WISH
    ================================================= */

    function showWish() {

        addClass(wish, "wish-visible");
    }


    /* =================================================
       FINAL BLESSING
    ================================================= */

    function showBlessing() {

        addClass(
            blessing,
            "blessing-visible"
        );
    }


    /* =================================================
       MAIN 36-SECOND SEQUENCE
    ================================================= */

    async function startSequence() {

        /* ---------------------------------------------
           RESET
        --------------------------------------------- */

        resetScene();


        /* ---------------------------------------------
           0–2s
           DARK SCREEN
        --------------------------------------------- */

        await wait(2000);


        /* ---------------------------------------------
           2–4s
           SINGLE DIVINE LIGHT
        --------------------------------------------- */

        showDivineLight();

        await wait(2000);


        /* ---------------------------------------------
           4–6s
           LIGHT EXPANDS + PARTICLES
        --------------------------------------------- */

        showLightExpansion();

        await wait(2000);


        /* ---------------------------------------------
           6–8s
           LOTUS CENTER
        --------------------------------------------- */

        showLotus(lotusCenter);

        await wait(2000);


        /* ---------------------------------------------
           8–10s
           LOTUS OPENING
        --------------------------------------------- */

        showLotus(lotusOpening);

        await wait(2000);


        /* ---------------------------------------------
           10–12s
           LOTUS FULL
        --------------------------------------------- */

        showLotus(lotusFull);

        await wait(2000);


        /* ---------------------------------------------
           12–14s
           LOTUS + SEAT
        --------------------------------------------- */

        showLotus(lotusSeat);

        await wait(2000);


        /* ---------------------------------------------
           14–16s
           GANESHA CROWN
        --------------------------------------------- */

        showGaneshaPart(ganeshaCrown);

        await wait(2000);


        /* ---------------------------------------------
           16–18s
           GANESHA EYES
        --------------------------------------------- */

        showGaneshaPart(ganeshaEyes);

        await wait(2000);


        /* ---------------------------------------------
           18–20s
           GANESHA EARS
        --------------------------------------------- */

        showGaneshaPart(ganeshaEars);

        await wait(2000);


        /* ---------------------------------------------
           20–22s
           GANESHA TRUNK
        --------------------------------------------- */

        showGaneshaPart(ganeshaTrunk);

        await wait(2000);


        /* ---------------------------------------------
           22–24s
           GANESHA FACE
        --------------------------------------------- */

        showGaneshaPart(ganeshaFace);

        await wait(2000);


        /* ---------------------------------------------
           24–26s
           HANDS
        --------------------------------------------- */

        showGaneshaPart(ganeshaLeftHand);
        showGaneshaPart(ganeshaRightHand);

        await wait(2000);


        /* ---------------------------------------------
           26–28s
           ORNAMENTS + CLOTHING
        --------------------------------------------- */

        showGaneshaPart(ganeshaOrnaments);

        await wait(2000);


        /* ---------------------------------------------
           28–30s
           COMPLETE GANESHA
        --------------------------------------------- */

        showCompleteGanesha();

        await wait(2000);


        /* ---------------------------------------------
           30–32s
           DIVINE GLOW + FINAL DARSHAN
        --------------------------------------------- */

        addDivineGlow();
        addFinalGlow();

        await wait(2000);


        /* ---------------------------------------------
           32–34s
           TWO DIYAS
        --------------------------------------------- */

        showDiyas();

        await wait(2000);


        /* ---------------------------------------------
           34–36s
           GANESH CHATURTHI WISH
        --------------------------------------------- */

        showWish();

        await wait(2000);


        /* ---------------------------------------------
           36s+
           FINAL BLESSING
        --------------------------------------------- */

        showBlessing();
    }


    /* =================================================
       START AUTOMATICALLY
    ================================================= */

    startSequence();

});

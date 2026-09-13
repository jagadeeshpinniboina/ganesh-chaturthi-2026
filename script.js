/* =========================================================
   GANESH CHATURTHI 2026
   AUTOMATIC CINEMATIC EXPERIENCE
========================================================= */

const $ = (id) => document.getElementById(id);


/* =========================================================
   ELEMENTS
========================================================= */

const divineLight   = $("divineLight");
const lightExpand   = $("lightExpand");
const particles     = $("particles");

const lotusCenter   = $("lotusCenter");
const lotusOpening  = $("lotusOpening");
const lotusFull     = $("lotusFull");

const goldenSeat    = $("goldenSeat");

const ganeshaBase   = $("ganeshaBase");

const crown         = document.querySelector(".reveal.crown");
const eyes          = document.querySelector(".reveal.eyes");
const ears          = document.querySelector(".reveal.ears");
const trunk         = document.querySelector(".reveal.trunk");
const face          = document.querySelector(".reveal.face");
const leftHand      = document.querySelector(".reveal.left-hand");
const rightHand     = document.querySelector(".reveal.right-hand");
const ornaments     = document.querySelector(".reveal.ornaments");

const leftDiya      = $("leftDiya");
const rightDiya     = $("rightDiya");

const wish          = $("wish");
const blessing      = $("blessing");


/* =========================================================
   BASIC HELPERS
========================================================= */

function clamp(value) {
    return Math.max(0, Math.min(1, value));
}


function smooth(value) {

    value = clamp(value);

    return value * value * (3 - 2 * value);
}


function between(time, start, end) {

    return smooth(
        (time - start) / (end - start)
    );
}


function setOpacity(element, value) {

    if (!element) return;

    element.style.opacity = clamp(value);
}


function setScale(element, value) {

    if (!element) return;

    element.style.transform =
        `translate(-50%, -50%) scale(${value})`;
}


/* =========================================================
   INITIAL STATE
========================================================= */

function resetAll() {

    setOpacity(divineLight, 0);
    setOpacity(lightExpand, 0);
    setOpacity(particles, 0);

    setOpacity(lotusCenter, 0);
    setOpacity(lotusOpening, 0);
    setOpacity(lotusFull, 0);

    setOpacity(goldenSeat, 0);

    setOpacity(ganeshaBase, 0);

    setOpacity(crown, 0);
    setOpacity(eyes, 0);
    setOpacity(ears, 0);
    setOpacity(trunk, 0);
    setOpacity(face, 0);

    setOpacity(leftHand, 0);
    setOpacity(rightHand, 0);

    setOpacity(ornaments, 0);

    setOpacity(leftDiya, 0);
    setOpacity(rightDiya, 0);

    setOpacity(wish, 0);
    setOpacity(blessing, 0);
}


/* =========================================================
   DIVINE LIGHT
   2–6 SECONDS
========================================================= */

function animateLight(time) {

    if (time < 2) {

        setOpacity(divineLight, 0);
        setOpacity(lightExpand, 0);
        setOpacity(particles, 0);

        return;
    }


    /* 2–4 : single divine light */

    if (time < 4) {

        const p = between(time, 2, 4);

        setOpacity(divineLight, p);

        setScale(
            divineLight,
            0.25 + p * 1.15
        );

        return;
    }


    /* 4–6 : expanding light + particles */

    if (time < 6) {

        const p = between(time, 4, 6);

        setOpacity(divineLight, 0.85);

        setOpacity(
            lightExpand,
            p
        );

        setOpacity(
            particles,
            p * 0.9
        );

        setScale(
            lightExpand,
            0.75 + p * 0.35
        );

        return;
    }


    /* After 6 */

    setOpacity(divineLight, 0.28);
    setOpacity(lightExpand, 0.20);
    setOpacity(particles, 0.45);
}


/* =========================================================
   LOTUS
   6–12 SECONDS
========================================================= */

function animateLotus(time) {

    /* 6–8 : center */

    if (
        time >= 6 &&
        time < 8
    ) {

        const p =
            between(time, 6, 8);

        setOpacity(
            lotusCenter,
            p
        );

        setScale(
            lotusCenter,
            0.65 + p * 0.35
        );

        return;
    }


    /* 8–10 : opening petals */

    if (
        time >= 8 &&
        time < 10
    ) {

        setOpacity(
            lotusCenter,
            0
        );

        const p =
            between(time, 8, 10);

        setOpacity(
            lotusOpening,
            p
        );

        setScale(
            lotusOpening,
            0.78 + p * 0.22
        );

        return;
    }


    /* 10–12 : full lotus */

    if (
        time >= 10 &&
        time < 12
    ) {

        setOpacity(
            lotusOpening,
            0
        );

        const p =
            between(time, 10, 12);

        setOpacity(
            lotusFull,
            p
        );

        setScale(
            lotusFull,
            0.92 + p * 0.08
        );

        return;
    }


    /* After 12 */

    if (time >= 12) {

        setOpacity(lotusFull, 1);
        setScale(lotusFull, 1);
    }
}


/* =========================================================
   GOLDEN SEAT
   12–14 SECONDS
========================================================= */

function animateSeat(time) {

    if (
        time >= 12 &&
        time < 14
    ) {

        const p =
            between(time, 12, 14);

        setOpacity(
            goldenSeat,
            p
        );

        setScale(
            goldenSeat,
            0.65 + p * 0.35
        );

        return;
    }


    if (time >= 14) {

        setOpacity(
            goldenSeat,
            1
        );

        setScale(
            goldenSeat,
            1
        );
    }
}


/* =========================================================
   GANESHA BUILD
   14–28 SECONDS
========================================================= */

function animateGanesha(time) {

    /* -----------------------------------------
       14–16 CROWN
    ----------------------------------------- */

    if (
        time >= 14 &&
        time < 16
    ) {

        const p =
            between(time, 14, 16);

        setOpacity(
            crown,
            p
        );

        return;
    }


    /* -----------------------------------------
       16–18 EYES
    ----------------------------------------- */

    if (
        time >= 16 &&
        time < 18
    ) {

        setOpacity(crown, 1);

        setOpacity(
            eyes,
            between(time, 16, 18)
        );

        return;
    }


    /* -----------------------------------------
       18–20 EARS
    ----------------------------------------- */

    if (
        time >= 18 &&
        time < 20
    ) {

        setOpacity(crown, 1);
        setOpacity(eyes, 1);

        setOpacity(
            ears,
            between(time, 18, 20)
        );

        return;
    }


    /* -----------------------------------------
       20–22 TRUNK
    ----------------------------------------- */

    if (
        time >= 20 &&
        time < 22
    ) {

        setOpacity(crown, 1);
        setOpacity(eyes, 1);
        setOpacity(ears, 1);

        setOpacity(
            trunk,
            between(time, 20, 22)
        );

        return;
    }


    /* -----------------------------------------
       22–24 FACE
    ----------------------------------------- */

    if (
        time >= 22 &&
        time < 24
    ) {

        setOpacity(crown, 1);
        setOpacity(eyes, 1);
        setOpacity(ears, 1);
        setOpacity(trunk, 1);

        setOpacity(
            face,
            between(time, 22, 24)
        );

        return;
    }


    /* -----------------------------------------
       24–26 HANDS
    ----------------------------------------- */

    if (
        time >= 24 &&
        time < 26
    ) {

        setOpacity(crown, 1);
        setOpacity(eyes, 1);
        setOpacity(ears, 1);
        setOpacity(trunk, 1);
        setOpacity(face, 1);

        const p =
            between(time, 24, 26);


        if (p < 0.5) {

            setOpacity(
                leftHand,
                p * 2
            );

            setOpacity(
                rightHand,
                0
            );

        } else {

            setOpacity(
                leftHand,
                1
            );

            setOpacity(
                rightHand,
                (p - 0.5) * 2
            );
        }

        return;
    }


    /* -----------------------------------------
       26–28 ORNAMENTS
    ----------------------------------------- */

    if (
        time >= 26 &&
        time < 28
    ) {

        setOpacity(crown, 1);
        setOpacity(eyes, 1);
        setOpacity(ears, 1);
        setOpacity(trunk, 1);
        setOpacity(face, 1);

        setOpacity(leftHand, 1);
        setOpacity(rightHand, 1);

        setOpacity(
            ornaments,
            between(time, 26, 28)
        );

        return;
    }


    /* -----------------------------------------
       28+ COMPLETE GANESHA
    ----------------------------------------- */

    if (time >= 28) {

        /*
         * Individual reveal layers disappear.
         * Complete image becomes the final
         * perfectly aligned idol.
         */

        setOpacity(crown, 0);
        setOpacity(eyes, 0);
        setOpacity(ears, 0);
        setOpacity(trunk, 0);
        setOpacity(face, 0);

        setOpacity(leftHand, 0);
        setOpacity(rightHand, 0);
        setOpacity(ornaments, 0);


        setOpacity(
            ganeshaBase,
            1
        );
    }
}


/* =========================================================
   DIYAS
   30–32 SECONDS
========================================================= */

function animateDiyas(time) {

    if (
        time >= 30 &&
        time < 32
    ) {

        const p =
            between(time, 30, 32);

        setOpacity(
            leftDiya,
            p
        );

        setOpacity(
            rightDiya,
            p
        );

        leftDiya.style.transform =
            `
            translateY(${30 - p * 30}px)
            scale(${0.75 + p * 0.25})
            `;

        rightDiya.style.transform =
            `
            translateY(${30 - p * 30}px)
            scale(${0.75 + p * 0.25})
            `;

        return;
    }


    if (time >= 32) {

        setOpacity(leftDiya, 1);
        setOpacity(rightDiya, 1);

        leftDiya.style.transform =
            `translateY(0) scale(1)`;

        rightDiya.style.transform =
            `translateY(0) scale(1)`;
    }
}


/* =========================================================
   FINAL GLOW
   30+ SECONDS
========================================================= */

function animateFinalGlow(time) {

    if (time < 30) {

        document.documentElement
            .style
            .setProperty(
                "--final-glow",
                "0"
            );

        return;
    }


    const pulse =
        0.65 +
        Math.sin(time * 2) * 0.12;


    document.documentElement
        .style
        .setProperty(
            "--final-glow",
            pulse
        );
}


/* =========================================================
   HAPPY GANESH CHATURTHI
   34–36 SECONDS
========================================================= */

function animateWish(time) {

    if (
        time >= 34 &&
        time < 36
    ) {

        const p =
            between(time, 34, 36);

        setOpacity(
            wish,
            p
        );

        wish.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.92 + p * 0.08})
            `;

        return;
    }


    if (time >= 36) {

        setOpacity(wish, 1);

        wish.style.transform =
            `
            translate(-50%, -50%)
            scale(1)
            `;
    }
}


/* =========================================================
   FINAL BLESSING
   36+ SECONDS
========================================================= */

function animateBlessing(time) {

    /*
     * Keep the final blessing subtle.
     * It appears after the wishes without
     * removing the main Ganesha experience.
     */

    if (time < 36) {

        setOpacity(
            blessing,
            0
        );

        return;
    }


    /*
     * Very subtle final overlay.
     */

    if (time >= 36 && time < 38) {

        const p =
            between(time, 36, 38);

        setOpacity(
            blessing,
            p * 0.88
        );

        return;
    }


    if (time >= 38) {

        setOpacity(
            blessing,
            0.88
        );
    }
}


/* =========================================================
   MAIN TIMELINE
========================================================= */

function update(time) {

    animateLight(time);

    animateLotus(time);

    animateSeat(time);

    animateGanesha(time);

    animateDiyas(time);

    animateFinalGlow(time);

    animateWish(time);

    animateBlessing(time);
}


/* =========================================================
   START EXPERIENCE
========================================================= */

resetAll();


const startTime =
    performance.now();


function animationLoop(now) {

    const elapsed =
        (now - startTime) / 1000;


    update(elapsed);


    requestAnimationFrame(
        animationLoop
    );
}


requestAnimationFrame(
    animationLoop
);


/* =========================================================
   IMAGE ERROR CHECK
========================================================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                console.error(
                    "Could not load:",
                    image.src
                );

            }
        );

    });

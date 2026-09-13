// ============================================================
// GANESH CHATURTHI 2026
// FINAL AUTOMATIC STORYBOARD
// ============================================================


const divineLight =
    document.getElementById("divineLight");

const lightExpand =
    document.getElementById("lightExpand");

const particleImage =
    document.getElementById("particleImage");

const goldenParticles =
    document.getElementById("goldenParticles");

const divineGlow =
    document.getElementById("divineGlow");

const lotusCenter =
    document.getElementById("lotusCenter");

const lotusOpening =
    document.getElementById("lotusOpening");

const lotusFull =
    document.getElementById("lotusFull");

const goldenSeat =
    document.getElementById("goldenSeat");

const ganeshaCrown =
    document.getElementById("ganeshaCrown");

const ganeshaEyes =
    document.getElementById("ganeshaEyes");

const ganeshaEars =
    document.getElementById("ganeshaEars");

const ganeshaTrunk =
    document.getElementById("ganeshaTrunk");

const ganeshaFace =
    document.getElementById("ganeshaFace");

const ganeshaLeftHand =
    document.getElementById("ganeshaLeftHand");

const ganeshaRightHand =
    document.getElementById("ganeshaRightHand");

const ganeshaOrnaments =
    document.getElementById("ganeshaOrnaments");

const ganeshaComplete =
    document.getElementById("ganeshaComplete");

const leftDiya =
    document.getElementById("leftDiya");

const rightDiya =
    document.getElementById("rightDiya");

const stageText =
    document.getElementById("stageText");

const finalWish =
    document.getElementById("finalWish");

const finalBlessing =
    document.getElementById("finalBlessing");


// ============================================================
// HELPERS
// ============================================================

function clamp(
    value,
    min = 0,
    max = 1
) {

    return Math.min(
        Math.max(
            value,
            min
        ),
        max
    );
}


function ease(
    value
) {

    value =
        clamp(value);

    return (
        value *
        value *
        (3 - 2 * value)
    );
}


function progress(
    time,
    start,
    end
) {

    return ease(
        (time - start) /
        (end - start)
    );
}


function opacity(
    element,
    value
) {

    if (!element)
        return;

    element.style.opacity =
        String(
            clamp(value)
        );
}


function scale(
    element,
    value
) {

    if (!element)
        return;

    element.style.transform =
        `
        translate(-50%, -50%)
        scale(${value})
        `;
}


function text(
    value
) {

    stageText.textContent =
        value;

    stageText.style.opacity =
        value ? "1" : "0";
}


// ============================================================
// HIDE GANESHA PARTS
// ============================================================

function hideGanesha() {

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

    ].forEach(
        element => {

            opacity(
                element,
                0
            );

        }
    );
}


// ============================================================
// LOTUS
// ============================================================

function animateLotus(
    time
) {

    opacity(
        lotusCenter,
        0
    );

    opacity(
        lotusOpening,
        0
    );

    opacity(
        lotusFull,
        0
    );


    // 6–8
    if (
        time >= 6 &&
        time < 8
    ) {

        const p =
            progress(
                time,
                6,
                8
            );

        opacity(
            lotusCenter,
            p
        );

        scale(
            lotusCenter,
            0.65 +
            p * 0.35
        );

        return;
    }


    // 8–10
    if (
        time >= 8 &&
        time < 10
    ) {

        const p =
            progress(
                time,
                8,
                10
            );

        opacity(
            lotusOpening,
            p
        );

        scale(
            lotusOpening,
            0.78 +
            p * 0.22
        );

        return;
    }


    // 10+
    if (
        time >= 10
    ) {

        opacity(
            lotusFull,
            1
        );

        scale(
            lotusFull,
            1
        );
    }
}


// ============================================================
// LIGHT
// ============================================================

function animateLight(
    time
) {

    opacity(
        divineLight,
        0
    );

    opacity(
        lightExpand,
        0
    );

    opacity(
        particleImage,
        0
    );

    opacity(
        goldenParticles,
        0
    );


    // 2–4
    if (
        time >= 2 &&
        time < 4
    ) {

        const p =
            progress(
                time,
                2,
                4
            );

        opacity(
            divineLight,
            p
        );

        scale(
            divineLight,
            0.3 +
            p * 1.4
        );

        return;
    }


    // 4–6
    if (
        time >= 4 &&
        time < 6
    ) {

        const p =
            progress(
                time,
                4,
                6
            );

        opacity(
            divineLight,
            0.9
        );

        opacity(
            lightExpand,
            p
        );

        opacity(
            particleImage,
            p
        );

        opacity(
            goldenParticles,
            p
        );

        scale(
            lightExpand,
            0.7 +
            p * 0.5
        );

        return;
    }


    // 6+
    if (
        time >= 6
    ) {

        opacity(
            divineLight,
            0.4
        );

        opacity(
            lightExpand,
            0.35
        );

        opacity(
            particleImage,
            0.65
        );

        opacity(
            goldenParticles,
            0.55
        );
    }
}


// ============================================================
// GOLDEN SEAT
// ============================================================

function animateSeat(
    time
) {

    opacity(
        goldenSeat,
        0
    );


    if (
        time >= 12 &&
        time < 14
    ) {

        const p =
            progress(
                time,
                12,
                14
            );

        opacity(
            goldenSeat,
            p
        );

        goldenSeat.style.transform =
            `
            translate(-50%, -50%)
            scaleY(${0.05 + p * 0.95})
            `;

        return;
    }


    if (
        time >= 14
    ) {

        opacity(
            goldenSeat,
            1
        );

        goldenSeat.style.transform =
            `
            translate(-50%, -50%)
            scaleY(1)
            `;
    }
}


// ============================================================
// GANESHA
// ============================================================

function animateGanesha(
    time
) {

    hideGanesha();


    // 14–16 CROWN
    if (
        time >= 14 &&
        time < 16
    ) {

        const p =
            progress(
                time,
                14,
                16
            );

        opacity(
            ganeshaCrown,
            p
        );

        text(
            "Golden Crown"
        );

        return;
    }


    // 16–18 EYES
    if (
        time >= 16 &&
        time < 18
    ) {

        opacity(
            ganeshaCrown,
            1
        );

        opacity(
            ganeshaEyes,
            progress(
                time,
                16,
                18
            )
        );

        text(
            "Divine Eyes"
        );

        return;
    }


    // 18–20 EARS
    if (
        time >= 18 &&
        time < 20
    ) {

        opacity(
            ganeshaCrown,
            1
        );

        opacity(
            ganeshaEyes,
            1
        );

        opacity(
            ganeshaEars,
            progress(
                time,
                18,
                20
            )
        );

        text(
            "Sacred Ears"
        );

        return;
    }


    // 20–22 TRUNK
    if (
        time >= 20 &&
        time < 22
    ) {

        opacity(
            ganeshaCrown,
            1
        );

        opacity(
            ganeshaEyes,
            1
        );

        opacity(
            ganeshaEars,
            1
        );

        opacity(
            ganeshaTrunk,
            progress(
                time,
                20,
                22
            )
        );

        text(
            "Sacred Trunk"
        );

        return;
    }


    // 22–24 FACE
    if (
        time >= 22 &&
        time < 24
    ) {

        opacity(
            ganeshaCrown,
            1
        );

        opacity(
            ganeshaEyes,
            1
        );

        opacity(
            ganeshaEars,
            1
        );

        opacity(
            ganeshaTrunk,
            1
        );

        opacity(
            ganeshaFace,
            progress(
                time,
                22,
                24
            )
        );

        text(
            "Divine Face"
        );

        return;
    }


    // 24–26 HANDS
    if (
        time >= 24 &&
        time < 26
    ) {

        opacity(
            ganeshaCrown,
            1
        );

        opacity(
            ganeshaEyes,
            1
        );

        opacity(
            ganeshaEars,
            1
        );

        opacity(
            ganeshaTrunk,
            1
        );

        opacity(
            ganeshaFace,
            1
        );


        const p =
            progress(
                time,
                24,
                26
            );


        // LEFT HAND
        if (
            p < 0.5
        ) {

            opacity(
                ganeshaLeftHand,
                p * 2
            );

            opacity(
                ganeshaRightHand,
                0
            );

        }

        // RIGHT HAND
        else {

            opacity(
                ganeshaLeftHand,
                1
            );

            opacity(
                ganeshaRightHand,
                (p - 0.5) * 2
            );
        }


        text(
            "Blessing Hands"
        );

        return;
    }


    // 26–28 ORNAMENTS
    if (
        time >= 26 &&
        time < 28
    ) {

        opacity(
            ganeshaCrown,
            1
        );

        opacity(
            ganeshaEyes,
            1
        );

        opacity(
            ganeshaEars,
            1
        );

        opacity(
            ganeshaTrunk,
            1
        );

        opacity(
            ganeshaFace,
            1
        );

        opacity(
            ganeshaLeftHand,
            1
        );

        opacity(
            ganeshaRightHand,
            1
        );

        opacity(
            ganeshaOrnaments,
            progress(
                time,
                26,
                28
            )
        );

        text(
            "Sacred Ornaments"
        );

        return;
    }


    // 28+ COMPLETE
    if (
        time >= 28
    ) {

        opacity(
            ganeshaComplete,
            1
        );

        text(
            time < 32
                ? "Complete Ganesha"
                : "Final Darshan"
        );
    }
}


// ============================================================
// AURA
// ============================================================

function animateAura(
    time
) {

    if (
        time < 28
    ) {

        opacity(
            divineGlow,
            0
        );

        return;
    }


    if (
        time < 30
    ) {

        const p =
            progress(
                time,
                28,
                30
            );

        opacity(
            divineGlow,
            p
        );

        divineGlow.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.7 + p * 0.4})
            `;

        return;
    }


    const breathe =
        0.9 +
        Math.sin(
            time * 1.5
        ) * 0.1;


    opacity(
        divineGlow,
        breathe
    );

    divineGlow.style.transform =
        `
        translate(-50%, -50%)
        scale(${1 + Math.sin(time) * 0.04})
        `;
}


// ============================================================
// DIYAS
// ============================================================

function animateDiyas(
    time
) {

    opacity(
        leftDiya,
        0
    );

    opacity(
        rightDiya,
        0
    );


    // 30–32
    if (
        time >= 30 &&
        time < 32
    ) {

        const p =
            progress(
                time,
                30,
                32
            );


        opacity(
            leftDiya,
            p
        );

        opacity(
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


    if (
        time >= 32
    ) {

        opacity(
            leftDiya,
            1
        );

        opacity(
            rightDiya,
            1
        );
    }
}


// ============================================================
// FINAL WISH
// ============================================================

function animateWish(
    time
) {

    opacity(
        finalWish,
        0
    );


    if (
        time >= 34 &&
        time < 36
    ) {

        const p =
            progress(
                time,
                34,
                36
            );

        opacity(
            finalWish,
            p
        );

        finalWish.style.transform =
            `
            translateY(-50%)
            translateX(${40 - p * 40}px)
            `;

        return;
    }


    if (
        time >= 36
    ) {

        opacity(
            finalWish,
            1
        );

        finalWish.style.transform =
            `
            translateY(-50%)
            translateX(0)
            `;
    }
}


// ============================================================
// FINAL BLESSING
// ============================================================

function animateBlessing(
    time
) {

    opacity(
        finalBlessing,
        0
    );


    if (
        time >= 38 &&
        time < 40
    ) {

        opacity(
            finalBlessing,
            progress(
                time,
                38,
                40
            )
        );

        return;
    }


    if (
        time >= 40
    ) {

        opacity(
            finalBlessing,
            1
        );
    }
}


// ============================================================
// MAIN TIMELINE
// ============================================================

function update(
    time
) {

    // --------------------------------------------------------
    // 0–2
    // BLACK
    // --------------------------------------------------------

    if (
        time < 2
    ) {

        text("");

    }


    // --------------------------------------------------------
    // 2–4
    // LIGHT
    // --------------------------------------------------------

    else if (
        time < 4
    ) {

        text(
            "A Divine Light"
        );

    }


    // --------------------------------------------------------
    // 4–6
    // PARTICLES
    // --------------------------------------------------------

    else if (
        time < 6
    ) {

        text(
            "Divine Energy"
        );

    }


    // --------------------------------------------------------
    // 6–8
    // LOTUS CENTER
    // --------------------------------------------------------

    else if (
        time < 8
    ) {

        text(
            "Lotus Awakens"
        );

    }


    // --------------------------------------------------------
    // 8–10
    // LOTUS OPENING
    // --------------------------------------------------------

    else if (
        time < 10
    ) {

        text(
            "Lotus Petals Open"
        );

    }


    // --------------------------------------------------------
    // 10–12
    // FULL LOTUS
    // --------------------------------------------------------

    else if (
        time < 12
    ) {

        text(
            "Sacred Lotus"
        );

    }


    // --------------------------------------------------------
    // 12–14
    // SEAT
    // --------------------------------------------------------

    else if (
        time < 14
    ) {

        text(
            "Divine Seat"
        );

    }


    // --------------------------------------------------------
    // 34+
    // FINAL
    // --------------------------------------------------------

    else {

        if (
            time < 36
        ) {

            text("");

        } else {

            text("");
        }
    }


    // Run systems
    animateLight(time);

    animateLotus(time);

    animateSeat(time);

    animateGanesha(time);

    animateAura(time);

    animateDiyas(time);

    animateWish(time);

    animateBlessing(time);
}


// ============================================================
// AUTOMATIC START
// ============================================================

const start =
    performance.now();


function loop(
    now
) {

    const time =
        (
            now -
            start
        ) / 1000;


    update(
        time
    );


    requestAnimationFrame(
        loop
    );
}


requestAnimationFrame(
    loop
);


// ============================================================
// IMAGE LOAD CHECK
// ============================================================

const images =
    document.querySelectorAll(
        "img"
    );


images.forEach(
    image => {

        image.addEventListener(
            "error",
            () => {

                console.error(
                    "Image failed:",
                    image.src
                );

            }
        );

    }
);

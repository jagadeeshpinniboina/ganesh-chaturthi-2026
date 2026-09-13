// ============================================================
// GANESH CHATURTHI 2026
// AUTOMATIC CINEMATIC DARSHAN
// BLACK BACKGROUND • LOTUS • GANESHA • DIYAS
// ============================================================


// ============================================================
// ELEMENTS
// ============================================================

const divineLight =
    document.getElementById("divineLight");

const energyRing =
    document.getElementById("energyRing");

const particles =
    document.getElementById("particles");

const lotus =
    document.getElementById("lotus");

const goldenSeat =
    document.getElementById("goldenSeat");

const ganeshaContainer =
    document.getElementById("ganeshaContainer");

const ganeshaImage =
    document.getElementById("ganeshaImage");

const leftDiya =
    document.getElementById("leftDiya");

const rightDiya =
    document.getElementById("rightDiya");

const divineAura =
    document.getElementById("divineAura");

const stageText =
    document.getElementById("stageText");

const finalMessage =
    document.getElementById("finalMessage");


// ============================================================
// INITIAL STATE
// ============================================================

divineLight.style.opacity = "0";
energyRing.style.opacity = "0";
particles.style.opacity = "0";

lotus.style.opacity = "0";
goldenSeat.style.opacity = "0";

ganeshaContainer.style.opacity = "0";

leftDiya.style.opacity = "0";
rightDiya.style.opacity = "0";

divineAura.style.opacity = "0";

finalMessage.style.opacity = "0";
finalMessage.style.visibility = "hidden";

stageText.style.opacity = "0";


// ============================================================
// GANESHA VISUAL LAYERS
// ============================================================

const layers = {};

const layerDefinitions = {

    crown: {
        clip:
            "polygon(27% 0%, 73% 0%, 82% 19%, 18% 19%)"
    },

    eyes: {
        clip:
            "polygon(29% 17%, 71% 17%, 75% 32%, 25% 32%)"
    },

    ears: {
        clip:
            "polygon(6% 19%, 94% 19%, 96% 45%, 4% 45%)"
    },

    trunk: {
        clip:
            "polygon(39% 25%, 61% 25%, 68% 57%, 61% 67%, 48% 70%, 37% 59%, 34% 45%)"
    },

    face: {
        clip:
            "polygon(23% 17%, 77% 17%, 80% 56%, 67% 66%, 33% 66%, 20% 56%)"
    },

    leftHand: {
        clip:
            "polygon(0% 25%, 34% 27%, 38% 65%, 0% 65%)"
    },

    rightHand: {
        clip:
            "polygon(66% 27%, 100% 25%, 100% 65%, 62% 65%)"
    },

    ornaments: {
        clip:
            "polygon(18% 45%, 82% 45%, 91% 82%, 82% 97%, 18% 97%, 9% 82%)"
    },

    complete: {
        clip:
            "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)"
    }

};


// ============================================================
// CREATE LAYER
// ============================================================

function createLayer(
    name,
    clip
) {

    const layer =
        document.createElement("img");

    layer.src =
        ganeshaImage.src;

    layer.alt = "";

    layer.className =
        "ganeshaLayer";

    layer.dataset.layer =
        name;

    layer.style.position =
        "absolute";

    layer.style.inset =
        "0";

    layer.style.width =
        "100%";

    layer.style.height =
        "100%";

    layer.style.objectFit =
        "contain";

    layer.style.clipPath =
        clip;

    layer.style.webkitClipPath =
        clip;

    layer.style.opacity =
        "0";

    layer.style.transform =
        "scale(1.03)";

    layer.style.transition =
        "opacity 0.9s ease, transform 1.2s cubic-bezier(.22,1,.36,1)";

    layer.style.pointerEvents =
        "none";

    layer.style.userSelect =
        "none";

    ganeshaContainer.appendChild(
        layer
    );

    layers[name] =
        layer;
}


// ============================================================
// CREATE ALL LAYERS
// ============================================================

Object.entries(
    layerDefinitions
).forEach(
    ([name, definition]) => {

        createLayer(
            name,
            definition.clip
        );

    }
);


// Hide original image.
// The generated layers will display the image.
ganeshaImage.style.opacity =
    "0";


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


function smooth(
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


function stageProgress(
    time,
    start,
    end
) {

    return smooth(
        (time - start) /
        (end - start)
    );
}


function revealLayer(
    name,
    amount
) {

    const layer =
        layers[name];

    if (!layer)
        return;

    const p =
        clamp(amount);

    layer.style.opacity =
        String(p);

    layer.style.transform =
        `
        scale(
            ${1.08 - p * 0.08}
        )
        `;
}


function hideAllLayers() {

    Object.values(
        layers
    ).forEach(
        layer => {

            layer.style.opacity =
                "0";

        }
    );
}


function showText(
    text
) {

    stageText.textContent =
        text;

    stageText.style.opacity =
        text ? "1" : "0";
}


// ============================================================
// LOTUS ANIMATION
// ============================================================

function animateLotus(
    time
) {

    const petals =
        document.querySelectorAll(
            ".lotus-petal"
        );

    const center =
        document.querySelector(
            ".lotus-center"
        );


    // --------------------------------------------------------
    // 6–8s
    // LOTUS CENTER
    // --------------------------------------------------------

    if (
        time >= 6 &&
        time < 8
    ) {

        const p =
            stageProgress(
                time,
                6,
                8
            );

        lotus.style.opacity =
            String(p);

        lotus.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.15 + p * 0.85})
            `;


        if (center) {

            center.style.opacity =
                String(p);

        }


        petals.forEach(
            petal => {

                petal.style.opacity =
                    "0";

            }
        );

        return;
    }


    // --------------------------------------------------------
    // 8–10s
    // PETALS OPEN ONE BY ONE
    // --------------------------------------------------------

    if (
        time >= 8 &&
        time < 10
    ) {

        const p =
            stageProgress(
                time,
                8,
                10
            );

        lotus.style.opacity =
            "1";

        lotus.style.transform =
            `
            translate(-50%, -50%)
            scale(${1 + p * 0.08})
            `;


        if (center) {

            center.style.opacity =
                "1";

        }


        petals.forEach(
            (petal, index) => {

                const delay =
                    index * 0.075;

                const petalP =
                    clamp(
                        (p - delay) /
                        (1 - delay)
                    );

                const open =
                    smooth(
                        petalP
                    );

                const rotations = [
                    -58,
                    -42,
                    -25,
                    -9,
                    9,
                    25,
                    42,
                    58
                ];

                const rotation =
                    rotations[index];


                petal.style.opacity =
                    String(open);


                petal.style.transform =
                    `
                    translateX(-50%)
                    rotate(${rotation}deg)
                    translateY(${25 - open * 25}px)
                    scaleY(${0.25 + open * 0.75})
                    `;
            }
        );

        return;
    }


    // --------------------------------------------------------
    // 10s+
    // FULL LOTUS
    // --------------------------------------------------------

    if (
        time >= 10
    ) {

        lotus.style.opacity =
            "1";

        lotus.style.transform =
            `
            translate(-50%, -50%)
            scale(1.08)
            `;


        if (center) {

            center.style.opacity =
                "1";

        }


        petals.forEach(
            (petal, index) => {

                const rotations = [
                    -58,
                    -42,
                    -25,
                    -9,
                    9,
                    25,
                    42,
                    58
                ];

                petal.style.opacity =
                    "1";

                petal.style.transform =
                    `
                    translateX(-50%)
                    rotate(${rotations[index]}deg)
                    translateY(0)
                    scaleY(1)
                    `;
            }
        );
    }
}


// ============================================================
// DIVINE LIGHT
// ============================================================

function animateDivineLight(
    time
) {

    // 0–2
    if (time < 2) {

        divineLight.style.opacity =
            "0";

        return;
    }


    // 2–4
    if (time < 4) {

        const p =
            stageProgress(
                time,
                2,
                4
            );

        divineLight.style.opacity =
            String(p);

        divineLight.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.15 + p * 2})
            `;

        return;
    }


    // 4+
    divineLight.style.opacity =
        "1";

    const breathing =
        1 +
        Math.sin(
            time * 2
        ) * 0.08;

    divineLight.style.transform =
        `
        translate(-50%, -50%)
        scale(${2.5 * breathing})
        `;
}


// ============================================================
// ENERGY RING
// ============================================================

function animateEnergyRing(
    time
) {

    if (
        time < 4
    ) {

        energyRing.style.opacity =
            "0";

        return;
    }


    if (
        time < 6
    ) {

        const p =
            stageProgress(
                time,
                4,
                6
            );

        energyRing.style.opacity =
            String(
                0.3 +
                p * 0.6
            );

        energyRing.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.5 + p * 6})
            `;

        return;
    }


    energyRing.style.opacity =
        "0.65";

    energyRing.style.transform =
        `
        translate(-50%, -50%)
        scale(6.5)
        `;
}


// ============================================================
// PARTICLES
// ============================================================

function animateParticles(
    time
) {

    if (
        time < 4
    ) {

        particles.style.opacity =
            "0";

        return;
    }


    if (
        time < 6
    ) {

        const p =
            stageProgress(
                time,
                4,
                6
            );

        particles.style.opacity =
            String(
                p * 0.95
            );

    } else {

        particles.style.opacity =
            "0.9";

    }


    const movement =
        time * 18;


    particles.style.backgroundPosition =
        `
        ${movement}px ${-movement}px,
        ${-movement * 0.7}px ${movement * 0.8}px,
        ${movement * 0.4}px ${-movement * 1.2}px
        `;
}


// ============================================================
// GANESHA REVEAL
// ============================================================

function animateGanesha(
    time
) {

    // --------------------------------------------------------
    // Before 14s
    // Ganesha completely hidden
    // --------------------------------------------------------

    if (
        time < 14
    ) {

        ganeshaContainer.style.opacity =
            "0";

        hideAllLayers();

        return;
    }


    ganeshaContainer.style.opacity =
        "1";


    // --------------------------------------------------------
    // 14–16
    // CROWN
    // --------------------------------------------------------

    if (
        time < 16
    ) {

        const p =
            stageProgress(
                time,
                14,
                16
            );

        hideAllLayers();

        revealLayer(
            "crown",
            p
        );

        showText(
            "Golden Crown"
        );

        return;
    }


    // --------------------------------------------------------
    // 16–18
    // EYES
    // --------------------------------------------------------

    if (
        time < 18
    ) {

        const p =
            stageProgress(
                time,
                16,
                18
            );

        hideAllLayers();

        revealLayer(
            "crown",
            1
        );

        revealLayer(
            "eyes",
            p
        );

        showText(
            "Divine Eyes"
        );

        return;
    }


    // --------------------------------------------------------
    // 18–20
    // EARS
    // --------------------------------------------------------

    if (
        time < 20
    ) {

        const p =
            stageProgress(
                time,
                18,
                20
            );

        hideAllLayers();

        revealLayer(
            "crown",
            1
        );

        revealLayer(
            "eyes",
            1
        );

        revealLayer(
            "ears",
            p
        );

        showText(
            "Sacred Ears"
        );

        return;
    }


    // --------------------------------------------------------
    // 20–22
    // TRUNK
    // --------------------------------------------------------

    if (
        time < 22
    ) {

        const p =
            stageProgress(
                time,
                20,
                22
            );

        hideAllLayers();

        revealLayer(
            "crown",
            1
        );

        revealLayer(
            "eyes",
            1
        );

        revealLayer(
            "ears",
            1
        );

        revealLayer(
            "trunk",
            p
        );

        showText(
            "Sacred Trunk"
        );

        return;
    }


    // --------------------------------------------------------
    // 22–24
    // FACE
    // --------------------------------------------------------

    if (
        time < 24
    ) {

        const p =
            stageProgress(
                time,
                22,
                24
            );

        hideAllLayers();

        revealLayer(
            "crown",
            1
        );

        revealLayer(
            "eyes",
            1
        );

        revealLayer(
            "ears",
            1
        );

        revealLayer(
            "trunk",
            1
        );

        revealLayer(
            "face",
            p
        );

        showText(
            "Divine Face"
        );

        return;
    }


    // --------------------------------------------------------
    // 24–26
    // HANDS ONE BY ONE
    // --------------------------------------------------------

    if (
        time < 26
    ) {

        const p =
            stageProgress(
                time,
                24,
                26
            );

        hideAllLayers();

        revealLayer(
            "crown",
            1
        );

        revealLayer(
            "eyes",
            1
        );

        revealLayer(
            "ears",
            1
        );

        revealLayer(
            "trunk",
            1
        );

        revealLayer(
            "face",
            1
        );


        // Left hand first
        if (
            p < 0.5
        ) {

            revealLayer(
                "leftHand",
                p * 2
            );

            revealLayer(
                "rightHand",
                0
            );

        }

        // Right hand second
        else {

            revealLayer(
                "leftHand",
                1
            );

            revealLayer(
                "rightHand",
                (p - 0.5) * 2
            );

        }


        showText(
            "Blessing Hands"
        );

        return;
    }


    // --------------------------------------------------------
    // 26–28
    // ORNAMENTS + CLOTHING
    // --------------------------------------------------------

    if (
        time < 28
    ) {

        const p =
            stageProgress(
                time,
                26,
                28
            );

        hideAllLayers();

        revealLayer(
            "crown",
            1
        );

        revealLayer(
            "eyes",
            1
        );

        revealLayer(
            "ears",
            1
        );

        revealLayer(
            "trunk",
            1
        );

        revealLayer(
            "face",
            1
        );

        revealLayer(
            "leftHand",
            1
        );

        revealLayer(
            "rightHand",
            1
        );

        revealLayer(
            "ornaments",
            p
        );

        showText(
            "Sacred Ornaments"
        );

        return;
    }


    // --------------------------------------------------------
    // 28–30
    // COMPLETE GANESHA
    // --------------------------------------------------------

    if (
        time < 30
    ) {

        const p =
            stageProgress(
                time,
                28,
                30
            );

        hideAllLayers();

        revealLayer(
            "complete",
            p
        );

        divineAura.style.opacity =
            String(
                0.4 +
                p * 0.45
            );

        showText(
            "Complete Ganesha"
        );

        return;
    }


    // --------------------------------------------------------
    // 30+
    // COMPLETE
    // --------------------------------------------------------

    revealLayer(
        "complete",
        1
    );

    ganeshaContainer.style.opacity =
        "1";
}


// ============================================================
// DIYAS
// ============================================================

function animateDiyas(
    time
) {

    // Before 30s
    if (
        time < 30
    ) {

        leftDiya.style.opacity =
            "0";

        rightDiya.style.opacity =
            "0";

        return;
    }


    // 30–32
    if (
        time < 32
    ) {

        const p =
            stageProgress(
                time,
                30,
                32
            );

        leftDiya.style.opacity =
            String(p);

        rightDiya.style.opacity =
            String(p);


        const movement =
            30 -
            p * 30;

        const scale =
            0.75 +
            p * 0.25;


        leftDiya.style.transform =
            `
            translateY(${movement}px)
            scale(${scale})
            `;

        rightDiya.style.transform =
            `
            translateY(${movement}px)
            scale(${scale})
            `;

        return;
    }


    // 32+
    leftDiya.style.opacity =
        "1";

    rightDiya.style.opacity =
        "1";

    leftDiya.style.transform =
        `
        translateY(0)
        scale(1)
        `;

    rightDiya.style.transform =
        `
        translateY(0)
        scale(1)
        `;
}


// ============================================================
// DIVINE AURA
// ============================================================

function animateAura(
    time
) {

    if (
        time < 14
    ) {

        divineAura.style.opacity =
            "0";

        return;
    }


    if (
        time < 28
    ) {

        const p =
            stageProgress(
                time,
                14,
                28
            );

        divineAura.style.opacity =
            String(
                p * 0.55
            );

        return;
    }


    divineAura.style.opacity =
        String(
            0.85 +
            Math.sin(
                time * 1.2
            ) * 0.08
        );
}


// ============================================================
// FINAL MESSAGE
// ============================================================

function animateFinalMessage(
    time
) {

    // Before 34s
    if (
        time < 34
    ) {

        finalMessage.style.opacity =
            "0";

        finalMessage.style.visibility =
            "hidden";

        return;
    }


    // 34–36
    if (
        time < 36
    ) {

        const p =
            stageProgress(
                time,
                34,
                36
            );

        finalMessage.style.visibility =
            "visible";

        finalMessage.style.opacity =
            String(p);

        return;
    }


    // 36+
    finalMessage.style.visibility =
        "visible";

    finalMessage.style.opacity =
        "1";
}


// ============================================================
// MAIN TIMELINE
// ============================================================

function updateExperience(
    time
) {

    // --------------------------------------------------------
    // 0–2
    // BLACK SCREEN
    // --------------------------------------------------------

    if (
        time < 2
    ) {

        showText("");

        ganeshaContainer.style.opacity =
            "0";

        lotus.style.opacity =
            "0";

        goldenSeat.style.opacity =
            "0";

        divineAura.style.opacity =
            "0";

        leftDiya.style.opacity =
            "0";

        rightDiya.style.opacity =
            "0";

        finalMessage.style.opacity =
            "0";

        finalMessage.style.visibility =
            "hidden";

        hideAllLayers();
    }


    // --------------------------------------------------------
    // 2–4
    // DIVINE LIGHT
    // --------------------------------------------------------

    else if (
        time < 4
    ) {

        showText(
            "A Divine Light"
        );

        particles.style.opacity =
            "0";
    }


    // --------------------------------------------------------
    // 4–6
    // LIGHT + PARTICLES
    // --------------------------------------------------------

    else if (
        time < 6
    ) {

        showText(
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

        showText(
            "Lotus Awakens"
        );
    }


    // --------------------------------------------------------
    // 8–10
    // LOTUS PETALS
    // --------------------------------------------------------

    else if (
        time < 10
    ) {

        showText(
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

        showText(
            "Sacred Lotus"
        );
    }


    // --------------------------------------------------------
    // 12–14
    // GOLDEN SEAT
    // --------------------------------------------------------

    else if (
        time < 14
    ) {

        showText(
            "Divine Seat"
        );

        const p =
            stageProgress(
                time,
                12,
                14
            );

        goldenSeat.style.opacity =
            String(p);

        goldenSeat.style.transform =
            `
            translate(-50%, -50%)
            scaleY(${0.05 + p * 0.95})
            `;
    }


    // --------------------------------------------------------
    // 14–16
    // CROWN
    // --------------------------------------------------------

    else if (
        time < 16
    ) {

        showText(
            "Golden Crown"
        );
    }


    // --------------------------------------------------------
    // 16–18
    // EYES
    // --------------------------------------------------------

    else if (
        time < 18
    ) {

        showText(
            "Divine Eyes"
        );
    }


    // --------------------------------------------------------
    // 18–20
    // EARS
    // --------------------------------------------------------

    else if (
        time < 20
    ) {

        showText(
            "Sacred Ears"
        );
    }


    // --------------------------------------------------------
    // 20–22
    // TRUNK
    // --------------------------------------------------------

    else if (
        time < 22
    ) {

        showText(
            "Sacred Trunk"
        );
    }


    // --------------------------------------------------------
    // 22–24
    // FACE
    // --------------------------------------------------------

    else if (
        time < 24
    ) {

        showText(
            "Divine Face"
        );
    }


    // --------------------------------------------------------
    // 24–26
    // HANDS
    // --------------------------------------------------------

    else if (
        time < 26
    ) {

        showText(
            "Blessing Hands"
        );
    }


    // --------------------------------------------------------
    // 26–28
    // ORNAMENTS
    // --------------------------------------------------------

    else if (
        time < 28
    ) {

        showText(
            "Sacred Ornaments"
        );
    }


    // --------------------------------------------------------
    // 28–30
    // COMPLETE GANESHA
    // --------------------------------------------------------

    else if (
        time < 30
    ) {

        showText(
            "Complete Ganesha"
        );
    }


    // --------------------------------------------------------
    // 30–32
    // DIYAS
    // --------------------------------------------------------

    else if (
        time < 32
    ) {

        showText(
            "Divine Glow"
        );
    }


    // --------------------------------------------------------
    // 32–34
    // FINAL DARSHAN
    // --------------------------------------------------------

    else if (
        time < 34
    ) {

        showText(
            "Final Darshan"
        );
    }


    // --------------------------------------------------------
    // 34–36
    // BLESSING
    // --------------------------------------------------------

    else {

        showText("");
    }


    // Run visual systems
    animateDivineLight(
        time
    );

    animateEnergyRing(
        time
    );

    animateParticles(
        time
    );

    animateLotus(
        time
    );

    animateGanesha(
        time
    );

    animateDiyas(
        time
    );

    animateAura(
        time
    );

    animateFinalMessage(
        time
    );
}


// ============================================================
// START EXPERIENCE AUTOMATICALLY
// ============================================================

const startTime =
    performance.now();


function animationLoop(
    currentTime
) {

    const elapsed =
        (
            currentTime -
            startTime
        ) / 1000;


    updateExperience(
        elapsed
    );


    requestAnimationFrame(
        animationLoop
    );
}


requestAnimationFrame(
    animationLoop
);


// ============================================================
// IMAGE ERROR CHECK
// ============================================================

ganeshaImage.addEventListener(
    "error",
    () => {

        console.error(
            "ERROR: ganesha.png was not found."
        );

        showText(
            "ganesha.png not found"
        );

    }
);


// ============================================================
// RESPONSIVE
// ============================================================

window.addEventListener(
    "resize",
    () => {

        // Responsive sizing is handled by CSS.

    }
);

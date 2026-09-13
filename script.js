// ============================================================
// GANESH CHATURTHI 2026
// AUTOMATIC CINEMATIC DARSHAN
// Black Background • Lotus • Ganesha • Diyas
// ============================================================

const scene = document.getElementById("scene");

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
// HIDE IMAGE INITIALLY
// ============================================================

ganeshaContainer.style.opacity = "0";

leftDiya.style.opacity = "0";
rightDiya.style.opacity = "0";

lotus.style.opacity = "0";

goldenSeat.style.opacity = "0";

divineLight.style.opacity = "0";

energyRing.style.opacity = "0";

particles.style.opacity = "0";

divineAura.style.opacity = "0";

finalMessage.style.opacity = "0";
finalMessage.style.visibility = "hidden";


// ============================================================
// IMAGE LAYERS
// ============================================================
//
// Because we are using one complete Ganesha image,
// we create cinematic masked copies of the same image.
// This allows crown → eyes → ears → trunk → hands →
// ornaments → complete form to appear progressively.
//
// ============================================================

const layers = {};

const layerDefinitions = {

    crown: {
        clip:
            "polygon(28% 0%, 72% 0%, 82% 19%, 18% 19%)"
    },

    eyes: {
        clip:
            "polygon(30% 18%, 70% 18%, 75% 32%, 25% 32%)"
    },

    ears: {
        clip:
            "polygon(8% 19%, 92% 19%, 94% 43%, 6% 43%)"
    },

    trunk: {
        clip:
            "polygon(39% 24%, 61% 24%, 67% 58%, 58% 67%, 43% 67%, 34% 57%)"
    },

    face: {
        clip:
            "polygon(25% 17%, 75% 17%, 79% 53%, 67% 65%, 33% 65%, 21% 53%)"
    },

    hands: {
        clip:
            "polygon(5% 27%, 33% 31%, 38% 62%, 62% 62%, 67% 31%, 95% 27%, 98% 58%, 76% 64%, 24% 64%, 2% 58%)"
    },

    ornaments: {
        clip:
            "polygon(23% 48%, 77% 48%, 88% 80%, 78% 94%, 22% 94%, 12% 80%)"
    },

    complete: {
        clip:
            "polygon(12% 4%, 88% 4%, 96% 28%, 94% 61%, 98% 88%, 86% 98%, 14% 98%, 2% 88%, 6% 61%, 4% 28%)"
    }

};


function createLayer(
    name,
    clip
) {

    const layer =
        document.createElement("img");

    layer.src =
        ganeshaImage.src;

    layer.alt =
        "";

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
        "scale(1.02)";

    layer.style.transition =
        "opacity 1.4s ease, transform 1.6s cubic-bezier(.22,1,.36,1)";

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


// Create all visual layers
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


// Hide original image
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


function reveal(
    element,
    value
) {

    if (!element)
        return;

    const p =
        smooth(value);

    element.style.opacity =
        String(p);

    element.style.transform =
        `
        scale(
            ${0.88 + p * 0.12}
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


function showLayer(
    name,
    value
) {

    if (
        !layers[name]
    )
        return;

    reveal(
        layers[name],
        value
    );
}


function showStage(
    text
) {

    stageText.textContent =
        text;

    stageText.style.opacity =
        text ? "1" : "0";
}


function between(
    time,
    start,
    end
) {

    return smooth(
        (time - start) /
        (end - start)
    );
}


// ============================================================
// LOTUS CONTROL
// ============================================================

function animateLotus(
    time
) {

    // 6–8 : Lotus center
    if (
        time >= 6 &&
        time < 8
    ) {

        const p =
            between(
                time,
                6,
                8
            );

        lotus.style.opacity =
            String(p);

        lotus.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.25 + p * 0.75})
            `;

        return;
    }


    // 8–10 : petals opening
    if (
        time >= 8 &&
        time < 10
    ) {

        const p =
            between(
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

        return;
    }


    // 10+ : full lotus
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

    }
}


// ============================================================
// MAIN TIMELINE
// ============================================================

function updateTimeline(
    time
) {

    // ========================================================
    // 0–2s
    // DARK SCREEN
    // ========================================================

    if (
        time < 2
    ) {

        showStage("");

        divineLight.style.opacity =
            "0";

        energyRing.style.opacity =
            "0";

        particles.style.opacity =
            "0";

        lotus.style.opacity =
            "0";

        goldenSeat.style.opacity =
            "0";

        ganeshaContainer.style.opacity =
            "0";

        leftDiya.style.opacity =
            "0";

        rightDiya.style.opacity =
            "0";

        divineAura.style.opacity =
            "0";

        finalMessage.style.opacity =
            "0";

        finalMessage.style.visibility =
            "hidden";

        hideAllLayers();

        return;
    }


    // ========================================================
    // 2–4s
    // SINGLE DIVINE LIGHT
    // ========================================================

    if (
        time < 4
    ) {

        const p =
            between(
                time,
                2,
                4
            );

        divineLight.style.opacity =
            String(p);

        divineLight.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.2 + p * 1.8})
            `;

        energyRing.style.opacity =
            String(p * 0.35);

        particles.style.opacity =
            "0";

        showStage(
            "A Divine Light"
        );

        return;
    }


    // ========================================================
    // 4–6s
    // LIGHT + PARTICLES
    // ========================================================

    if (
        time < 6
    ) {

        const p =
            between(
                time,
                4,
                6
            );

        divineLight.style.opacity =
            "1";

        divineLight.style.transform =
            `
            translate(-50%, -50%)
            scale(${2 + p * 1.4})
            `;

        energyRing.style.opacity =
            String(
                0.35 +
                p * 0.45
            );

        energyRing.style.transform =
            `
            translate(-50%, -50%)
            scale(${1 + p * 5})
            `;

        particles.style.opacity =
            String(
                p * 0.9
            );

        showStage(
            "Divine Energy"
        );

        return;
    }


    // ========================================================
    // 6–8s
    // LOTUS CENTER
    // ========================================================

    if (
        time < 8
    ) {

        animateLotus(
            time
        );

        divineLight.style.opacity =
            "0.65";

        particles.style.opacity =
            "0.9";

        energyRing.style.opacity =
            "0.7";

        showStage(
            "Lotus Awakens"
        );

        return;
    }


    // ========================================================
    // 8–10s
    // LOTUS PETALS OPEN
    // ========================================================

    if (
        time < 10
    ) {

        animateLotus(
            time
        );

        particles.style.opacity =
            "0.9";

        showStage(
            "Lotus Petals Open"
        );

        return;
    }


    // ========================================================
    // 10–12s
    // FULL LOTUS
    // ========================================================

    if (
        time < 12
    ) {

        animateLotus(
            time
        );

        showStage(
            "Sacred Lotus"
        );

        return;
    }


    // ========================================================
    // 12–14s
    // GOLDEN BASE / SEAT
    // ========================================================

    if (
        time < 14
    ) {

        animateLotus(
            time
        );

        const p =
            between(
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

        showStage(
            "Divine Seat"
        );

        return;
    }


    // ========================================================
    // 14–16s
    // CROWN
    // ========================================================

    if (
        time < 16
    ) {

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "crown",
            between(
                time,
                14,
                16
            )
        );

        showStage(
            "Golden Crown"
        );

        divineAura.style.opacity =
            "0.3";

        return;
    }


    // ========================================================
    // 16–18s
    // EYES
    // ========================================================

    if (
        time < 18
    ) {

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "crown",
            1
        );

        showLayer(
            "eyes",
            between(
                time,
                16,
                18
            )
        );

        showStage(
            "Divine Eyes"
        );

        return;
    }


    // ========================================================
    // 18–20s
    // EARS
    // ========================================================

    if (
        time < 20
    ) {

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "crown",
            1
        );

        showLayer(
            "eyes",
            1
        );

        showLayer(
            "ears",
            between(
                time,
                18,
                20
            )
        );

        showStage(
            "Sacred Ears"
        );

        return;
    }


    // ========================================================
    // 20–22s
    // TRUNK
    // ========================================================

    if (
        time < 22
    ) {

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "crown",
            1
        );

        showLayer(
            "eyes",
            1
        );

        showLayer(
            "ears",
            1
        );

        showLayer(
            "trunk",
            between(
                time,
                20,
                22
            )
        );

        showStage(
            "Sacred Trunk"
        );

        return;
    }


    // ========================================================
    // 22–24s
    // FACE COMPLETES
    // ========================================================

    if (
        time < 24
    ) {

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "crown",
            1
        );

        showLayer(
            "eyes",
            1
        );

        showLayer(
            "ears",
            1
        );

        showLayer(
            "trunk",
            1
        );

        showLayer(
            "face",
            between(
                time,
                22,
                24
            )
        );

        showStage(
            "Divine Face"
        );

        return;
    }


    // ========================================================
    // 24–26s
    // HANDS ONE BY ONE
    // ========================================================

    if (
        time < 26
    ) {

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "crown",
            1
        );

        showLayer(
            "eyes",
            1
        );

        showLayer(
            "ears",
            1
        );

        showLayer(
            "trunk",
            1
        );

        showLayer(
            "face",
            1
        );

        showLayer(
            "hands",
            between(
                time,
                24,
                26
            )
        );

        showStage(
            "Blessing Hands"
        );

        return;
    }


    // ========================================================
    // 26–28s
    // ORNAMENTS + CLOTHING
    // ========================================================

    if (
        time < 28
    ) {

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "crown",
            1
        );

        showLayer(
            "eyes",
            1
        );

        showLayer(
            "ears",
            1
        );

        showLayer(
            "trunk",
            1
        );

        showLayer(
            "face",
            1
        );

        showLayer(
            "hands",
            1
        );

        showLayer(
            "ornaments",
            between(
                time,
                26,
                28
            )
        );

        showStage(
            "Sacred Ornaments"
        );

        return;
    }


    // ========================================================
    // 28–30s
    // COMPLETE GANESHA
    // ========================================================

    if (
        time < 30
    ) {

        const p =
            between(
                time,
                28,
                30
            );

        ganeshaContainer.style.opacity =
            "1";

        hideAllLayers();

        showLayer(
            "complete",
            p
        );

        divineAura.style.opacity =
            String(
                0.5 +
                p * 0.4
            );

        particles.style.opacity =
            "1";

        showStage(
            "Complete Ganesha"
        );

        return;
    }


    // ========================================================
    // 30–32s
    // LEFT + RIGHT DIYAS
    // ========================================================

    if (
        time < 32
    ) {

        const p =
            between(
                time,
                30,
                32
            );

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "complete",
            1
        );

        leftDiya.style.opacity =
            String(p);

        rightDiya.style.opacity =
            String(p);

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

        divineAura.style.opacity =
            "0.95";

        particles.style.opacity =
            "1";

        showStage(
            "Divine Glow"
        );

        return;
    }


    // ========================================================
    // 32–34s
    // FINAL DARSHAN
    // ========================================================

    if (
        time < 34
    ) {

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "complete",
            1
        );

        leftDiya.style.opacity =
            "1";

        rightDiya.style.opacity =
            "1";

        divineAura.style.opacity =
            "1";

        particles.style.opacity =
            "1";

        ganeshaContainer.style.transform =
            `
            translate(-50%, -50%)
            scale(1.05)
            `;

        showStage(
            "Final Darshan"
        );

        return;
    }


    // ========================================================
    // 34–36s
    // BLESSING MESSAGE
    // ========================================================

    if (
        time < 36
    ) {

        const p =
            between(
                time,
                34,
                36
            );

        ganeshaContainer.style.opacity =
            "1";

        showLayer(
            "complete",
            1
        );

        leftDiya.style.opacity =
            "1";

        rightDiya.style.opacity =
            "1";

        divineAura.style.opacity =
            "1";

        finalMessage.style.visibility =
            "visible";

        finalMessage.style.opacity =
            String(p);

        showStage("");

        return;
    }


    // ========================================================
    // 36s+
    // CONTINUOUS DARSHAN
    // ========================================================

    finalMessage.style.visibility =
        "visible";

    finalMessage.style.opacity =
        "1";

    ganeshaContainer.style.opacity =
        "1";

    showLayer(
        "complete",
        1
    );

    leftDiya.style.opacity =
        "1";

    rightDiya.style.opacity =
        "1";

    divineAura.style.opacity =
        String(
            0.9 +
            Math.sin(
                time * 1.2
            ) * 0.08
        );

    particles.style.opacity =
        "1";


    // Gentle cinematic breathing
    const breathing =
        1.05 +
        Math.sin(
            time * 0.35
        ) * 0.015;


    const gentleX =
        Math.sin(
            time * 0.20
        ) * 0.25;


    ganeshaContainer.style.transform =
        `
        translate(
            calc(-50% + ${gentleX}px),
            -50%
        )
        scale(${breathing})
        `;
}


// ============================================================
// PARTICLE MOVEMENT
// ============================================================

function animateParticles(
    time
) {

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
// START AUTOMATIC EXPERIENCE
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


    updateTimeline(
        elapsed
    );


    animateParticles(
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
// IMAGE CHECK
// ============================================================

ganeshaImage.addEventListener(
    "error",
    () => {

        console.error(
            "ERROR: ganesha.png not found."
        );

        stageText.textContent =
            "ganesha.png not found";

        stageText.style.opacity =
            "1";
    }
);


// ============================================================
// RESPONSIVE
// ============================================================

window.addEventListener(
    "resize",
    () => {

        // CSS handles responsive layout.

    }
);

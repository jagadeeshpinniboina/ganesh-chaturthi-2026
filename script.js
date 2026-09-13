// =====================================================
// GANESH CHATURTHI 2026
// CINEMATIC SINGLE-IMAGE EXPERIENCE
// =====================================================

const scene =
    document.getElementById("scene");

const divineLight =
    document.getElementById("divineLight");

const energyRing =
    document.getElementById("energyRing");

const particles =
    document.getElementById("particles");

const ganesha =
    document.getElementById("ganeshaReveal");

const image =
    document.getElementById("ganeshaImage");

const aura =
    document.getElementById("aura");

const stageText =
    document.getElementById("stageText");

const finalMessage =
    document.getElementById("finalMessage");


// =====================================================
// TIMING
// =====================================================

const stages = [

    {
        start: 0,
        end: 2,
        name: ""
    },

    {
        start: 2,
        end: 4,
        name: "A Divine Light"
    },

    {
        start: 4,
        end: 6,
        name: "Divine Energy"
    },

    {
        start: 6,
        end: 8,
        name: "Lotus Awakens"
    },

    {
        start: 8,
        end: 10,
        name: "Lotus Petals Open"
    },

    {
        start: 10,
        end: 12,
        name: "Sacred Lotus"
    },

    {
        start: 12,
        end: 14,
        name: "Divine Seat"
    },

    {
        start: 14,
        end: 16,
        name: "Golden Crown"
    },

    {
        start: 16,
        end: 18,
        name: "Divine Eyes"
    },

    {
        start: 18,
        end: 20,
        name: "Sacred Ears"
    },

    {
        start: 20,
        end: 22,
        name: "Sacred Trunk"
    },

    {
        start: 22,
        end: 24,
        name: "Divine Face"
    },

    {
        start: 24,
        end: 26,
        name: "Blessing Hands"
    },

    {
        start: 26,
        end: 28,
        name: "Sacred Ornaments"
    },

    {
        start: 28,
        end: 30,
        name: "Complete Ganesha"
    },

    {
        start: 30,
        end: 32,
        name: "Divine Glow"
    },

    {
        start: 32,
        end: 34,
        name: "Final Darshan"
    },

    {
        start: 34,
        end: 36,
        name: "Blessings"
    }

];


// =====================================================
// HELPERS
// =====================================================

function clamp(
    value,
    min,
    max
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
        clamp(
            value,
            0,
            1
        );

    return value *
        value *
        (3 - 2 * value);
}


function progress(
    time,
    start,
    end
) {

    return smooth(
        (time - start) /
        (end - start)
    );
}


// =====================================================
// MAIN TIMELINE
// =====================================================

function update(
    time
) {

    // -----------------------------------------------
    // RESET COMMON STATES
    // -----------------------------------------------

    stageText.style.opacity = "0";


    // -----------------------------------------------
    // 0–2s
    // DARK SCREEN
    // -----------------------------------------------

    if (time < 2) {

        divineLight.style.opacity =
            "0";

        energyRing.style.opacity =
            "0";

        particles.style.opacity =
            "0";

        ganesha.style.opacity =
            "0";

        aura.style.opacity =
            "0";

        finalMessage.classList.remove(
            "show"
        );

        return;
    }


    // -----------------------------------------------
    // 2–4s
    // SINGLE DIVINE LIGHT
    // -----------------------------------------------

    if (time < 4) {

        const p =
            progress(
                time,
                2,
                4
            );


        divineLight.style.opacity =
            String(p);


        divineLight.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.2 + p * 2})
            `;


        stageText.textContent =
            "A Divine Light";

        stageText.style.opacity =
            String(p);


        return;
    }


    // -----------------------------------------------
    // 4–6s
    // LIGHT + PARTICLES
    // -----------------------------------------------

    if (time < 6) {

        const p =
            progress(
                time,
                4,
                6
            );


        divineLight.style.opacity =
            "1";


        divineLight.style.transform =
            `
            translate(-50%, -50%)
            scale(${2 + p * 1.5})
            `;


        energyRing.style.opacity =
            String(p);


        energyRing.style.transform =
            `
            translate(-50%, -50%)
            scale(${0.1 + p * 7})
            `;


        particles.style.opacity =
            String(p * 0.9);


        stageText.textContent =
            "Divine Energy";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 6–8s
    // LOTUS CENTER
    // -----------------------------------------------

    if (time < 8) {

        const p =
            progress(
                time,
                6,
                8
            );


        divineLight.style.opacity =
            "0.8";


        particles.style.opacity =
            "0.9";


        energyRing.style.opacity =
            "0.8";


        /*
         * The complete image begins very subtly
         * from the lower center.
         */

        ganesha.style.opacity =
            String(
                p * 0.18
            );


        ganesha.style.transform =
            `
            translate(-50%, -48%)
            scale(${1.12 - p * 0.10})
            `;


        stageText.textContent =
            "Lotus Awakens";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 8–10s
    // LOTUS PETALS OPEN
    // -----------------------------------------------

    if (time < 10) {

        const p =
            progress(
                time,
                8,
                10
            );


        ganesha.style.opacity =
            String(
                0.18 +
                p * 0.18
            );


        ganesha.style.transform =
            `
            translate(-50%, -48%)
            scale(${1.02 - p * 0.02})
            `;


        aura.style.opacity =
            String(
                p * 0.25
            );


        stageText.textContent =
            "Lotus Petals Open";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 10–12s
    // FULL LOTUS
    // -----------------------------------------------

    if (time < 12) {

        const p =
            progress(
                time,
                10,
                12
            );


        ganesha.style.opacity =
            String(
                0.36 +
                p * 0.16
            );


        aura.style.opacity =
            String(
                0.25 +
                p * 0.15
            );


        stageText.textContent =
            "Sacred Lotus";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 12–14s
    // BASE / SEAT
    // -----------------------------------------------

    if (time < 14) {

        const p =
            progress(
                time,
                12,
                14
            );


        ganesha.style.opacity =
            String(
                0.52 +
                p * 0.12
            );


        ganesha.style.transform =
            `
            translate(-50%, -48%)
            scale(${1 - p * 0.01})
            `;


        stageText.textContent =
            "Divine Seat";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 14–16
    // CROWN
    // -----------------------------------------------

    if (time < 16) {

        const p =
            progress(
                time,
                14,
                16
            );


        ganesha.style.opacity =
            String(
                0.64 +
                p * 0.08
            );


        aura.style.opacity =
            String(
                0.40 +
                p * 0.12
            );


        stageText.textContent =
            "Golden Crown";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 16–18
    // EYES
    // -----------------------------------------------

    if (time < 18) {

        const p =
            progress(
                time,
                16,
                18
            );


        ganesha.style.opacity =
            String(
                0.72 +
                p * 0.08
            );


        stageText.textContent =
            "Divine Eyes";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 18–20
    // EARS
    // -----------------------------------------------

    if (time < 20) {

        const p =
            progress(
                time,
                18,
                20
            );


        ganesha.style.opacity =
            String(
                0.80 +
                p * 0.05
            );


        stageText.textContent =
            "Sacred Ears";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 20–22
    // TRUNK
    // -----------------------------------------------

    if (time < 22) {

        const p =
            progress(
                time,
                20,
                22
            );


        ganesha.style.opacity =
            String(
                0.85 +
                p * 0.05
            );


        ganesha.style.transform =
            `
            translate(-50%, -48%)
            scale(${1 + p * 0.015})
            `;


        stageText.textContent =
            "Sacred Trunk";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 22–24
    // FACE
    // -----------------------------------------------

    if (time < 24) {

        const p =
            progress(
                time,
                22,
                24
            );


        ganesha.style.opacity =
            String(
                0.90 +
                p * 0.06
            );


        stageText.textContent =
            "Divine Face";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 24–26
    // HANDS
    // -----------------------------------------------

    if (time < 26) {

        const p =
            progress(
                time,
                24,
                26
            );


        ganesha.style.opacity =
            String(
                0.96 +
                p * 0.04
            );


        aura.style.opacity =
            String(
                0.55 +
                p * 0.10
            );


        stageText.textContent =
            "Blessing Hands";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 26–28
    // ORNAMENTS / CLOTHING
    // -----------------------------------------------

    if (time < 28) {

        const p =
            progress(
                time,
                26,
                28
            );


        ganesha.style.opacity =
            "1";


        aura.style.opacity =
            String(
                0.65 +
                p * 0.15
            );


        stageText.textContent =
            "Sacred Ornaments";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 28–30
    // COMPLETE GANESHA
    // -----------------------------------------------

    if (time < 30) {

        const p =
            progress(
                time,
                28,
                30
            );


        ganesha.style.opacity =
            "1";


        ganesha.style.transform =
            `
            translate(-50%, -48%)
            scale(${1 + p * 0.025})
            `;


        aura.style.opacity =
            String(
                0.80 +
                p * 0.15
            );


        particles.style.opacity =
            "1";


        stageText.textContent =
            "Complete Ganesha";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 30–32
    // DIVINE GLOW + CAMERA-LIKE ZOOM
    // -----------------------------------------------

    if (time < 32) {

        const p =
            progress(
                time,
                30,
                32
            );


        ganesha.style.transform =
            `
            translate(-50%, -48%)
            scale(${1.025 + p * 0.13})
            `;


        aura.style.opacity =
            "1";


        divineLight.style.opacity =
            String(
                0.55 +
                p * 0.25
            );


        particles.style.opacity =
            "1";


        stageText.textContent =
            "Divine Darshan";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 32–34
    // FINAL DARSHAN
    // -----------------------------------------------

    if (time < 34) {

        ganesha.style.opacity =
            "1";


        ganesha.style.transform =
            `
            translate(-50%, -48%)
            scale(1.155)
            `;


        aura.style.opacity =
            "1";


        particles.style.opacity =
            "1";


        stageText.textContent =
            "Final Darshan";

        stageText.style.opacity =
            "1";


        return;
    }


    // -----------------------------------------------
    // 34–36
    // BLESSING MESSAGE
    // -----------------------------------------------

    if (time < 36) {

        const p =
            progress(
                time,
                34,
                36
            );


        ganesha.style.opacity =
            "1";


        ganesha.style.transform =
            `
            translate(-50%, -48%)
            scale(1.155)
            `;


        finalMessage.style.opacity =
            String(p);

        finalMessage.style.visibility =
            "visible";


        stageText.style.opacity =
            "0";


        return;
    }


    // -----------------------------------------------
    // 36+
    // CONTINUOUS DARSHAN
    // -----------------------------------------------

    finalMessage.classList.add(
        "show"
    );


    ganesha.style.opacity =
        "1";


    const gentleZoom =
        1.155 +
        Math.sin(
            time * 0.35
        ) * 0.015;


    const gentleX =
        Math.sin(
            time * 0.20
        ) * 0.3;


    ganesha.style.transform =
        `
        translate(
            calc(-50% + ${gentleX}px),
            -48%
        )
        scale(${gentleZoom})
        `;


    aura.style.opacity =
        String(
            0.88 +
            Math.sin(
                time * 1.2
            ) * 0.08
        );


    particles.style.opacity =
        "1";

}


// =====================================================
// RUN AUTOMATICALLY
// =====================================================

const startTime =
    performance.now();


function animationLoop(
    now
) {

    const elapsed =
        (now - startTime) /
        1000;


    update(
        elapsed
    );


    requestAnimationFrame(
        animationLoop
    );
}


requestAnimationFrame(
    animationLoop
);


// =====================================================
// IMAGE ERROR CHECK
// =====================================================

image.addEventListener(
    "error",
    () => {

        console.error(
            "ganesha.png was not found. Make sure the image is in the repository root."
        );

        stageText.textContent =
            "Please add ganesha.png to the repository.";

        stageText.style.opacity =
            "1";
    }
);


// =====================================================
// RESPONSIVE
// =====================================================

window.addEventListener(
    "resize",
    () => {

        // CSS handles responsive sizing.
        // This listener intentionally remains lightweight.

    }
);

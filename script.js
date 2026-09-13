import * as THREE from "three";

/* =========================================
   GANESH CHATURTHI 2026
   3D DIVINE EXPERIENCE
   ========================================= */

const canvas = document.getElementById("ganeshCanvas");

const intro = document.getElementById("intro");
const stepInfo = document.getElementById("stepInfo");
const wishes = document.getElementById("wishes");

const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");

const stepNumber = document.getElementById("stepNumber");
const stepTitle = document.getElementById("stepTitle");
const stepDescription = document.getElementById("stepDescription");


/* =========================================
   THREE.JS SCENE
   ========================================= */

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x080313);


/* =========================================
   CAMERA
   ========================================= */

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(0, 1.2, 8);


/* =========================================
   RENDERER
   ========================================= */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


/* =========================================
   LIGHTING
   ========================================= */

const ambientLight = new THREE.AmbientLight(
    0xffd6a0,
    2
);

scene.add(ambientLight);


const divineLight = new THREE.PointLight(
    0xffb300,
    180,
    15
);

divineLight.position.set(0, 2, 4);

divineLight.castShadow = true;

scene.add(divineLight);


const leftLight = new THREE.PointLight(
    0xff6f00,
    80,
    10
);

leftLight.position.set(-4, 2, 2);

scene.add(leftLight);


const rightLight = new THREE.PointLight(
    0x9c27b0,
    80,
    10
);

rightLight.position.set(4, 2, 2);

scene.add(rightLight);


/* =========================================
   MATERIALS
   ========================================= */

const skinMaterial = new THREE.MeshStandardMaterial({
    color: 0xc96f42,
    roughness: 0.65,
    metalness: 0.05
});


const darkSkinMaterial = new THREE.MeshStandardMaterial({
    color: 0x9e4e2d,
    roughness: 0.7,
    metalness: 0.05
});


const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xffc107,
    roughness: 0.25,
    metalness: 0.7,
    emissive: 0x6d3d00,
    emissiveIntensity: 0.15
});


const redMaterial = new THREE.MeshStandardMaterial({
    color: 0xc62828,
    roughness: 0.45,
    metalness: 0.2
});


const whiteMaterial = new THREE.MeshStandardMaterial({
    color: 0xfff8e1,
    roughness: 0.4
});


const blackMaterial = new THREE.MeshStandardMaterial({
    color: 0x120b0b,
    roughness: 0.3
});


/* =========================================
   MAIN GANESHA GROUP
   ========================================= */

const ganesha = new THREE.Group();

ganesha.position.y = -1.2;

scene.add(ganesha);


/* =========================================
   HELPERS
   ========================================= */

function addPart(
    geometry,
    material,
    position,
    scale = [1, 1, 1],
    rotation = [0, 0, 0]
) {
    const mesh = new THREE.Mesh(
        geometry,
        material
    );

    mesh.position.set(
        position[0],
        position[1],
        position[2]
    );

    mesh.scale.set(
        scale[0],
        scale[1],
        scale[2]
    );

    mesh.rotation.set(
        rotation[0],
        rotation[1],
        rotation[2]
    );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    mesh.userData.originalScale = new THREE.Vector3(
        scale[0],
        scale[1],
        scale[2]
    );

    mesh.scale.set(0.001, 0.001, 0.001);

    ganesha.add(mesh);

    return mesh;
}


/* =========================================
   STEP 1
   DIVINE AURA
   ========================================= */

const auraGeometry = new THREE.SphereGeometry(
    2.8,
    64,
    64
);

const auraMaterial = new THREE.MeshBasicMaterial({
    color: 0xffb300,
    transparent: true,
    opacity: 0.07,
    side: THREE.BackSide
});

const aura = new THREE.Mesh(
    auraGeometry,
    auraMaterial
);

aura.position.set(0, 1.7, -0.5);

scene.add(aura);


/* =========================================
   STEP 2
   BODY
   ========================================= */

const body = addPart(
    new THREE.SphereGeometry(1.35, 64, 64),
    skinMaterial,
    [0, 0.6, 0],
    [1, 1.2, 0.8]
);


/* =========================================
   BELLY
   ========================================= */

const belly = addPart(
    new THREE.SphereGeometry(1.05, 64, 64),
    skinMaterial,
    [0, 0.1, 0.72],
    [1, 1.05, 0.55]
);


/* =========================================
   STEP 3
   HEAD
   ========================================= */

const head = addPart(
    new THREE.SphereGeometry(1.2, 64, 64),
    skinMaterial,
    [0, 2.25, 0],
    [1.05, 1.05, 0.85]
);


/* =========================================
   EARS
   ========================================= */

const earGeometry = new THREE.SphereGeometry(
    0.75,
    48,
    48
);

const leftEar = addPart(
    earGeometry,
    darkSkinMaterial,
    [-1.05, 2.35, -0.05],
    [0.65, 1.2, 0.25],
    [0, 0, -0.2]
);

const rightEar = addPart(
    earGeometry,
    darkSkinMaterial,
    [1.05, 2.35, -0.05],
    [0.65, 1.2, 0.25],
    [0, 0, 0.2]
);


/* =========================================
   INNER EARS
   ========================================= */

const innerEarGeometry = new THREE.SphereGeometry(
    0.55,
    40,
    40
);

const leftInnerEar = addPart(
    innerEarGeometry,
    redMaterial,
    [-1.05, 2.35, 0.18],
    [0.55, 1, 0.12],
    [0, 0, -0.2]
);

const rightInnerEar = addPart(
    innerEarGeometry,
    redMaterial,
    [1.05, 2.35, 0.18],
    [0.55, 1, 0.12],
    [0, 0, 0.2]
);


/* =========================================
   STEP 4
   EYES
   ========================================= */

const eyeGeometry = new THREE.SphereGeometry(
    0.12,
    32,
    32
);

const leftEye = addPart(
    eyeGeometry,
    blackMaterial,
    [-0.42, 2.45, 0.78],
    [1, 1.2, 0.5]
);

const rightEye = addPart(
    eyeGeometry,
    blackMaterial,
    [0.42, 2.45, 0.78],
    [1, 1.2, 0.5]
);


/* =========================================
   EYE GLOW
   ========================================= */

const eyeGlowMaterial = new THREE.MeshBasicMaterial({
    color: 0xffd54f,
    transparent: true,
    opacity: 0
});

const leftEyeGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.19, 32, 32),
    eyeGlowMaterial.clone()
);

leftEyeGlow.position.set(
    -0.42,
    2.45,
    0.83
);

ganesha.add(leftEyeGlow);


const rightEyeGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.19, 32, 32),
    eyeGlowMaterial.clone()
);

rightEyeGlow.position.set(
    0.42,
    2.45,
    0.83
);

ganesha.add(rightEyeGlow);


/* =========================================
   STEP 5
   TRUNK
   ========================================= */

const trunkGroup = new THREE.Group();

trunkGroup.position.set(
    0,
    1.95,
    0.8
);

ganesha.add(trunkGroup);


const trunkMaterial = skinMaterial;

const trunkTop = new THREE.Mesh(
    new THREE.SphereGeometry(0.48, 48, 48),
    trunkMaterial
);

trunkTop.scale.set(
    0.75,
    1.5,
    0.75
);

trunkTop.position.set(
    0,
    0,
    0
);

trunkGroup.add(trunkTop);


const trunkMiddle = new THREE.Mesh(
    new THREE.SphereGeometry(0.36, 48, 48),
    trunkMaterial
);

trunkMiddle.scale.set(
    0.75,
    1.5,
    0.75
);

trunkMiddle.position.set(
    0.05,
    -0.65,
    0.05
);

trunkGroup.add(trunkMiddle);


const trunkTip = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 48, 48),
    trunkMaterial
);

trunkTip.scale.set(
    0.8,
    1.3,
    0.8
);

trunkTip.rotation.z = -0.45;

trunkTip.position.set(
    0.28,
    -1.18,
    0.12
);

trunkGroup.add(trunkTip);


/* =========================================
   STEP 6
   CROWN
   ========================================= */

const crown = new THREE.Group();

crown.position.set(
    0,
    3.35,
    0
);

ganesha.add(crown);


const crownBase = new THREE.Mesh(
    new THREE.CylinderGeometry(
        0.85,
        1.05,
        0.25,
        48
    ),
    goldMaterial
);

crown.add(crownBase);


const crownMain = new THREE.Mesh(
    new THREE.ConeGeometry(
        0.8,
        1.2,
        48
    ),
    goldMaterial
);

crownMain.position.y = 0.65;

crown.add(crownMain);


const crownTop = new THREE.Mesh(
    new THREE.SphereGeometry(
        0.16,
        32,
        32
    ),
    goldMaterial
);

crownTop.position.y = 1.3;

crown.add(crownTop);


/* =========================================
   CROWN JEWELS
   ========================================= */

const jewelMaterial = new THREE.MeshStandardMaterial({
    color: 0xe91e63,
    roughness: 0.2,
    metalness: 0.4,
    emissive: 0x5c001f,
    emissiveIntensity: 0.4
});

for (let i = -2; i <= 2; i++) {

    const jewel = new THREE.Mesh(
        new THREE.SphereGeometry(
            0.09,
            24,
            24
        ),
        jewelMaterial
    );

    jewel.position.set(
        i * 0.28,
        0.25 + Math.abs(i) * 0.12,
        0.75
    );

    crown.add(jewel);
}


/* =========================================
   STEP 7
   ARMS
   ========================================= */

function createArm(x, side) {

    const armGroup = new THREE.Group();

    armGroup.position.set(
        x,
        0.95,
        0
    );

    armGroup.rotation.z =
        side === "left"
            ? 0.35
            : -0.35;

    ganesha.add(armGroup);

    const upperArm = new THREE.Mesh(
        new THREE.CapsuleGeometry(
            0.28,
            0.8,
            12,
            24
        ),
        skinMaterial
    );

    upperArm.position.y = 0.05;

    upperArm.castShadow = true;

    armGroup.add(upperArm);


    const hand = new THREE.Mesh(
        new THREE.SphereGeometry(
            0.38,
            40,
            40
        ),
        skinMaterial
    );

    hand.position.y = -0.55;

    hand.scale.set(
        0.9,
        0.8,
        0.65
    );

    hand.castShadow = true;

    armGroup.add(hand);


    return armGroup;
}

const leftArm = createArm(-1.15, "left");
const rightArm = createArm(1.15, "right");


/* =========================================
   BLESSING SYMBOL
   ========================================= */

const blessing = new THREE.Group();

blessing.position.set(
    1.15,
    0.25,
    0.35
);

ganesha.add(blessing);

const blessingGlow = new THREE.Mesh(
    new THREE.SphereGeometry(
        0.12,
        24,
        24
    ),
    goldMaterial
);

blessing.add(blessingGlow);


/* =========================================
   STEP 8
   LEGS
   ========================================= */

const leftLeg = addPart(
    new THREE.SphereGeometry(
        0.7,
        48,
        48
    ),
    skinMaterial,
    [-0.65, -0.55, 0.15],
    [1, 0.8, 0.85]
);

const rightLeg = addPart(
    new THREE.SphereGeometry(
        0.7,
        48,
        48
    ),
    skinMaterial,
    [0.65, -0.55, 0.15],
    [1, 0.8, 0.85]
);


/* =========================================
   LOTUS SEAT
   ========================================= */

const lotus = new THREE.Group();

lotus.position.y = -1.15;

ganesha.add(lotus);


const lotusMaterial = new THREE.MeshStandardMaterial({
    color: 0xe91e63,
    roughness: 0.55,
    metalness: 0.1
});


for (let i = 0; i < 12; i++) {

    const petal = new THREE.Mesh(
        new THREE.SphereGeometry(
            0.35,
            32,
            32
        ),
        lotusMaterial
    );

    const angle =
        (Math.PI * 2 * i) / 12;

    petal.position.set(
        Math.cos(angle) * 1.1,
        0,
        Math.sin(angle) * 0.55
    );

    petal.scale.set(
        1.5,
        0.35,
        0.7
    );

    petal.rotation.y = -angle;

    lotus.add(petal);
}


/* =========================================
   GOLD NECKLACE
   ========================================= */

const necklace = new THREE.Group();

necklace.position.set(
    0,
    1.25,
    0.65
);

ganesha.add(necklace);


for (let i = 0; i < 9; i++) {

    const bead = new THREE.Mesh(
        new THREE.SphereGeometry(
            0.08,
            24,
            24
        ),
        goldMaterial
    );

    const x =
        (i - 4) * 0.16;

    const y =
        Math.abs(i - 4) * 0.025;

    bead.position.set(
        x,
        -y,
        0
    );

    necklace.add(bead);
}


/* =========================================
   STEP DEFINITIONS
   ========================================= */

const steps = [

    {
        title: "Divine Light",
        description:
            "A divine light begins to illuminate the sacred space."
    },

    {
        title: "The Divine Form",
        description:
            "The form of Lord Ganesha begins to appear."
    },

    {
        title: "Sacred Ears",
        description:
            "The ears of wisdom reveal themselves."
    },

    {
        title: "Divine Eyes",
        description:
            "His eyes awaken with divine grace."
    },

    {
        title: "The Sacred Trunk",
        description:
            "The beautiful elephant trunk takes form."
    },

    {
        title: "Golden Crown",
        description:
            "The crown of Lord Ganesha shines with divine radiance."
    },

    {
        title: "Blessing Hands",
        description:
            "His hands appear, bringing blessings and protection."
    },

    {
        title: "Sacred Feet",
        description:
            "The divine form is completed with the sacred feet."
    },

    {
        title: "Complete Ganesha",
        description:
            "The divine form of Lord Ganesha is complete."
    }

];


/* =========================================
   ANIMATION STATE
   ========================================= */

let currentStep = 0;

let experienceStarted = false;

const animatedParts = [
    body,
    belly,
    head,
    leftEar,
    rightEar,
    leftInnerEar,
    rightInnerEar,
    leftEye,
    rightEye,
    trunkGroup,
    crown,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    lotus,
    necklace
];


/* =========================================
   INITIAL HIDE
   ========================================= */

function hideAllParts() {

    animatedParts.forEach(part => {

        part.scale.set(
            0.001,
            0.001,
            0.001
        );

        part.visible = true;
    });

    leftEyeGlow.material.opacity = 0;
    rightEyeGlow.material.opacity = 0;
}

hideAllParts();


/* =========================================
   SMOOTH SCALE ANIMATION
   ========================================= */

function revealPart(part, duration = 900) {

    const start = performance.now();

    const target =
        part.userData.originalScale ||
        new THREE.Vector3(1, 1, 1);

    function animateReveal(time) {

        const progress =
            Math.min(
                (time - start) / duration,
                1
            );

        const eased =
            1 - Math.pow(1 - progress, 3);

        part.scale.set(
            target.x * eased,
            target.y * eased,
            target.z * eased
        );

        if (progress < 1) {

            requestAnimationFrame(
                animateReveal
            );

        } else {

            part.scale.copy(target);
        }
    }

    requestAnimationFrame(
        animateReveal
    );
}


/* =========================================
   STEP UPDATE
   ========================================= */

function updateStepText() {

    const step = steps[currentStep];

    stepNumber.textContent =
        `STEP ${currentStep + 1}`;

    stepTitle.textContent =
        step.title;

    stepDescription.textContent =
        step.description;

    stepInfo.classList.remove(
        "hidden"
    );
}


/* =========================================
   REVEAL STEP
   ========================================= */

function revealStep(step) {

    switch (step) {

        case 0:

            divineLight.intensity = 350;

            break;


        case 1:

            revealPart(body, 1000);
            revealPart(belly, 1100);

            break;


        case 2:

            revealPart(head, 900);

            revealPart(
                leftEar,
                700
            );

            setTimeout(() => {

                revealPart(
                    rightEar,
                    700
                );

            }, 350);

            revealPart(
                leftInnerEar,
                700
            );

            revealPart(
                rightInnerEar,
                700
            );

            break;


        case 3:

            revealPart(
                leftEye,
                600
            );

            setTimeout(() => {

                revealPart(
                    rightEye,
                    600
                );

            }, 300);

            setTimeout(() => {

                leftEyeGlow.material.opacity =
                    0.75;

                rightEyeGlow.material.opacity =
                    0.75;

            }, 700);

            break;


        case 4:

            trunkGroup.scale.set(
                0.001,
                0.001,
                0.001
            );

            const trunkTarget =
                new THREE.Vector3(
                    1,
                    1,
                    1
                );

            trunkGroup.userData.originalScale =
                trunkTarget;

            revealPart(
                trunkGroup,
                1100
            );

            break;


        case 5:

            revealPart(
                crown,
                1200
            );

            break;


        case 6:

            revealPart(
                leftArm,
                900
            );

            setTimeout(() => {

                revealPart(
                    rightArm,
                    900
                );

            }, 400);

            revealPart(
                necklace,
                800
            );

            break;


        case 7:

            revealPart(
                leftLeg,
                900
            );

            setTimeout(() => {

                revealPart(
                    rightLeg,
                    900
                );

            }, 400);

            revealPart(
                lotus,
                1000
            );

            break;


        case 8:

            animatedParts.forEach(
                part => {

                    const target =
                        part.userData.originalScale ||
                        new THREE.Vector3(
                            1,
                            1,
                            1
                        );

                    part.scale.copy(
                        target
                    );

                }
            );

            divineLight.intensity = 500;

            break;
    }
}


/* =========================================
   START EXPERIENCE
   ========================================= */

startButton.addEventListener(
    "click",
    () => {

        if (experienceStarted) {
            return;
        }

        experienceStarted = true;

        intro.classList.add(
            "hidden"
        );

        stepInfo.classList.remove(
            "hidden"
        );

        nextButton.classList.remove(
            "hidden"
        );

        currentStep = 0;

        updateStepText();

        revealStep(0);
    }
);


/* =========================================
   NEXT BUTTON
   ========================================= */

nextButton.addEventListener(
    "click",
    () => {

        if (!experienceStarted) {
            return;
        }

        if (currentStep < steps.length - 1) {

            currentStep++;

            updateStepText();

            revealStep(
                currentStep
            );

        } else {

            finishExperience();
        }
    }
);


/* =========================================
   FINISH EXPERIENCE
   ========================================= */

function finishExperience() {

    stepInfo.classList.add(
        "hidden"
    );

    nextButton.classList.add(
        "hidden"
    );

    setTimeout(() => {

        wishes.classList.remove(
            "hidden"
        );

    }, 900);
}


/* =========================================
   FLOATING ANIMATION
   ========================================= */

const clock = new THREE.Clock();

function animate() {

    requestAnimationFrame(
        animate
    );

    const elapsed =
        clock.getElapsedTime();


    /* Gentle Ganesha movement */

    if (experienceStarted) {

        ganesha.rotation.y =
            Math.sin(elapsed * 0.35)
            * 0.045;

        ganesha.position.y =
            -1.2 +
            Math.sin(elapsed * 0.8)
            * 0.035;
    }


    /* Aura */

    aura.scale.setScalar(
        1 +
        Math.sin(elapsed * 0.8)
        * 0.04
    );


    /* Divine light pulse */

    divineLight.intensity =
        360 +
        Math.sin(elapsed * 1.5)
        * 40;


    renderer.render(
        scene,
        camera
    );
}

animate();


/* =========================================
   RESPONSIVE
   ========================================= */

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                2
            )
        );
    }
);

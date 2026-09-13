import * as THREE from "three";

import { GLTFLoader } from
    "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/GLTFLoader.js";


// =====================================================
// ELEMENTS
// =====================================================

const canvas =
    document.getElementById("ganeshCanvas");

const finalMessage =
    document.getElementById("finalMessage");

const cinematicGlow =
    document.getElementById("cinematicGlow");

const sceneTime =
    document.getElementById("sceneTime");


// =====================================================
// SCENE
// =====================================================

const scene =
    new THREE.Scene();

scene.background =
    new THREE.Color(0x000000);


// =====================================================
// CAMERA
// =====================================================

const camera =
    new THREE.PerspectiveCamera(
        38,
        window.innerWidth /
        window.innerHeight,
        0.1,
        100
    );

camera.position.set(
    0,
    0.8,
    8
);


// =====================================================
// RENDERER
// =====================================================

const renderer =
    new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false
    });

renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.outputColorSpace =
    THREE.SRGBColorSpace;

renderer.toneMapping =
    THREE.ACESFilmicToneMapping;

renderer.toneMappingExposure =
    1.15;


// =====================================================
// LIGHTING
// =====================================================

const ambient =
    new THREE.HemisphereLight(
        0xffd6a0,
        0x140500,
        0.30
    );

scene.add(ambient);


const mainLight =
    new THREE.PointLight(
        0xffb52f,
        0,
        18
    );

mainLight.position.set(
    0,
    2,
    3
);

scene.add(mainLight);


const warmLight =
    new THREE.PointLight(
        0xff6825,
        0,
        12
    );

warmLight.position.set(
    -3,
    1,
    2
);

scene.add(warmLight);


const rimLight =
    new THREE.PointLight(
        0xffd36a,
        0,
        15
    );

rimLight.position.set(
    3,
    2,
    -2
);

scene.add(rimLight);


// =====================================================
// DIVINE LIGHT
// =====================================================

const divineGroup =
    new THREE.Group();

scene.add(divineGroup);


const divineLight =
    new THREE.Mesh(
        new THREE.SphereGeometry(
            0.18,
            32,
            32
        ),
        new THREE.MeshBasicMaterial({
            color: 0xffd477,
            transparent: true,
            opacity: 0
        })
    );

divineGroup.add(
    divineLight
);


const divinePoint =
    new THREE.PointLight(
        0xffb52f,
        0,
        14
    );

divineGroup.add(
    divinePoint
);


// =====================================================
// PARTICLES
// =====================================================

const particleCount = 600;

const particleGeometry =
    new THREE.BufferGeometry();

const particlePositions =
    new Float32Array(
        particleCount * 3
    );

for (
    let i = 0;
    i < particleCount;
    i++
) {

    const angle =
        Math.random() *
        Math.PI * 2;

    const radius =
        0.5 +
        Math.random() * 3.5;

    particlePositions[
        i * 3
    ] =
        Math.cos(angle) *
        radius;

    particlePositions[
        i * 3 + 1
    ] =
        -1 +
        Math.random() * 4;

    particlePositions[
        i * 3 + 2
    ] =
        -1 +
        Math.random() * 2;
}

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        particlePositions,
        3
    )
);


const particleMaterial =
    new THREE.PointsMaterial({
        color: 0xffcf69,
        size: 0.025,
        transparent: true,
        opacity: 0
    });


const particles =
    new THREE.Points(
        particleGeometry,
        particleMaterial
    );

scene.add(
    particles
);


// =====================================================
// DIVINE RING
// =====================================================

const divineRing =
    new THREE.Mesh(
        new THREE.RingGeometry(
            0.5,
            0.54,
            128
        ),
        new THREE.MeshBasicMaterial({
            color: 0xffc15b,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        })
    );

divineRing.rotation.x =
    -Math.PI / 2;

divineRing.position.y =
    -1.25;

scene.add(
    divineRing
);


// =====================================================
// LOTUS
// =====================================================

const lotus =
    new THREE.Group();

lotus.position.set(
    0,
    -1.05,
    0
);

lotus.scale.setScalar(
    0.001
);

scene.add(
    lotus
);


const lotusPetals = [];


function makePetal(
    angle,
    scaleX,
    scaleY,
    scaleZ
) {

    const material =
        new THREE.MeshPhysicalMaterial({
            color: 0xe85d83,
            roughness: 0.25,
            metalness: 0.04,
            clearcoat: 0.65,
            emissive: 0x541326,
            emissiveIntensity: 0.45,
            transparent: true,
            opacity: 0
        });


    const petal =
        new THREE.Mesh(
            new THREE.SphereGeometry(
                0.5,
                32,
                20
            ),
            material
        );


    petal.scale.set(
        scaleX,
        scaleY,
        scaleZ
    );


    petal.rotation.y =
        angle;

    petal.rotation.x =
        -1.15;


    petal.position.x =
        Math.sin(angle) * 0.48;

    petal.position.z =
        Math.cos(angle) * 0.24;

    petal.position.y =
        0.04;


    lotus.add(
        petal
    );

    lotusPetals.push(
        petal
    );
}


// Back petals
for (
    let i = 0;
    i < 10;
    i++
) {

    makePetal(
        (i / 10) *
        Math.PI * 2,
        0.28,
        0.72,
        0.18
    );
}


// Front petals
for (
    let i = 0;
    i < 8;
    i++
) {

    makePetal(
        (i / 8) *
        Math.PI * 2,
        0.34,
        0.82,
        0.20
    );
}


// Lotus center
const lotusCenter =
    new THREE.Mesh(
        new THREE.SphereGeometry(
            0.25,
            32,
            24
        ),
        new THREE.MeshPhysicalMaterial({
            color: 0xffa1b8,
            roughness: 0.22,
            emissive: 0x70203c,
            emissiveIntensity: 0.7
        })
    );

lotusCenter.position.y =
    0.12;

lotus.add(
    lotusCenter
);


// =====================================================
// GOLDEN SEAT
// =====================================================

const seat =
    new THREE.Group();

seat.scale.setScalar(
    0.001
);

scene.add(
    seat
);


const seatMaterial =
    new THREE.MeshPhysicalMaterial({
        color: 0xc77a22,
        metalness: 0.75,
        roughness: 0.22,
        clearcoat: 0.7
    });


const seatBody =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            1.45,
            1.55,
            0.28,
            64
        ),
        seatMaterial
    );

seatBody.position.y =
    -0.96;

seat.add(
    seatBody
);


const seatTop =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            1.25,
            1.35,
            0.16,
            64
        ),
        new THREE.MeshPhysicalMaterial({
            color: 0xffb833,
            metalness: 0.82,
            roughness: 0.17
        })
    );

seatTop.position.y =
    -0.76;

seat.add(
    seatTop
);


// =====================================================
// GANESHA GLB
// =====================================================

let ganesha =
    null;

let mixer =
    null;


const loader =
    new GLTFLoader();


loader.load(

    "assets/ganesha.glb",

    (gltf) => {

        ganesha =
            gltf.scene;


        // ---------------------------------------------
        // Normalize model size
        // ---------------------------------------------

        const box =
            new THREE.Box3()
                .setFromObject(
                    ganesha
                );

        const size =
            new THREE.Vector3();

        box.getSize(
            size
        );

        const maxDimension =
            Math.max(
                size.x,
                size.y,
                size.z
            );


        const targetSize =
            4.2;


        const modelScale =
            targetSize /
            maxDimension;


        ganesha.scale.setScalar(
            modelScale
        );


        // Center model
        const center =
            new THREE.Vector3();

        box.getCenter(
            center
        );


        ganesha.position.sub(
            center.multiplyScalar(
                modelScale
            )
        );


        ganesha.position.y =
            -0.40;


        // ---------------------------------------------
        // Start invisible
        // ---------------------------------------------

        ganesha.traverse(
            object => {

                if (
                    object.isMesh ||
                    object.isSkinnedMesh
                ) {

                    object.userData.finalScale =
                        object.scale.clone();

                    object.userData.finalPosition =
                        object.position.clone();

                    object.userData.finalRotation =
                        object.rotation.clone();


                    object.scale.setScalar(
                        0.001
                    );
                }
            }
        );


        scene.add(
            ganesha
        );


        // ---------------------------------------------
        // Existing model animations
        // ---------------------------------------------

        if (
            gltf.animations &&
            gltf.animations.length > 0
        ) {

            mixer =
                new THREE.AnimationMixer(
                    ganesha
                );

            gltf.animations.forEach(
                clip => {

                    const action =
                        mixer.clipAction(
                            clip
                        );

                    action.play();

                    action.paused =
                        true;
                }
            );
        }

    },

    undefined,

    error => {

        console.warn(
            "Place ganesha.glb inside assets folder.",
            error
        );

    }
);


// =====================================================
// HELPER
// =====================================================

function smooth(value) {

    return THREE.MathUtils.smoothstep(
        THREE.MathUtils.clamp(
            value,
            0,
            1
        ),
        0,
        1
    );
}


// =====================================================
// SHOW ENTIRE GANESHA
// =====================================================

function showGanesha(
    progress
) {

    if (!ganesha)
        return;


    const p =
        smooth(progress);


    ganesha.traverse(
        object => {

            if (
                object.isMesh ||
                object.isSkinnedMesh
            ) {

                if (
                    object.userData.finalScale
                ) {

                    object.scale.copy(
                        object.userData.finalScale
                    );

                    object.scale.multiplyScalar(
                        Math.max(
                            p,
                            0.001
                        )
                    );
                }
            }
        }
    );
}


// =====================================================
// PARTIAL MODEL REVEAL
// =====================================================

function revealNamedParts(
    names,
    progress
) {

    if (!ganesha)
        return;


    const p =
        smooth(progress);


    ganesha.traverse(
        object => {

            if (
                !object.isMesh &&
                !object.isSkinnedMesh
            )
                return;


            const objectName =
                (
                    object.name ||
                    ""
                ).toLowerCase();


            const matched =
                names.some(
                    name =>
                        objectName.includes(
                            name
                        )
                );


            if (
                matched &&
                object.userData.finalScale
            ) {

                object.scale.copy(
                    object.userData.finalScale
                );

                object.scale.multiplyScalar(
                    Math.max(
                        p,
                        0.001
                    )
                );
            }
        }
    );
}


// =====================================================
// TIMELINE
// =====================================================

function timeline(
    time
) {

    // ================================================
    // 0–2 DARK
    // ================================================

    if (time < 2) {

        divineLight.material.opacity =
            0;

        divinePoint.intensity =
            0;

        particleMaterial.opacity =
            0;

        divineRing.material.opacity =
            0;

        lotus.scale.setScalar(
            0.001
        );

        seat.scale.setScalar(
            0.001
        );

        if (ganesha)
            ganesha.visible = true;

        showGanesha(0);

        mainLight.intensity =
            0;

        warmLight.intensity =
            0;

        rimLight.intensity =
            0;

        cinematicGlow.style.opacity =
            "0";

        finalMessage.classList.remove(
            "show"
        );

        return;
    }


    // ================================================
    // 2–4 DIVINE LIGHT
    // ================================================

    if (time < 4) {

        const p =
            smooth(
                (time - 2) / 2
            );


        divineLight.material.opacity =
            p;

        divineLight.scale.setScalar(
            0.5 + p * 1.8
        );


        divinePoint.intensity =
            p * 7;


        mainLight.intensity =
            p * 1.2;


        divineRing.material.opacity =
            p * 0.5;


        divineRing.scale.setScalar(
            0.5 + p * 1.5
        );


        cinematicGlow.style.opacity =
            String(
                p * 0.7
            );

        return;
    }


    // ================================================
    // 4–6 PARTICLES
    // ================================================

    if (time < 6) {

        const p =
            smooth(
                (time - 4) / 2
            );


        divineLight.material.opacity =
            0.85;


        divinePoint.intensity =
            7;


        particleMaterial.opacity =
            p * 0.9;


        divineRing.material.opacity =
            0.5;


        particles.rotation.y +=
            0.003;


        particles.rotation.z +=
            0.001;


        cinematicGlow.style.opacity =
            "0.8";

        return;
    }


    // ================================================
    // 6–8 LOTUS CENTER
    // ================================================

    if (time < 8) {

        const p =
            smooth(
                (time - 6) / 2
            );


        lotus.scale.setScalar(
            p
        );


        lotusPetals.forEach(
            petal => {

                petal.material.opacity =
                    p * 0.35;

            }
        );


        mainLight.intensity =
            8;

        particleMaterial.opacity =
            0.9;

        return;
    }


    // ================================================
    // 8–10 LOTUS OPENS
    // ================================================

    if (time < 10) {

        const p =
            smooth(
                (time - 8) / 2
            );


        lotus.scale.setScalar(
            1
        );


        lotusPetals.forEach(
            (petal, index) => {

                const local =
                    smooth(
                        p * 1.3 -
                        index * 0.035
                    );


                petal.material.opacity =
                    local;


                petal.rotation.x =
                    -1.15 +
                    local * 1.15;

            }
        );


        return;
    }


    // ================================================
    // 10–12 FULL LOTUS
    // ================================================

    if (time < 12) {

        const p =
            smooth(
                (time - 10) / 2
            );


        lotusPetals.forEach(
            petal => {

                petal.material.opacity =
                    1;

                petal.rotation.x =
                    -1.15 +
                    p * 0.15;
            }
        );


        return;
    }


    // ================================================
    // 12–14 BASE / SEAT
    // ================================================

    if (time < 14) {

        const p =
            smooth(
                (time - 12) / 2
            );


        seat.scale.setScalar(
            p
        );


        return;
    }


    // ================================================
    // 14–16 CROWN
    // ================================================

    if (time < 16) {

        revealNamedParts(
            [
                "crown",
                "mukut",
                "headgear",
                "tiara"
            ],
            (time - 14) / 2
        );


        return;
    }


    // ================================================
    // 16–18 EYES
    // ================================================

    if (time < 18) {

        revealNamedParts(
            [
                "eye",
                "eyes"
            ],
            (time - 16) / 2
        );


        return;
    }


    // ================================================
    // 18–20 EARS
    // ================================================

    if (time < 20) {

        revealNamedParts(
            [
                "ear",
                "ears"
            ],
            (time - 18) / 2
        );


        return;
    }


    // ================================================
    // 20–22 TRUNK
    // ================================================

    if (time < 22) {

        revealNamedParts(
            [
                "trunk"
            ],
            (time - 20) / 2
        );


        return;
    }


    // ================================================
    // 22–24 FACE
    // ================================================

    if (time < 24) {

        revealNamedParts(
            [
                "face",
                "head"
            ],
            (time - 22) / 2
        );


        return;
    }


    // ================================================
    // 24–26 HANDS
    // ================================================

    if (time < 26) {

        revealNamedParts(
            [
                "hand",
                "arm",
                "palm"
            ],
            (time - 24) / 2
        );


        return;
    }


    // ================================================
    // 26–28 ORNAMENTS / CLOTHES
    // ================================================

    if (time < 28) {

        revealNamedParts(
            [
                "jewel",
                "ornament",
                "necklace",
                "garland",
                "cloth",
                "dhoti",
                "dress"
            ],
            (time - 26) / 2
        );


        return;
    }


    // ================================================
    // 28–30 COMPLETE GANESHA
    // ================================================

    if (time < 30) {

        showGanesha(
            (time - 28) / 2
        );


        mainLight.intensity =
            10;

        warmLight.intensity =
            4;

        rimLight.intensity =
            3;

        cinematicGlow.style.opacity =
            "1";

        return;
    }


    // ================================================
    // 30–32 GLOW + CAMERA ZOOM
    // ================================================

    if (time < 32) {

        const p =
            smooth(
                (time - 30) / 2
            );


        showGanesha(1);


        camera.position.z =
            8 -
            p * 1.6;


        camera.position.y =
            0.8 +
            p * 0.15;


        mainLight.intensity =
            10 +
            p * 5;


        warmLight.intensity =
            4 +
            p * 3;


        rimLight.intensity =
            3 +
            p * 2;


        cinematicGlow.style.opacity =
            "1";

        return;
    }


    // ================================================
    // 32–34 FINAL DARSHAN
    // ================================================

    if (time < 34) {

        showGanesha(1);


        camera.position.z =
            6.4;


        mainLight.intensity =
            12;

        warmLight.intensity =
            7;

        rimLight.intensity =
            5;


        cinematicGlow.style.opacity =
            "1";


        return;
    }


    // ================================================
    // 34–36 BLESSING
    // ================================================

    if (time < 36) {

        showGanesha(1);


        finalMessage.classList.add(
            "show"
        );


        mainLight.intensity =
            11;


        warmLight.intensity =
            6;


        rimLight.intensity =
            5;


        return;
    }


    // ================================================
    // 36+ CONTINUOUS DARSHAN
    // ================================================

    showGanesha(1);


    finalMessage.classList.add(
        "show"
    );


    camera.position.z =
        6.4;


    camera.position.x =
        Math.sin(
            time * 0.18
        ) * 0.08;


    camera.position.y =
        0.95 +
        Math.sin(
            time * 0.4
        ) * 0.03;


    mainLight.intensity =
        11 +
        Math.sin(
            time * 1.4
        ) * 1.5;


    warmLight.intensity =
        6;


    rimLight.intensity =
        5;


    particles.rotation.y +=
        0.0015;


    lotus.rotation.y =
        Math.sin(
            time * 0.4
        ) * 0.025;
}


// =====================================================
// ANIMATION LOOP
// =====================================================

const clock =
    new THREE.Clock();


function animate() {

    requestAnimationFrame(
        animate
    );


    const elapsed =
        clock.getElapsedTime();


    timeline(
        elapsed
    );


    if (mixer) {

        mixer.update(
            clock.getDelta()
        );

    }


    sceneTime.textContent =
        new Date(
            elapsed * 1000
        )
        .toISOString()
        .substring(14, 19);


    renderer.render(
        scene,
        camera
    );
}


animate();


// =====================================================
// RESPONSIVE
// =====================================================

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

    }
);

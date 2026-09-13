import * as THREE from "three";

const canvas = document.getElementById("ganeshCanvas");

// Hide old UI for the automatic experience
document.querySelectorAll(".screen, .step-info, .next-button").forEach(el => {
    el.style.display = "none";
});

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// Camera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(0, 0, 7);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

// --------------------------------------------------
// DIVINE LIGHT
// --------------------------------------------------

const lightGroup = new THREE.Group();
lightGroup.visible = false;
scene.add(lightGroup);

// Main divine glowing sphere
const lightGeometry = new THREE.SphereGeometry(0.18, 32, 32);

const lightMaterial = new THREE.MeshBasicMaterial({
    color: 0xffc45c,
    transparent: true,
    opacity: 0
});

const divineLight = new THREE.Mesh(
    lightGeometry,
    lightMaterial
);

lightGroup.add(divineLight);

// Point light
const pointLight = new THREE.PointLight(
    0xffb52e,
    0,
    10
);

pointLight.position.set(0, 0, 1);
lightGroup.add(pointLight);

// --------------------------------------------------
// GOLDEN PARTICLES
// --------------------------------------------------

const particleCount = 350;

const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {

    const angle = Math.random() * Math.PI * 2;
    const radius = 0.5 + Math.random() * 2.8;

    particlePositions[i * 3] =
        Math.cos(angle) * radius;

    particlePositions[i * 3 + 1] =
        (Math.random() - 0.5) * 2.5;

    particlePositions[i * 3 + 2] =
        (Math.random() - 0.5) * 1.5;
}

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        particlePositions,
        3
    )
);

const particleMaterial = new THREE.PointsMaterial({
    color: 0xffc45c,
    size: 0.025,
    transparent: true,
    opacity: 0
});

const particles = new THREE.Points(
    particleGeometry,
    particleMaterial
);

lightGroup.add(particles);

// --------------------------------------------------
// DIVINE RING
// --------------------------------------------------

const ringGeometry = new THREE.RingGeometry(
    0.55,
    0.58,
    96
);

const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0xffc45c,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide
});

const divineRing = new THREE.Mesh(
    ringGeometry,
    ringMaterial
);

divineRing.rotation.x = -Math.PI / 2;
divineRing.position.y = -0.75;

lightGroup.add(divineRing);

// --------------------------------------------------
// ANIMATION
// --------------------------------------------------

const clock = new THREE.Clock();

function animate() {

    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    // ------------------------------------------
    // 0–2 seconds
    // Completely dark
    // ------------------------------------------

    if (elapsed < 2) {

        lightGroup.visible = false;

        divineLight.material.opacity = 0;
        pointLight.intensity = 0;
        particleMaterial.opacity = 0;
        ringMaterial.opacity = 0;

    }

    // ------------------------------------------
    // 2–4 seconds
    // Divine light appears
    // ------------------------------------------

    else if (elapsed < 4) {

        lightGroup.visible = true;

        const progress = (elapsed - 2) / 2;

        // Smooth reveal
        const reveal =
            THREE.MathUtils.smoothstep(
                progress,
                0,
                1
            );

        divineLight.material.opacity =
            reveal;

        pointLight.intensity =
            reveal * 7;

        particleMaterial.opacity =
            reveal * 0.8;

        ringMaterial.opacity =
            reveal * 0.55;

        // Light grows
        const scale =
            0.5 + reveal * 1.5;

        divineLight.scale.set(
            scale,
            scale,
            scale
        );

        // Ring expands
        divineRing.scale.set(
            0.5 + reveal * 1.5,
            0.5 + reveal * 1.5,
            1
        );
    }

    // ------------------------------------------
    // After 4 seconds
    // Divine light remains
    // ------------------------------------------

    else {

        lightGroup.visible = true;

        divineLight.material.opacity = 1;

        pointLight.intensity = 7;

        particleMaterial.opacity = 0.8;

        ringMaterial.opacity = 0.55;

        // Gentle breathing effect
        const breathe =
            1 +
            Math.sin(elapsed * 2) * 0.08;

        divineLight.scale.set(
            breathe,
            breathe,
            breathe
        );

        // Particle movement
        particles.rotation.y =
            elapsed * 0.12;

        particles.rotation.z =
            elapsed * 0.05;

        // Gentle ring rotation
        divineRing.rotation.z =
            elapsed * 0.15;
    }

    renderer.render(
        scene,
        camera
    );
}

animate();

// --------------------------------------------------
// RESPONSIVE
// --------------------------------------------------

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

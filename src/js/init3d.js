import 'three';
import {AmbientLight, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import {GLTFLoader} from "three/addons";

import gsap from "gsap";

const camera = new PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 23);

const scene = new Scene();

let headphones;
const gltfLoader = new GLTFLoader();
gltfLoader.load(
    new URL('/3d/headphones.glb', import.meta.url).href,
    function(gltf) {
        headphones = gltf.scene;

        // hero
        gsap.to(headphones.position, {
            x: 2.4,
            y: -2,
            z: -10,
            ease: "power2.out",
            duration: 2.5
        });
        gsap.to(headphones.rotation, {
            x: 0.1,
            y: 0.7,
            z: -0.05,
            ease: "power2.inOut",
            duration: 3
        })

        scene.add(headphones);
    },
    function(xhr) {},
    function(error) {
        console.log(error);
    }
);

// light
const ambientLight = new AmbientLight(0xffffff, 2.2);
scene.add(ambientLight);
const topLight = new DirectionalLight(0xffffff, 2);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const renderer = new WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    renderer.render(scene, camera);
}
reRender3D();

let arrPositionModel = [
    {
        id: "heroSection",
        position: {x: 2.4, y: -2, z: -10},
        rotation: {x: 0.1, y: 0.7, z: -0.05},
    },
    {
        id: "aboutSection",
        position: {x: -2.4, y: -2, z: -8},
        rotation: {x: 0.1, y: 2.2, z: -0.05},
    },
    {
        id: "benefitsSection",
        position: {x: 0, y: -2.1, z: -19},
        rotation: {x: 0, y: 3.15, z: 0},
        // position: {x: 0, y: -2, z: -18},
        // rotation: {x: 0.05, y: 3, z: 0.1},
    },
    {
        id: "rhytmSection",
        position: {x: 0, y: -2.1, z: -19},
        rotation: {x: 0.1, y: 3.5, z: 0.3},
    },
    {
        id: "transitionSection",
        position: {x: 0, y: -2, z: -1000},
        rotation: {x: 0.05, y: 4, z: 0.1},
    },
    {
        id: "shopSection",
        position: {x: 0, y: -2, z: -1000},
        rotation: {x: 0.05, y: 4, z: 0.1},
    },
    {
        id: "contactsSection",
        position: {x: 0, y: -2, z: -25},
        rotation: {x: -0.05, y: 5, z: 0.15},
    }
]

const modelMove = () => {
    const sections = document.querySelectorAll("section");
    let currentSection;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
            currentSection = section.id;
        }
    })

    let positionActive = arrPositionModel.findIndex(
        (val) => val.id == currentSection
    );
    if (positionActive >= 0) {
        let newCoords = arrPositionModel[positionActive];
        gsap.to(headphones.position, {
            x: newCoords.position.x,
            y: newCoords.position.y,
            z: newCoords.position.z,
            duration: 1,
            ease: "power2.out",
        })
        gsap.to(headphones.rotation, {
            x: newCoords.rotation.x,
            y: newCoords.rotation.y,
            z: newCoords.rotation.z,
            duration: 1.5,
            ease: "power2.out"
        })
    }
}
window.addEventListener("scroll", function() {
    if (headphones) {
        modelMove()
    }
})
window.addEventListener("resize", function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
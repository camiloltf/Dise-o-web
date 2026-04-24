import * as THREE from 'three';

const Banner = document.getElementById("Banner");
let A = Banner.clientWidth;
let F = Banner.clientHeight;

const scene2 = new THREE.Scene();
scene2.background = new THREE.Color(0x111111);

const camera2 = new THREE.PerspectiveCamera(75, A / F, 0.1, 1000);
camera2.position.z = 5;

const renderer2 = new THREE.WebGLRenderer({ antialias: true });
renderer2.setSize(A, F);
Banner.appendChild(renderer2.domElement);


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene2.add(light);

const ambientLight = new THREE.AmbientLight(0x404040);
scene2.add(ambientLight);

const geometry2 = new THREE.ConeGeometry(1.5, 2.5, 4);
const material2 = new THREE.MeshStandardMaterial({ 
    color: 0xc2a36b,
    flatShading: true
});

const pyramid = new THREE.Mesh(geometry2, material2);
scene2.add(pyramid);

function animate2(time2) {

    pyramid.rotation.y = time2 / 1000;
    pyramid.rotation.x = Math.sin(time2 / 1000) * 0.3;

    renderer2.render(scene2, camera2);
}

renderer2.setAnimationLoop(animate2);
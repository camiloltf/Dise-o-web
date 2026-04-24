import * as THREE from 'three';

const About = document.getElementById("About-Interactivo");
let W = About.clientWidth;
let H = About.clientHeight;

console.log(W + "," + H)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(W,H);
renderer.setAnimationLoop( animate );
About.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry( 5, 0.5, 5 );
const material = new THREE.MeshBasicMaterial( { color: 0xC19A6B } );
const piramide = new THREE.Mesh( geometry, material );
scene.add( piramide );

const geometry2 = new THREE.BoxGeometry( 4, 0.5, 4 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xC19A6B } );
const piramide2 = new THREE.Mesh( geometry2, material2 );
scene.add( piramide2 );

const geometry3 = new THREE.BoxGeometry( 3, 0.5, 3 );
const material3 = new THREE.MeshBasicMaterial( { color: 0xC19A6B } );
const piramide3 = new THREE.Mesh( geometry3, material3 );
scene.add( piramide3 );

const geometry4 = new THREE.BoxGeometry( 2, 0.5, 2 );
const material4 = new THREE.MeshBasicMaterial( { color: 0xC19A6B } );
const piramide4 = new THREE.Mesh( geometry4, material4 );
scene.add( piramide4 );

piramide2.position.y = 0.5;
piramide3.position.y = 1;
piramide4.position.y = 1.5;

camera.position.z = 8;
camera.position.y = 1.5;

function animate( time ) {

  piramide.rotation.y = time / 1000;
  piramide2.rotation.y = time / 1000;
  piramide3.rotation.y = time / 1000;
  piramide4.rotation.y = time / 1000;


  renderer.render( scene, camera );

}
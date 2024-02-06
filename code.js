import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js'
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('3d')})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth - 20, window.innerHeight - 20)
camera.position.setX(100)
renderer.render(scene, camera)
const geometry = new THREE.TorusGeometry(10, 4, 19)
const material = new THREE.MeshStandardMaterial({color: new THREE.Color(0, 0, 255)})
const shape = new THREE.Mesh(geometry, material)
scene.add(shape)
const pointlight = new THREE.PointLight(0xffffff)
pointlight.position.set(5, 5, 10, 100)
const light = new THREE.AmbientLight(0xffffff)
scene.add(light, pointlight)
const grid = new THREE.GridHelper(2000, 500)
scene.add(grid)
const controls = new OrbitControls(camera, renderer.domElement)
scene.background = new THREE.Color(0, 255, 255)
function animate() {
    requestAnimationFrame( animate )
    shape.rotation.z += 0.1
    renderer.render(scene, camera)
    }
animate()
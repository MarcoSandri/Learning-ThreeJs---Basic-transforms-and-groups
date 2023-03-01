import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)

cube2.position.set(1, 0, 0)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)

cube3.position.set(.5, 1, 0)

group.rotation.reorder('XYZ')
group.rotation.y = - Math.PI / 8
group.rotation.x = Math.PI / 8

group.scale.x = 2

group.add(cube1, cube2, cube3)

scene.add(group)


// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// // Positioning
// mesh.position.set(.7, -.7, 1)

// // Scale
// mesh.scale.set(2, .5, .5)

// //Rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x =  Math.PI / 4
// mesh.rotation.y =  Math.PI / 4

// scene.add(mesh)

// Axes helper
const axesHelper = new THREE.AxesHelper(3)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 0, 5)

scene.add(camera)
scene.add(axesHelper)

// camera.lookAt(mesh.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
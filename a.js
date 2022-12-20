// Import the three.js library

// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up the cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Position the camera
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
  
    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    // Reset the rotation when it reaches a certain value
    if (cube.rotation.x > 2 * Math.PI) {
      cube.rotation.x -= 2 * Math.PI;
    }
    if (cube.rotation.y > 2 * Math.PI) {
      cube.rotation.y -= 2 * Math.PI;
    }
  
    // Render the scene
    renderer.render(scene, camera);
  }
  
  animate();
  
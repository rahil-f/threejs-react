import './App.css'
import { useEffect } from "react"
import * as THREE from "three"

//window sizes object
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

function App() {
  useEffect(() => {
    //create the scene
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      50,//fov
      sizes.width,//aspect
      0.1,//near
      100//far
      );

    //z position of the camera
    camera.position.z = 96;

    //get the canvas by id
    const canvas = document.getElementById("threeCanvas");

    //set the renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });

    //set the renderer size
    renderer.setSize(sizes.width, sizes.height);
    document.body.appendChild(renderer.domElement);

    //set the ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0,5);
    ambientLight.castShadow = true;
    
    //add the ambient light to the scene
    scene.add(ambientLight);

    //set the spot light
    const spotLight = new THREE.SpotLight(0xffffff, 1)
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32)

    //add the spot light to the scene
    scene.add(spotLight);

    //set the animate function
    const animate = () => {
      //render the scene
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }
    animate();
  }, [])

  return (
    <>
      <canvas id="threeCanvas"></canvas>
    </>
  )
}

export default App

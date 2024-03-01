import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Chess(props) {
  const mesh = useRef();

  // Load your .glb model
  const { scene } = useLoader(GLTFLoader, "/static/robocat.glb");

  // Convert 90 degrees to radians
  const initialRotation = 150 * (Math.PI / 180);

  useEffect(() => {
    if (mesh.current) {
      // Set the initial rotation
      mesh.current.rotation.y = initialRotation;
    }
  }, []);

  // Apply ref to the scene for rotation
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.00025;
    }
  });

  return (
    <primitive object={scene} {...props} ref={mesh} scale={[35, 35, 35]} />
  );
}

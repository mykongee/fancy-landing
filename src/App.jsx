import * as THREE from "three";
import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function Box({ z }) {
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(1),
    y: THREE.MathUtils.randFloatSpread(height/2),
  })


  useFrame((state) => {
    ref.current.position.set(data.x * width, data.y -= 0.15, z);
    if (data.y < -height / 1.5) {
      data.y = height / 1.5;
    }
  })

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  )
}

export default function App({ count = 100 }) {
  return (
    <Canvas>
      {Array.from({ length: count}, (_, i) => (<Box key={i} z={-i}/>)) }
    </Canvas>
  )
}


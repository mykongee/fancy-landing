import { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";

function Box() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y = Math.PI * Math.sin(state.clock.elapsedTime);
    ref.current.rotation.x = Math.cos(state.clock.elapsedTime);
  })

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  )
}


export default function App() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  )
}


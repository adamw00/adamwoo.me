import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { Points, PointMaterial, Point } from '@react-three/drei'

export default function Home() {
    const height = window.innerHeight-30;
    const width = window.innerWidth
    const [c, setC] = useState();
    function changeColor() {
        setC( '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
    }
  return (
    <div style={{height, width}}>
        <Canvas camera={{ position: [0, 0, 1.5], fov: 75 }} style={{ height: '100%', width: '100%' }}>
            <ambientLight intensity={0.01} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <Stars color={c}/>
            {/* <Sphere/> */}
        </Canvas>
        
        <button className='bg-white h-5 w-full' onClick={changeColor}>CHANGE COLOR</button>
    </div>
  )
}

function Stars(props) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const generateSpherePoints = () => {
    const sphere = new Float32Array(5000 * 3);
    for (let i = 0; i < sphere.length; i += 3) {
      sphere[i] = Math.random() * 3 - 1.5; // x coordinate
      sphere[i + 1] = Math.random() * 3 - 1.5; // y coordinate
      sphere[i + 2] = Math.random() * 3 - 1.5; // z coordinate
    }
    return sphere;
  };
  
  const [sphere] = useState(generateSpherePoints);
//   useFrame((s, delta) => {
//     ref.current.rotation.x -= delta / 10
//     ref.current.rotation.y -= delta / 15
//   })
  useFrame(({ pointer, viewport }) => {
    const x = (pointer.x ) / 800
    const y = (pointer.y ) / 400
    ref.current.rotation.x -=x;
    ref.current.rotation.y -=y;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color={props.color} size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

// const Sphere = () => {
//     const myMesh = useRef()
    
//     return (
//     <mesh ref={myMesh} onPointerOver={}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial />
//       </mesh>
//     );
//   };
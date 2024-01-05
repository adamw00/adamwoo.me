import { useRef, useEffect } from 'react'
import {  useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import gsap from 'gsap';

export default function Home() {
    const set = useThree((state) => state.set)
    const {camera} = useThree();
    useEffect(() => {
        gsap.to(camera.position, {
            duration: 2,
            x: 0,
            y: 0,
            z: 1.5,
            delay: 0.5,
            ease: "power3.inOut",
          });
    }, [])


    function changeColor() {
        setC( '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
    }
  return (
    <>
        <Cube></Cube>
    </>
  )
}

// /camera={{ position: [0, 0, 1.5], fov: 75 }} 


const Cube = () => {
    const myMesh = useRef()
    const { width, height } = useThree(state => state.viewport)
    return (
    <mesh ref={myMesh} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
    );
  };
import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import { useNavigate,useLocation } from 'react-router'

export default function Stars(props) {
    const ref = useRef()
    const generateSpherePoints = () => {
      const sphere = new Float32Array(5000 * 3);
      for (let i = 0; i < sphere.length; i += 3) {
        sphere[i] = Math.random() * 3 - 1.5; // x coordinate
        sphere[i + 1] = Math.random() * 3 - 1.5; // y coordinate
        sphere[i + 2] = Math.random() * 3 - 1.5; // z coordinate
      }
      return sphere;
    };
    const [nav, setNav] = useState(0);
    useEffect(() => {
        if (location.pathname !== "/" && nav==1) {
            navigate("/");
            console.log("ROUTING");
            setNav(0);
        }
    }, [nav])
    
    
    const [sphere] = useState(generateSpherePoints);
  //   useFrame((s, delta) => {
  //     ref.current.rotation.x -= delta / 10
  //     ref.current.rotation.y -= delta / 15
  //   })
    useFrame(({ pointer, viewport }) => {
      const x = (pointer.x ) / 400
      const y = (pointer.y ) / 400
      ref.current.rotation.x +=y;
      ref.current.rotation.y -=x;
    })

    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = () => {
        setNav(1);
    }
  
    return (
      <mesh rotation={[0, 0, 0]} onClick={handleClick}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props} >
          <PointMaterial transparent color={props.color} size={0.005} sizeAttenuation={true} depthWrite={false}/>
        </Points>
      </mesh>
    )
  }
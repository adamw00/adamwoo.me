import { useThree, extend, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useEffect, useState, useMemo, useRef } from "react";
import vertexShader from "../assets/vertexShader";
import fragmentShader from "../assets/fragmentShader";
import { Sphere } from '@react-three/drei'
import { MathUtils } from "three";
import { useNavigate,useLocation } from "react-router";
import gsap from "gsap";

function About() {
    const [opacity, setOpacity] = useState(0)
    const mesh = useRef();
    const hover = useRef(false);
    const {camera} = useThree()
    useEffect(() => {
        gsap.to(camera.position, {
            duration: 2,
            x: 0,
            y: 6,
            z: 12,
            delay: 1,
            ease: "power3.inOut",
          });
    }, [])

    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = () => {
        if (location.pathname !== "/") navigate("/");
    }

    useFrame((state) => {
        const { clock } = state;
        if (mesh.current) {
          mesh.current.material.uniforms.u_time.value =
            0.4 * clock.getElapsedTime();
    
          mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 1 : 0.15,
            0.02
          );
        }
      });

    const uniforms = useMemo(() => {
        return {
          u_time: { value: 0 },
          u_intensity: { value: 0.3 },
        };
      });
    

    return (<>
        <mesh position={[4.6,8,0] }>
            <Html transform occlude center className="HUD aboutMeText">
                <h1>ABOUT ME</h1>
                <p>My name is Adam Woo. I am an aspiring Software Engineer with a focus on Frontend development.</p>
                <br/><p>I am a Computer Science Student at <br/>Stevens Institute of Technology</p>
                <p>Current Year: Senior</p>
                <br/><p>Hobbies: Coding, Hiking, Snowboarding, & Music</p>
            </Html>
         </mesh>
         <mesh ref={mesh} scale={0.4} position={[0, 0, 0]} onClick={handleClick} onPointerOver={() => (hover.current = true)} onPointerOut={() => (hover.current = false)}>
            <icosahedronGeometry args={[2,20]}/>
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
        </>);
}

export default About;


    // const [opacity, setOpacity] = useState(0)

    // const handleHoverOn = () => {
    //     setOpacity(0.7);
    // }
    // const handleHoverOff = () => {
    //     setOpacity(0.2);
    // }    
    //      <group rotation={[0, 0, 0]} onClick={handleClick}>
    //         <Sphere onPointerOver={handleHoverOn} onPointerOut={handleHoverOff}>
    //             <meshStandardMaterial color="gray" transparent opacity={opacity}/>
    //         </Sphere>
    //     </group>
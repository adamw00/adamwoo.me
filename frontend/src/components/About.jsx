import { useThree, extend, useFrame } from "@react-three/fiber";
import { Html, Text } from "@react-three/drei";
import { useEffect, useState, useMemo, useRef } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import gsap from "gsap";

function About() {
  const { camera } = useThree();
  const mesh = useRef();
  const mat = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    gsap.to(camera.position, {
      duration: 2,
      x: 0,
      y: 6,
      z: 12,
      delay: 1,
      ease: "power3.inOut",
    });
    setActive(true);
  }, []);

  const { scale, opacity } = useSpring({
    scale: active ? 1 : 0,
    delay: 2400,
  });

  return (
    <>
      <animated.mesh ref={mesh} position={[0, 8, 0]} scale={scale}>
        <Text>
          ABOUT ME
        </Text>
        <Text position={[0,-1,0]} fontSize={0.5}>
        My name is Adam Woo. I am an aspiring Software Engineer with a focus on Frontend development.
        </Text>
        <meshStandardMaterial attach="material" opacity={opacity} transparent />
      </animated.mesh>
    </>
  );
}

export default About;

 {/* <Html transform occlude center className="HUD aboutMeText">
                <h1>ABOUT ME</h1>
                <p>My name is Adam Woo. I am an aspiring Software Engineer with a focus on Frontend development.</p>
                <br/><p>I am a Computer Science Student at <br/>Stevens Institute of Technology</p>
                <p>Current Year: Senior</p>
                <br/><p>Hobbies: Coding, Hiking, Snowboarding, & Music</p>
            </Html> */}
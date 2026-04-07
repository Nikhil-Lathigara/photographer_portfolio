"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const numParticles = 1800;

function Particles() {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const seeded = (seed) => {
      const x = Math.sin(seed * 12.9898) * 43758.5453123;
      return x - Math.floor(x);
    };

    const pos = new Float32Array(numParticles * 3);
    for (let i = 0; i < numParticles; i++) {
      const nx = seeded(i * 3 + 1) - 0.5;
      const ny = seeded(i * 3 + 2) - 0.5;
      const nz = seeded(i * 3 + 3) - 0.5;
      pos[i * 3] = nx * 38;
      pos[i * 3 + 1] = ny * 26;
      pos[i * 3 + 2] = nz * 20 - 3;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (pointsRef.current) {
      const particlePositions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < numParticles; i++) {
        particlePositions[i * 3 + 1] += 0.0007 * Math.sin(time * 0.4 + i * 0.35);
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={0xc9a84c}
        size={0.026}
        transparent
        opacity={0.48}
        sizeAttenuation
      />
    </points>
  );
}

function Rings() {
  const ringsRef = useRef([]);

  const ringData = useMemo(
    () => [
      { r: 3.4, t: 0.01, c: 0xc9a84c, rx: 0.3, ry: 0.5, rz: 0.1, s: 0.00055 },
      { r: 5.4, t: 0.007, c: 0x7a6030, rx: 0.6, ry: 0.1, rz: 0.4, s: 0.00038 },
      { r: 2.2, t: 0.013, c: 0xd4693a, rx: 0.1, ry: 0.8, rz: 0.2, s: 0.0009 },
      { r: 7.0, t: 0.004, c: 0x383025, rx: 0.4, ry: 0.2, rz: 0.7, s: 0.00028 },
      { r: 1.6, t: 0.011, c: 0xb88a3c, rx: 0.9, ry: 0.3, rz: 0.5, s: 0.0011 },
    ],
    []
  );

  useFrame((state, delta) => {
    const pmx = state.pointer.x;
    const pmy = state.pointer.y;

    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        const data = ringData[i];
        ring.rotation.x += data.s + pmx * 0.013 * delta * 60;
        ring.rotation.y += data.s * 0.7 + pmy * 0.013 * delta * 60;
        ring.rotation.z += data.s * 0.4;
      }
    });
  });

  return (
    <>
      {ringData.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => {
            ringsRef.current[i] = el;
          }}
          rotation={[data.rx, data.ry, data.rz]}
        >
          <torusGeometry args={[data.r, data.t, 8, 130]} />
          <meshBasicMaterial color={data.c} transparent opacity={0.52} />
        </mesh>
      ))}
    </>
  );
}

function Scene() {
  useFrame((state) => {
    const pmx = state.pointer.x;
    const pmy = state.pointer.y;

    state.camera.position.x += (pmx * 0.22 - state.camera.position.x) * 0.032;
    state.camera.position.y += (pmy * 0.16 - state.camera.position.y) * 0.032;
  });

  return (
    <>
      <Particles />
      <Rings />
    </>
  );
}

export default function ThreeBackground() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.9));
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full z-0 pointer-events-none transition-opacity duration-75"
      style={{ opacity }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60, near: 0.1, far: 400 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

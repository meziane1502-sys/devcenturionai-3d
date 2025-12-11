"use client";

import { PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, Suspense, useEffect } from "react";
import * as THREE from "three";

// Generate sphere positions without NaN values
const generateSpherePositions = (count: number, radius: number): Float32Array => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.cbrt(Math.random()) * radius;

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

// Generate galaxy spiral positions
const generateGalaxyPositions = (count: number, radius: number): Float32Array => {
  const positions = new Float32Array(count * 3);
  const branches = 3;
  const spin = 1.5;
  const randomness = 0.5;

  for (let i = 0; i < count; i++) {
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;
    const distance = Math.random() * radius;
    const spinAngle = distance * spin;

    const randomX = (Math.random() - 0.5) * randomness * distance;
    const randomY = (Math.random() - 0.5) * randomness * distance * 0.5;
    const randomZ = (Math.random() - 0.5) * randomness * distance;

    positions[i * 3] = Math.cos(branchAngle + spinAngle) * distance + randomX;
    positions[i * 3 + 1] = randomY;
    positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * distance + randomZ;
  }
  return positions;
};

// Star layer component
const StarLayer = ({
  count,
  radius,
  color,
  size,
  rotationSpeed
}: {
  count: number;
  radius: number;
  color: string;
  size: number;
  rotationSpeed: { x: number; y: number };
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    setPositions(generateSpherePositions(count, radius));
  }, [count, radius]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * rotationSpeed.x;
      pointsRef.current.rotation.y -= delta * rotationSpeed.y;
    }
  });

  if (!positions) return null;

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
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </points>
  );
};

// Galaxy layer component
const GalaxyLayer = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    setPositions(generateGalaxyPositions(3000, 1.5));
  }, []);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  if (!positions) return null;

  return (
    <group rotation={[Math.PI / 6, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          size={0.003}
          sizeAttenuation
          depthWrite={false}
          vertexColors={false}
          color="#f97316"
          opacity={0.6}
        />
      </points>
    </group>
  );
};

// Nebula effect with fog
const Nebula = () => {
  return (
    <>
      <fog attach="fog" args={["#09090b", 1, 3]} />
      <ambientLight intensity={0.1} />
    </>
  );
};

const StarBackground = () => {
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Main orange stars - close */}
      <StarLayer
        count={800}
        radius={1.0}
        color="#f97316"
        size={0.003}
        rotationSpeed={{ x: 0.1, y: 0.15 }}
      />

      {/* Violet accent stars - medium */}
      <StarLayer
        count={400}
        radius={1.3}
        color="#a855f7"
        size={0.002}
        rotationSpeed={{ x: 0.05, y: 0.08 }}
      />

      {/* White distant stars - far */}
      <StarLayer
        count={600}
        radius={1.8}
        color="#ffffff"
        size={0.001}
        rotationSpeed={{ x: 0.02, y: 0.03 }}
      />

      {/* Galaxy spiral */}
      <GalaxyLayer />
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Nebula />
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

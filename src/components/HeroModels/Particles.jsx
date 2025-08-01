import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5, // higher starting point
          (Math.random() - 0.5) * 10,
        ],
        velocity: [
          (Math.random() - 0.5) * 0.01, // x drift
          (Math.random() - 0.5) * 0.01, // y drift (up/down)
          (Math.random() - 0.5) * 0.01, // z drift
        ],
        speed: 0.005 + Math.random() * 0.001,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    const positions = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < 3; j++) {
        const idx = i * 3 + j;
        positions[idx] += particles[i].velocity[j];

        const yIndex = i * 3 + 1;
        if (positions[yIndex] < -5) {
          positions[i * 3] = (Math.random() - 0.5) * 10;
          positions[i * 3 + 1] = Math.random() * 10 + 5; // y (above view)
          positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
      }
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.05} transparent opacity={0.9} depthWrite={false} />
    </points>
  );
};

export default Particles;

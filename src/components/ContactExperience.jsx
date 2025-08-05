import { OrbitControls, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Mail } from './Models/Mail_icon';

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
      <ambientLight intensity={0.5} color="#fff436" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
      <directionalLight position={[5, 9, 1]} castShadow intensity={2.5} color="#ffd9b3" />

      <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={1} position={[0, 0, 0]} castShadow>
          <Mail />
        </group>
      </Float>
    </Canvas>
  );
};

export default ContactExperience;

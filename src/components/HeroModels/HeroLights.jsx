const HeroLights = () => {
  return (
    <>
      <spotLight position={[3, 8, -2]} angle={0.5} intensity={400} penumbra={0.2} color="purple" />
      <spotLight position={[3, -8, -2]} angle={0.8} intensity={25} penumbra={0.2} color="white" />
      <spotLight position={[-3, -8, -2]} angle={0.8} intensity={25} penumbra={0.2} color="white" />
      <spotLight position={[0, -8, 3]} angle={0.8} intensity={25} penumbra={0.2} color="white" />
      <spotLight position={[1, 10, -2]} angle={0.8} intensity={12} penumbra={0.2} color="white" />
      <spotLight position={[-1, 10, -2]} angle={0.8} intensity={12} penumbra={0.2} color="white" />
    </>
  );
};

export default HeroLights;

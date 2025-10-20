// HeroLights.jsx
import React from 'react'
import { Environment } from '@react-three/drei'

const HeroLights = () => {
  return (
    <>
      {/* Fill light */}
      <ambientLight intensity={6} />

      {/* Main key light */}
      <directionalLight position={[5, 5, 5]} intensity={15} />

      {/* Rim/back light */}
      <directionalLight position={[-5, 3, -5]} intensity={0.8} />

      {/* Environment adds global reflections */}
      <Environment preset="city" />
    </>
  )
}

export default HeroLights

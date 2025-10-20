import{Canvas} from '@react-three/fiber';
import{OrbitControls} from '@react-three/drei';
import {Room} from './Room.jsx';
import { Coin } from './Coin.jsx';
import { useMediaQuery } from 'react-responsive';
import HeroLights from './HeroLights.jsx';
const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <Canvas camera={{position:[0,0,15], fov:50}}>
      {/* 3D Model goes here */}
     <HeroLights/>
      <OrbitControls 
      enablePan={false} 
      enableZoom={!isTablet}
      maxDistance={isTablet ? 10 : 20}
      minDistance={5}
      minPolarAngle={Math.PI/5}
      maxPolarAngle={Math.PI/2}
      />
      {/* Replace the box with your 3D model */}

      <group scale={isMobile? 0.7:1}
        // position={[0,-3.5,0]}
        rotation={[0,-Math.PI/4,0]}
      >
        <Coin/>
      </group>
    </Canvas>
  )
}

export default HeroExperience

import { ScrollContainer } from './components/camera-scroll'
import { Loading } from './components/loading'
import { Floor } from './models/floor'
import { Environment, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Eva } from './models/eva'
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing'
import { Suspense } from 'react'

export function App() {
  return (
    <div className='h-screen w-screen bg-violet-950'>
      <Canvas shadows camera={{ position: [2, 2, 3], fov: 50 }}>
        <Suspense fallback={<Loading />}>
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
            <Vignette offset={0} darkness={1} />
            <Noise opacity={0.01} />
          </EffectComposer>
          <color attach='background' args={['#2e1065']} />
          <fog attach='fog' args={['#2e1065', 1, 11]} />
          <Environment preset='city' />
          <ScrollControls pages={5}>
            <ScrollContainer>
              <Eva scale={0.005} position={[0, -2.2, 0]} />
              <Floor position={[0, -2.3, 0]} />
            </ScrollContainer>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}

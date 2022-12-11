import "./App.css";
import {
  Environment,
  OrbitControls,
  ScrollControls,
  SpotLight,
  Stats,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { Eva } from "./ModelsTSX/eva";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  DepthOfField,
} from "@react-three/postprocessing";

type Props = {
  children: React.ReactNode;
};
function ScrollContainer(props: Props) {
  const scroll = useScroll();
  useFrame((state, delta) => {
    const offset = 1 - scroll.offset;
    state.camera.position.set(
      Math.cos(offset * Math.PI - 1 / 3) * 5 + 1,
      Math.atan(offset * Math.PI * 6) * -2.7 + 2.8,
      Math.sin((offset * Math.PI) / 2) * -3 - 1
    );
    state.camera.lookAt(offset, -offset * 1.5 + 1, offset);
  });

  return <group>{props.children}</group>;
}

function App() {
  return (
    <Canvas shadows camera={{ position: [2, 2, 3], fov: 40 }}>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.01}
          bokehScale={0.1}
          height={480}
        />
        <Bloom
          luminanceThreshold={0.6}
          luminanceSmoothing={1}
          height={1}
          intensity={0.1}
        />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      <Suspense fallback={null}>
        <Environment preset="city" />
        <SpotLight
          penumbra={1}
          color="purple"
          position={[2, 8, -9]}
          distance={58}
          angle={2.4}
          intensity={2}
          attenuation={14}
          anglePower={0.1}
        />
        <ScrollControls pages={3}>
          <ScrollContainer>
            <Eva scale={0.005} position={[0, -2, 0]} />
          </ScrollContainer>
        </ScrollControls>
      </Suspense>
      <Stats></Stats>
      <OrbitControls makeDefault></OrbitControls>
    </Canvas>
  );
}
export default App;

import "./App.css";
import { ScrollContainer } from "./components/CameraScroll";
import { Loader } from "./components/Loader";
import { Floor } from "./ModelsTSX/Floor";
import { Environment, ScrollControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Eva } from "./ModelsTSX/Eva";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense } from "react";

function App() {
  return (
    <Canvas shadows camera={{ position: [2, 2, 3], fov: 40 }}>
      <Suspense fallback={<Loader />}>
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
          <Vignette offset={0} darkness={1} />
          <Noise opacity={0.01} />
        </EffectComposer>
        <color attach="background" args={["#2D0058"]} />
        <fog attach="fog" args={["#2D0058", 1, 11]} />
        <Environment preset="city" />
        <ScrollControls pages={5}>
          <ScrollContainer>
            <Eva scale={0.005} position={[0, -2.2, 0]} />
            <Floor position={[0, -2.3, 0]} />
          </ScrollContainer>
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
export default App;

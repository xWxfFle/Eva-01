import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="loader">
      {progress.toFixed()} % loaded
    </Html>
  );
}
